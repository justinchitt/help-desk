import {useParams, useHistory} from "react-router-dom"
import {useEffect, useState} from "react"
import {Card, Button} from "react-bootstrap"

function ViewTicket({handleDelete}) {
    const [ticket, setTicket] = useState({})
    const history = useHistory()
    const {id} = useParams()

    useEffect(() => {
        fetch(`/tickets/${id}`)
        .then(resp => resp.json())
        .then(setTicket)
    },[id])

    function adminResponse() {
        if (ticket.status === "completed") {
            return (
                <>
                    <Card.Header as="h5">{`${ticket.completed_date} Admin: ${ticket.completed_admin}`}</Card.Header>
                    <Card.Title>Action Taken:</Card.Title>
                    <Card.Text>{ticket.solution}</Card.Text>
                </>
            )
        }
    }

    function handleClick() {
        history.push("/viewall")
    }

    function sendBack() {
        handleDelete(ticket.id)
        history.push("/viewall")
    }


    return (
        <div>
            <Card className="awayfromtop" style={{width: '80rem'}}>
                <Card.Header as="h5">{`${ticket.created_date}`}</Card.Header>
                <Card.Body>
                    <Card.Title>{ticket.subject}</Card.Title>
                    <Card.Text>{`STATUS: ${ticket.status}`}</Card.Text>
                    <Card.Text>{ticket.description}</Card.Text>
                    {adminResponse()}
                    <Card.Footer>
                        <Button onClick={sendBack} variant="primary">Delete</Button>
                        <Button className="movetoright" variant="secondary" onClick={()=>handleClick(ticket.id)}>Back</Button>
                    </Card.Footer>
                </Card.Body>
            </Card>

        </div>
    )
}

export default ViewTicket