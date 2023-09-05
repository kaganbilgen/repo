import React from "react";
import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react'

export default function Sidebar() {
    const [isOpen, setOpen] = React.useState(false)

    return (
        <div className="sidebar-container">
            <div className="sidebar-hamburger">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <nav className="sidebar-links">
                <NavLink
                    id="impressum"
                    className="sidebar-nav-btn"
                    to="/impressum"
                >
                    Impressum
                </NavLink>
                <NavLink
                    id="prices"
                    className="sidebar-nav-btn"
                    to="/prices"
                >
                    Prices
                </NavLink>
                <NavLink
                    id="contact"
                    className="sidebar-nav-btn"
                    to="/contact"
                >
                    Contact
                </NavLink>
            </nav>
        </div>
    )
}


