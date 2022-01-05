import {Form, Button, Card} from "react-bootstrap"
import {useState} from "react"
import Error from "./Error"

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
    const [errors, setErrors] = useState()
    const [success, setSuccess] = useState(false)

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
    .then(resp => {
        if (resp.ok) {
            resp.json().then(user => {
                setUpdateData({
                    username: user.username,
                    password: "",
                    first_name: user.first_name,
                    last_name: user.last_name,
                    password_confirmation: "",
                    email: user.email,
                    company_code: user.company_code
                })
                setSuccess(true)
        })
    } else {
        resp.json()
        .then((err) => {
            setErrors(err.errors)
            console.log(errors)
    });
    }
})
}

    return (
        <div>
            <Card className="awayfromtop" style={{width: '30rem'}}>
            <Card.Header as="h5">Account Information</Card.Header>
            {errors ? errors.map((err) => (<Error key={err}>{err}</Error>)):null}
            {success?<div class="alert alert-success" role="alert">Update Successful!</div>:null}
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
                <div className="submit">
                    <Button variant="secondary" type="submit">Update Account</Button>
                </div>
            </Form>
            </Card>
        </div>
    )
}

export default Account