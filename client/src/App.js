import {useState, useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginSignup from "./LoginSignup"
import Navigation from "./Navigation"
import SubmitTicket from "./SubmitTicket";
import AllTickets from "./AllTickets";
import ViewTicket from "./ViewTicket";
import AdminTickets from "./AdminTickets";
import Account from "./Account";
import Claimed from "./Claimed";

function App() {

  const [user, setUser] = useState(null)
  const [tickets, setTickets] = useState([])

  useEffect(fetchMe, [])

  function fetchMe() {
    fetch("/me")
    .then(resp => {
      if (resp.ok) {
        resp.json().then(user => {
          setUser(user)
          setTickets(user.tickets)
        })
      }
    })
  }

  console.log(user)

  let todaysDate = new Date()
  let monthsInNumbers = String(todaysDate.getMonth())
  let day = String(todaysDate).slice(8,10)
  let correctNumberMonth = {
    "0": "01",
    "1": "02",
    "2": "03",
    "3": "04",
    "4": "05",
    "5": "06",
    "6": "07",
    "7": "08",
    "8": "09",
    "9": "10",
    "10": "11",
    "11": "12",
  }
  let month = correctNumberMonth[monthsInNumbers]
  let year = todaysDate.getFullYear()

  
  let date = `${month}/${day}/${year}`
  
  function handleDelete(id) {
    fetch(`/tickets/${id}`, {
        method: "DELETE"
    })
    .then(resp => resp.json())
    .then(deleted => setTickets(current => current.filter(ticket => ticket.id !== deleted.id)))
}


  if (!user) {
    return <LoginSignup setUser={setUser}/>
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Navigation setUser={setUser} user={user}/>
        <Switch>
          <Route path="/ticketform">
            {user.admin === false?<SubmitTicket user={user} setUser={setUser} date={date} setTickets={setTickets}/>:null}
          </Route>
          <Route path="/viewall" >
            {user.admin === false?<AllTickets handleDelete={handleDelete} tickets={tickets}/>:null}
          </Route>
          <Route path="/viewticket/:id" >
            {user.admin === false?<ViewTicket handleDelete={handleDelete} />:null}
          </Route>
          <Route path="/tickets" >
            {user.admin !== false?<AdminTickets user={user}/>:null}
          </Route>
          <Route path="/account">
            <Account user={user} setUser={setUser}/>
          </Route>
          <Route path="/claimed">
            <Claimed user={user}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
