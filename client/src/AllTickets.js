import TicketCard from "./TicketCard"

function AllTickets({tickets, handleDelete}) {
    if (!tickets) {
        return <h1>You do not have any tickets.</h1>
    }
    let cards = tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} handleDelete={handleDelete}/>)

    return (
        <div>
            <h1>Your Tickets</h1>
            {cards}
        </div>
    )
}

export default AllTickets