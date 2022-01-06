import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"
import {useEffect, useState} from "react"

function Home({user}) {

    const [company, setCompany] = useState("")
    useEffect(fetchCompany,[user])

    console.log(company)

    function fetchCompany() {
        fetch(`company/${user.company_code}`)
        .then(resp => resp.json())
        .then(setCompany)
    }

    return (
        <div>
            <Card className="alltickets" style={{width: "70rem"}}>
                <Card.Header as="h3">My home</Card.Header>
                <Card.Text id="bold" className="center">Welcome {`${user.first_name} ${user.last_name} from ${company.name},`}</Card.Text>
                <Card.Text className="center">What would you like to do today?</Card.Text>
                {user.admin === true?<Link to="/tickets" className="center">View Tickets</Link>:<Link className="center" to="/ticketform">Submit a ticket</Link>}
                {user.admin === true?<Link to="/claimed" className="center">View your claimed tickets</Link>:<Link to="/viewall" className="center">View your tickets</Link>}
                <Link to="/account" className="center">Edit your account information</Link>
            </Card>
        </div>
    )
}

export default Home