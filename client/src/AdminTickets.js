import {useEffect, useState} from "react"
import {Card} from "react-bootstrap"
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
            <Card className="alltickets" style={{width: '90rem'}}>
                <Card.Header as="h3">Tickets to be Claimed</Card.Header>
                {!tickets[0]?<p>There are no tickets to be claimed at this time...</p>:null}
                {ticketCards}
            </Card>
        </div>
    )
}

export default AdminTickets