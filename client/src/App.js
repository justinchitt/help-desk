import {useState, useEffect} from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginSignup from "./LoginSignup"

function App() {

  const [user, setUser] = useState(null)

  useEffect(fetchMe, [])

  function fetchMe() {
    fetch("/me")
    .then(resp => {
      if (resp.ok) {
        resp.json().then(user => setUser(user))
      }
    })
  }

  if (!user) {
    return <LoginSignup />
  }

  return (
    <div className="App">
  
    </div>
  );
}

export default App;
