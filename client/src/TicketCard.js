import {useState} from "react"
import {Card, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

function TicketCard({ticket, handleDelete}) {
    const [wasClicked, setWasClicked] = useState(false)

    function adminCompleted() {
        if (ticket.completed_admin) {
            return ticket.completed_admin
        } else {
            return "N/A"
        }
    }

    function handleWasClicked() {
        setWasClicked(current => !current)
    }

    return (
        <div>
            <Card className="center" style={{width: '80rem'}}>
                <Card.Header as="h5">{`${ticket.created_date} - ${ticket.author} - Completed by: ${adminCompleted()}`}</Card.Header>
                <Card.Body>
                    <Card.Title>{ticket.subject}</Card.Title>
                    <Card.Text>{`STATUS: ${ticket.status}`}</Card.Text>
                    {wasClicked?<Card.Text>{ticket.description}</Card.Text>:null}
                    <Card.Footer>
                        <Button variant="primary" onClick={()=>handleDelete(ticket.id)}>Delete</Button>
                        <Button variant="secondary" className="movetoright" onClick={handleWasClicked}>{!wasClicked?"Preview":"Hide"}</Button>
                        {ticket.status === "completed"?<Link to={`viewticket/${ticket.id}`}><Button className="movetoright" variant="warning">View</Button></Link>:null}
                    </Card.Footer>
                </Card.Body>
            </Card>

        </div>
    )
}

export default TicketCard