import {Form, Button, Card} from "react-bootstrap"
import {useState} from "react"

function Account({user, setUser}) {

    const [updateData, setUpdateData] = useState({
        username: user.username,
        password: "",
        first_name: user.first_name,
        last_name: user.last_name,
        password_confirmation: "",
        email: user.email,
        company_code: user.company_code
    })

    function handleChange(e) {
        let key = e.target.name
        let value = e.target.value
        setUpdateData({...updateData, [key]: value})
        console.log(updateData)
    }
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`users/update/${user.id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(updateData)
        }
    )
    .then(resp => resp.json())
    .then(user => {
        setUpdateData({
            username: "",
            password: "",
            first_name: "",
            last_name: "",
            password_confirmation: "",
            email: "",
            company_code: ""
        })
    })
}

    return (
        <div>
            <Card style={{width: '30rem'}}>
            <Card.Header as="h5">Account Information</Card.Header>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formFirstName" >
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control type="text" name="first_name" value={updateData.first_name} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastNameName" >
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control type="text" name="last_name" value={updateData.last_name} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUsername" >
                    <Form.Label>Username: </Form.Label>
                    <Form.Control type="text" name="username" value={updateData.username} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail" >
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" name="email" value={updateData.email} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCompany" >
                    <Form.Label>Company Code: </Form.Label>
                    <Form.Control type="text" name="company_code" value={updateData.company_code} onChange={handleChange}  required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword" >
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" name="password" value={updateData.password} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPasswordConfirmation" >
                    <Form.Label>Password Confirmation: </Form.Label>
                    <Form.Control type="password" name="password_confirmation" value={updateData.password_confirmation} onChange={handleChange}  required/>
                </Form.Group>
                <Button variant="secondary" type="submit">Update Account</Button>
            </Form>
            </Card>
        </div>
    )
}

export default Account