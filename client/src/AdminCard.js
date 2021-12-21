import {Card, Button} from "react-bootstrap"

function AdminCard({ticket, user, setTickets}) {

    let userData = {
        admin_id: user.id,
        status: "processing"
    }

    function handleClaim() {
        fetch(`/tickets/claim/${ticket.id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(userData)
        })
        .then(resp => resp.json())
        .then(claimed => setTickets(current => current.filter(element => element.id !== claimed.id)))
    }

    return (
        <div>
            <Card>
            <Card.Header as="h5">{`${ticket.author} ${ticket.created_date}`}</Card.Header>
                <Card.Body>
                    <Card.Title>{ticket.subject}</Card.Title>
                    <Card.Text>{ticket.description}</Card.Text>
                    <Button onClick={handleClaim} variant="primary">Claim</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AdminCard