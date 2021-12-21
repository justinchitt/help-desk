import {Link} from "react-router-dom"

function Navigation({setUser, user}) {

    function handleLogout(){
        fetch("/logout", {
            method: "DELETE"
        }).then(() => {
            setUser(null)
        })
    }

    return (
        <div>
            <ul>
                <Link to="/">Home</Link>
                {user.admin === false?<Link to="/ticketform">Submit</Link>:<Link to="tickets">Tickets</Link>}
                {user.admin === false?<Link to="/viewall">All Tickets</Link>:<Link to="claimed">Claimed</Link>}
                <Link to="/account">Account</Link>
                <Link to="/" onClick={handleLogout}>Logout</Link>
            </ul>
        </div>
    )
}

export default Navigation