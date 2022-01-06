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
import Respond from "./Respond";
import Home from "./Home";

function App() {

  const [user, setUser] = useState(null)
  const [tickets, setTickets] = useState([])

  useEffect(fetchMe, [])
  useEffect(fetchTickets, [user])


  function fetchMe() {
    fetch("/me")
    .then(resp => {
      if (resp.ok) {
        resp.json().then(user => {
          setUser(user)
        })
      }
    })
  }


  function fetchTickets() {
    console.log(user)
    if(!user){return}
    fetch(user.admin === false?`/tickets/user/${user.id}`:`/tickets/admin/${user.id}`)
    .then(resp => {
      if (resp.ok) {
        resp.json().then(ticketAll => {
          // setUser(user)
          setTickets(ticketAll)
        })
      }
    })
  }

  console.log(tickets)


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
            {user.admin === false?<SubmitTicket user={user} date={date} setTickets={setTickets}/>:null}
          </Route>
          <Route path="/viewall" >
            {user.admin === false?<AllTickets handleDelete={handleDelete} tickets={tickets}/>:null}
          </Route>
          <Route path="/viewticket/:id" >
            {user.admin === false?<ViewTicket handleDelete={handleDelete} />:null}
          </Route>
          <Route path="/tickets" >
            {user.admin !== false?<AdminTickets setTickets={setTickets} user={user}/>:null}
          </Route>
          <Route path="/account">
            <Account user={user} setUser={setUser}/>
          </Route>
          <Route path="/claimed">
            {user.admin !== false?<Claimed setTickets={setTickets} tickets={tickets}/>:null}
          </Route>
          <Route path="/respond/:id">
            {user.admin !== false?<Respond setTickets={setTickets} user={user} date={date}/>:null}
          </Route>
          <Route exact path="/">
            <Home user={user}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
