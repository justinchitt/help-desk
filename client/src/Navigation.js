import {NavLink} from "react-router-dom"

function Navigation({setUser, user}) {

    function handleLogout(){
        fetch("/logout", {
            method: "DELETE"
        }).then(() => {
            setUser(null)
        })
    }

    return (
        <div id="nav">
            <NavLink id="header" to="/"><h1>myHelpDesk.</h1></NavLink>
            <ul id="navlink">
                <NavLink to="/">Home</NavLink>
                {user.admin === false?<NavLink to="/ticketform">Submit</NavLink>:<NavLink to="/tickets">Tickets</NavLink>}
                {user.admin === false?<NavLink to="/viewall">All Tickets</NavLink>:<NavLink to="/claimed">Claimed</NavLink>}
                <NavLink to="/account">Account</NavLink>
                <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
            </ul>
        </div>
    )
}

export default Navigation