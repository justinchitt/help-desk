import {useEffect, useState} from "react"
import {Card} from "react-bootstrap"
import ClaimedCard from "./ClaimedCard"

function Claimed({tickets, setTickets}) {
    let filteredTickets = tickets.filter(ticket => ticket.status !== "completed")
    let claimedTickets = filteredTickets.map(ticket => <ClaimedCard setTickets={setTickets} key={ticket.id} ticket={ticket}/>)

    return (
        <div>
            <Card className="alltickets" style={{width: '90rem'}}>
            <Card.Header as="h3">Claimed Tickets</Card.Header>
                {!filteredTickets[0]?<p>You do not have any claimed tickets...</p>:null}
                {claimedTickets}
            </Card>
        </div>
    )
}

export default Claimed