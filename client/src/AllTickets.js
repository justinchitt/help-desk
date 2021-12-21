import TicketCard from "./TicketCard"

function AllTickets({tickets, handleDelete}) {
    let cards = tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} handleDelete={handleDelete}/>)

    return (
        <div>
            <h1>Your Tickets</h1>
            {cards}
        </div>
    )
}

export default AllTickets