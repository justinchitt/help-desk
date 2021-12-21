import {useState} from "react"
import Signup from "./Signup"
import Login from "./Login"

function LoginSignup ({setUser}) {

    const [wasClicked, setWasClicked] = useState(false)

    function handleClick() {
        setWasClicked(current => !current)
    }

    return (
        <div>
            {wasClicked ? <Signup setWasClicked={setWasClicked}/> : <Login setUser={setUser}/>}
            <button id="switch" onClick={handleClick}>{!wasClicked ? "Don't have an account?" : "Already have an account?"}</button>
        </div>
    )
}

export default LoginSignup