import {useState} from "react"
import Signup from "./Signup"
import Login from "./Login"

function LoginSignup () {

    const [wasClicked, setWasClicked] = useState(false)

    return (
        <div>
            {wasClicked ? <Signup /> : <Login />}
            <button>{!wasClicked ? "Don't have an account?" : "Already have an account?"}</button>
        </div>
    )
}

export default LoginSignup