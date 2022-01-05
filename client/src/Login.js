import {useState} from "react"
import {Form, Button} from "react-bootstrap"
import Error from "./Error"

function Login ({setUser}) {

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState()

    function handleChange(e) {
        let key = e.target.name
        let value = e.target.value
        setLoginData({...loginData, [key]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(loginData)
        }
    )
    .then(resp => {
        if (resp.ok) {
            resp.json().then(user => {
                    setUser(user)
                    setLoginData({
                        username: "",
                        password: ""
                    })
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
            {errors ? errors.map((err) => (<Error key={err}>{err}</Error>)):null}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername" >
                    <Form.Label>Username: </Form.Label>
                    <Form.Control type="text" name="username" value={loginData.username} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword" >
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" name="password" value={loginData.password} onChange={handleChange} required/>
                </Form.Group>
                <div className="submit">
                    <Button variant="primary" type="submit">Login</Button>
                </div>
            </Form>
        </div>
    )
}

export default Login