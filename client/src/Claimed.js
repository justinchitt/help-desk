import {useEffect, useState} from "react"
import ClaimedCard from "./ClaimedCard"

function Claimed({user}) {
 let claimedTickets = user.admin_tickets.map(ticket => <ClaimedCard key={ticket.id} ticket={ticket}/>)

    return (
        <div>
            {claimedTickets}
        </div>
    )
}

export default Claimed