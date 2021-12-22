import {Card, Button} from "react-bootstrap"
import {useHistory} from "react-router-dom"

function ClaimedCard({ticket}) {
    return (
        <div>
            <Card>
                <Card.Header as="h5">{`${ticket.author} ${ticket.created_date}`}</Card.Header>
                <Card.Body>
                    <Card.Title>{ticket.subject}</Card.Title>
                    <Card.Text>{ticket.description}</Card.Text>
                    <Button variant="primary">Respond</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ClaimedCard