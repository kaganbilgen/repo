import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from '../images/mira-holle-logo.png'

export default function Header(props) {
    return (
        <header>
            <div className="header-wrapper">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <nav className="navbar">
                    <NavLink
                        id="impressum"
                        className="nav-btn"
                        to="/impressum"
                    >
                        Impressum
                    </NavLink>
                    <NavLink
                        id="prices"
                        className="nav-btn"
                        to="/prices"
                    >
                        Prices
                    </NavLink>
                    <NavLink
                        id="contact"
                        className="nav-btn"
                        to="/contact"
                    >
                        Contact
                    </NavLink>
                </nav>
                <NavLink to="/" className="home-logo">
                    <img src={logo} alt="mira holle logo" />
                </NavLink>
            </div>
        </header>
    )
}