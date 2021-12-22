import {useState} from "react"
import {Form, Button} from "react-bootstrap"

function SubmitTicket({tickets, user, date, setTickets}) {
    console.log(user)

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
    })
    }

    return(
        <div onSubmit={handleSubmit}>
            <Form>
                <Form.Group className="mb-3" controlId="formSubject" >
                    <Form.Label>Subject: </Form.Label>
                    <Form.Control type="text" name="subject" value={formData.subject} onChange={handleChange} />
                </Form.Group><Form.Group className="mb-3" controlId="formSubject" >
                    <Form.Label>Description: </Form.Label>
                    <Form.Control rows={4} as="textarea" name="description" value={formData.description} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default SubmitTicket