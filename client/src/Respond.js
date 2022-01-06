import {useParams, useHistory} from "react-router-dom"
import {useEffect, useState} from "react"
import { Card, Form, Button } from "react-bootstrap"

function Respond({user, date, setTickets}) {
    const [ticket, setTicket] = useState({})
    const [formData, setFormData] = useState({
        completed_admin: `${user.first_name} ${user.last_name}`,
        solution: "",
        completed_date: date,
        status: "completed"
    })
    const {id} = useParams()
    let history = useHistory()

    useEffect(() => {
        fetch(`/tickets/${id}`)
        .then(resp => resp.json())
        .then(setTicket)
    },[id])

    function handleChange(e) {
        let key = e.target.name
        let value = e.target.value
        setFormData(current => ({...current, [key]: value}))
        console.log(formData)
    }

    function handleClaim() {
        fetch(`/tickets/claim/${ticket.id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(claimed => {
            setTickets(current => current.filter(previous => {
                return previous.id !== claimed.id
            }))
        })
        history.push("/claimed")
    }

    function back() {
        history.push("/claimed")
    }

    return (
        <div>
            <Card className="awayfromtop" style={{width: '80rem'}}>
                <Card.Header as="h5">{`${ticket.created_date} Author: ${ticket.author}`} </Card.Header>
                <Card.Body>
                    <Card.Title>{ticket.subject}</Card.Title>
                    <Card.Text>{`STATUS: ${ticket.status}`}</Card.Text>
                    <Card.Text>{ticket.description}</Card.Text>
                    <Card.Footer>
                        <Form onSubmit={handleClaim}>
                            <Form.Group className="mb-3" controlId="formSolution" >
                                <Form.Label>Action Taken: </Form.Label>
                                <Form.Control rows={4} as="textarea" type="text" name="solution" value={formData.solution} onChange={handleChange} required/>
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                            <Button variant="secondary" className="movetoright" onClick={back}>Back</Button>
                        </Form>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Respond