import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from '../images/weiss_mira_mit.png'

export default function Header(props) {
    return (
        <header>
            <div className="header-wrapper">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <NavLink to="/" className="home-logo">
                    <img src={logo} alt="mira holle logo" />
                </NavLink>
                <nav className="navbar">
                    <NavLink
                        id="impressum"
                        className={({isActive}) => isActive ? "active-link" : "nav-btn"}
                        to="/impressum"
                    >
                        Impressum
                    </NavLink>
                    <NavLink
                        id="prices"
                        className={({isActive}) => isActive ? "active-link" : "nav-btn"}
                        to="/prices"
                    >
                        Prices
                    </NavLink>
                    <NavLink
                        id="contact"
                        className={({isActive}) => isActive ? "active-link" : "nav-btn"}
                        to="/contact"
                    >
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}