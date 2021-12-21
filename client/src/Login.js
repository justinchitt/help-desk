import {useState} from "react"
import {Form, Button} from "react-bootstrap"

function Login ({setUser}) {

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

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
    .then(resp => resp.json())
    .then(user => {
        setUser(user)
        setLoginData({
            username: "",
            password: ""
        })
    })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername" >
                    <Form.Label>Username: </Form.Label>
                    <Form.Control type="text" name="username" value={loginData.username} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword" >
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" name="password" value={loginData.password} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login