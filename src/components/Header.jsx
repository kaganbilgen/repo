import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/mira-holle-logo.png'

export default function Header () {
    return (
        <header>
            <NavLink to="/" className="home-logo">
                <img src={logo} alt="mira holle logo"/>
            </NavLink>
            <nav>
                <NavLink
                    className="nav-btn"
                    to="/impressum"
                >
                    Impressum
                </NavLink>
                <NavLink
                    className="nav-btn"
                    to="/prices"
                >
                    Prices
                </NavLink>
                <NavLink
                    className="nav-btn"
                    to="/contact"
                >
                    Contact
                </NavLink>
            </nav>         
        </header>
    )
}