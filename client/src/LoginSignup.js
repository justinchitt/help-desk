import {useState} from "react"
import Signup from "./Signup"
import Login from "./Login"
import {Card} from "react-bootstrap"

function LoginSignup ({setUser}) {

    const [wasClicked, setWasClicked] = useState(false)

    function handleClick() {
        setWasClicked(current => !current)
    }

    return (
        <div id="loginsignup">
            <h1 id="middle">myHelpDesk.</h1>
            <Card className="center" style={{width: "25rem"}}>
                {wasClicked ? <Signup setWasClicked={setWasClicked}/> : <Login setUser={setUser}/>}
                <Card.Footer id="switch"><button id="bttn" onClick={handleClick}>{!wasClicked ? "Don't have an account?" : "Already have an account?"}</button></Card.Footer>
            </Card>
        </div>
    )
}

export default LoginSignup