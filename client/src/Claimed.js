import {useEffect, useState} from "react"
import ClaimedCard from "./ClaimedCard"

function Claimed({tickets, setTickets}) {
    let filteredTickets = tickets.filter(ticket => ticket.status !== "completed")
    let claimedTickets = filteredTickets.map(ticket => <ClaimedCard setTickets={setTickets} key={ticket.id} ticket={ticket}/>)

    return (
        <div>
            {claimedTickets}
        </div>
    )
}

export default Claimed