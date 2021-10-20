import React from 'react'
import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <nav>
                <li> <NavLink to="/">Home</NavLink></li>
                <li> <NavLink to="/cards">Explore</NavLink></li>
            </nav>
        </div>
    )
}
