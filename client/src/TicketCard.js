import {Card, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

function TicketCard({ticket, handleDelete}) {

    function adminCompleted() {
        if (ticket.completed_admin) {
            return ticket.completed_admin
        } else {
            return "N/A"
        }
    }

    return (
        <div>
            <Card className="center" style={{width: '80rem'}}>
                <Card.Header as="h5">{`${ticket.created_date} - ${ticket.author} - Completed by: ${adminCompleted()}`}</Card.Header>
                <Card.Body>
                    <Card.Title>{ticket.subject}</Card.Title>
                    <Card.Text>{`STATUS: ${ticket.status}`}</Card.Text>
                    <Card.Footer>
                        <Button variant="primary" onClick={()=>handleDelete(ticket.id)}>Delete</Button>
                        {ticket.status === "completed"?<Link to={`viewticket/${ticket.id}`}><Button variant="secondary">View</Button></Link>:null}
                    </Card.Footer>
                </Card.Body>
            </Card>

        </div>
    )
}

export default TicketCard