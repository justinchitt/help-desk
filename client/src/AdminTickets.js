import {useEffect, useState} from "react"
import AdminCard from "./AdminCard"


function AdminTickets({user, setTickets}) {
    const [tickets, setTicketsAdmin] = useState([])

    
    useEffect(fetchTickets, [user])
    
    function fetchTickets() {
        fetch("/ticketadmin")
        .then(resp => resp.json())
        .then(setTicketsAdmin)
    }
    let ticketCards = tickets.map((ticket) => <AdminCard setTickets={setTickets} key={ticket.id} ticket={ticket} user={user} setTicketsAdmin={setTicketsAdmin}/>)


    return (
        <div>
            {!tickets[0]?<p>There are no tickets at this time...</p>:null}
            {ticketCards}
        </div>
    )
}

export default AdminTickets