import React from 'react'
import { NavLink } from 'react-router'
import './navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <p>Pictogram</p>

            <div className="navLinks">
                <NavLink to="/">Feed</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/settings">Settings</NavLink>
                <button>Logout</button>
            </div>
        </nav >
    )
}

export default Navbar