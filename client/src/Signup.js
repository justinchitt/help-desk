import {useState} from "react"
import {Form, Button} from "react-bootstrap"
import Error from "./Error"

function Signup({setWasClicked}) {

    const [disable, setDisable] = useState(false)
    const [errors, setErrors] = useState([])
    
    const [signupData, setSignupData] = useState({
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        password_confirmation: "",
        email: "",
        company_code: ""
    })

    function handleChange(e) {
        let key = e.target.name
        let value = e.target.value
        setSignupData({...signupData, [key]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(signupData)
        }
        )
        .then(resp => {
            if (resp.ok) {
                resp.json().then(user => {
                    setSignupData({
                        username: "",
                        password: "",
                        first_name: "",
                        last_name: "",
                        password_confirmation: "",
                        email: "",
                        company_code: ""
                    })
                        setDisable(true)
                        setWasClicked(false)
            })
        } else {
            resp.json()
            .then((err) => {
                setErrors(err.errors)
        });
        }
    })
    }


    return (
        <div>
            <div id="errors">
                {errors.map((err) => (<Error key={err}>{err}</Error>))}
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formFirstName" >
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control type="text" name="first_name" value={signupData.first_name} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastNameName" >
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control type="text" name="last_name" value={signupData.last_name} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUsername" >
                    <Form.Label>Username: </Form.Label>
                    <Form.Control type="text" name="username" value={signupData.username} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail" >
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" name="email" value={signupData.email} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCompany" >
                    <Form.Label>Company Code: </Form.Label>
                    <Form.Control type="text" name="company_code" value={signupData.company_code} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword" >
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" name="password" value={signupData.password} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPasswordConfirmation" >
                    <Form.Label>Password Confirmation: </Form.Label>
                    <Form.Control type="password" name="password_confirmation" value={signupData.password_confirmation} onChange={handleChange} required/>
                </Form.Group>
                <div className="submit">
                    <Button disabled={disable} variant="primary" type="submit">Signup</Button>
                </div>
            </Form>
        </div>
    )
}

export default Signup