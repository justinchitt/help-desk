import {useState} from "react"
import {useHistory} from "react-router-dom"
import {Form, Button, Card} from "react-bootstrap"

function SubmitTicket({user, date, setTickets}) {
    console.log(user)

    const history = useHistory()

    const [formData, setFormData] = useState({
        subject: "",
        description: "",
        author: user.first_name + " " + user.last_name,
        created_date: date,
        submitter_id: user.id
    })

    function handleChange(e) {
        let key = e.target.name
        let value = e.target.value
        setFormData(current => ({...current, [key]: value}))
        console.log(formData)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/tickets", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(formData)
        }
    )
    .then(resp => resp.json())
    .then(created => {
        setTickets((current)=>[...current, created])
        setFormData({
            subject: "",
            description: "",
            author: "",
            created_date: "",
            submitter_id: ""
        })
        history.push("/viewall")
    })
    }

    return(
        <div onSubmit={handleSubmit}>
            <Card className="awayfromtop" style={{width: '90rem'}}>
                <Card.Header as="h3">Create a Ticket</Card.Header>
                <Card.Text id="textsize">To submit a ticket, add a subject and description of the problem. Be as descriptive as you can be and include error codes if applicable.</Card.Text>
                <Card.Footer></Card.Footer>
                <Form>
                    <Form.Group className="mb-3" controlId="formSubject" >
                        <Form.Label>Subject: </Form.Label>
                        <Form.Control type="text" name="subject" value={formData.subject} onChange={handleChange} required/>
                    </Form.Group><Form.Group className="mb-3" controlId="formSubject" >
                        <Form.Label>Description: </Form.Label>
                        <Form.Control rows={8} as="textarea" name="description" value={formData.description} onChange={handleChange} required/>
                    </Form.Group>
                    <div className="submit">
                        <Button variant="primary" type="submit">Submit</Button>
                    </div>
                </Form>
            </Card>
        </div>
    )
}

export default SubmitTicket