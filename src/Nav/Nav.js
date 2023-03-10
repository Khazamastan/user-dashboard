import "./Nav.css"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Nav = () => {
    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/logout">Logout</Link>
            </li>
        </ul>
    </nav>
}

export default Nav