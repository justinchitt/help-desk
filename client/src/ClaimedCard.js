import {Card, Button} from "react-bootstrap"
import {useHistory} from "react-router-dom"

function ClaimedCard({ticket, setTickets}) {
    let history = useHistory()

    function handleRespond() {
        history.push(`/respond/${ticket.id}`)
    }

    const unclaimed = {
        admin_id: null,
        status: "unclaimed"
    }

    function handleUnclaim() {
        fetch(`/tickets/claim/${ticket.id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(unclaimed)
        })
        .then(resp => resp.json())
        .then(unclaimed => {
            setTickets(current => current.filter((ticket) => unclaimed.id !== ticket.id))
         })
    }

    return (
        <div>
            <Card className="awayfromtop" style={{width: '80rem'}}>
                <Card.Header as="h5" >{`${ticket.author} ${ticket.created_date}`}</Card.Header>
                <Card.Body>
                    <Card.Title>{ticket.subject}</Card.Title>
                    <Card.Text>{`Status: ${ticket.status}`}</Card.Text>
                    <Card.Text>{ticket.description}</Card.Text>
                    <Button onClick={handleRespond} variant="primary">Respond</Button>
                    <Button className="movetoright" variant="secondary" onClick={handleUnclaim}>Unclaim</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ClaimedCard