import {useEffect, useState} from "react"
import AdminCard from "./AdminCard"

function AdminTickets({user}) {
    const [tickets, setTickets] = useState([])

    useEffect(fetchTickets, [])

    function fetchTickets() {
        fetch("/ticketadmin")
        .then(resp => resp.json())
        .then(setTickets)
    }
    
    let ticketCards = tickets.map((ticket) => <AdminCard key={ticket.id} ticket={ticket} user={user} setTickets={setTickets}/>)


    return (
        <div>
            {ticketCards}
        </div>
    )
}

export default AdminTickets