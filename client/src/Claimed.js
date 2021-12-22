import {useEffect, useState} from "react"
import ClaimedCard from "./ClaimedCard"

function Claimed({tickets}) {
 let claimedTickets = tickets.map(ticket => <ClaimedCard key={ticket.id} ticket={ticket}/>)

    return (
        <div>
            {claimedTickets}
        </div>
    )
}

export default Claimed