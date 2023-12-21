import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from '../assets/logos/weiss_mira_mit.png'

export default function Header(props) {
    return (
        <header>
            <div className="navbar-wrapper">
                <NavLink to="/" className="home-logo">
                    <img src={logo} alt="mira holle logo" />
                </NavLink>
                <div className="sidebar">
                    <Sidebar
                        lang = {props.currLang}
                    />
                </div>
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
                    <NavLink
                        id="privacy"
                        className={({isActive}) => isActive ? "active-link" : "nav-btn"}
                        to="/privacy"
                    >
                        Privacy
                    </NavLink>
                </nav>
            </div>
            <div className="langbar-wrapper">
                <button onClick={() => (props.setCurrLang("en"))}>EN</button>
                <button onClick={() => (props.setCurrLang("de"))}>DE</button>
                <button onClick={() => (props.setCurrLang("hu"))}>HU</button>
            </div>
        </header>
    )
}