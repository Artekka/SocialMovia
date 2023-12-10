import { Link } from "react-router-dom"
import '../index.css'

const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item nav-link">|</li>
                <li className="nav-item">
                    <Link to="/Login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item nav-link">|</li>
                <li className="nav-item">
                    <Link to="/Profile" className="nav-link">Profile</Link>
                </li>
                <li className="nav-item">
                    <input type="search" placeholder="Search here!"></input>
                </li>
            </ul>
        </nav>
    )
}

export default Nav