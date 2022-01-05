import TicketCard from "./TicketCard"
import {Card} from "react-bootstrap"

function AllTickets({tickets, handleDelete}) {
    if (!tickets) {
        return <h1>You do not have any tickets.</h1>
    }
    
    let cards = tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} handleDelete={handleDelete}/>)

    return (
        <div>
            <Card id="alltickets" style={{width: '90rem'}}>
                <Card.Header as="h3">Your Tickets</Card.Header>
                <div id="ticketcards">
                    {cards}
                </div>
            </Card>
        </div>
    )
}

export default AllTickets