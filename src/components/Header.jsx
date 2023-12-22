import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from '../assets/logos/weiss_mira_mit.png'

export default function Header(props) {
    let pricesBtn, contactBtn, impressumBtn, privacyBtn

    if (props.currLang === "de") {
        pricesBtn = "Preise"
        contactBtn = "Kontakt"
        impressumBtn = "Impressum"
        privacyBtn = "Datenschutzerklärung"
    }else if (props.currLang === "en") {
        pricesBtn = "Pricing"
        contactBtn = "Contact"
        impressumBtn = "Impressum"
        privacyBtn = "Privacy"
    }else if (props.currLang === "hu"){
        pricesBtn = "Prices HU"
        contactBtn = "Contact HU"
        impressumBtn = "Impressum HU"
        privacyBtn = "Privacy HU"
    }

    console.log(props.currLang)

    return (
        <header>
            <div className="navbar-wrapper">
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                        <Sidebar
                            lang={props.currLang}
                        />
                    </div>
                </div>
                <NavLink to="/" className="home-logo">
                    <img src={logo} alt="mira holle logo" />
                </NavLink>
                <nav className="navbar">
                    <NavLink
                        id="impressum"
                        className={({ isActive }) => isActive ? "active-link" : "nav-btn"}
                        to="/impressum"
                        >
                        {impressumBtn}
                    </NavLink>
                    <NavLink
                        id="prices"
                        className={({ isActive }) => isActive ? "active-link" : "nav-btn"}
                        to="/prices"
                        >
                        {pricesBtn}
                    </NavLink>
                    <NavLink
                        id="contact"
                        className={({ isActive }) => isActive ? "active-link" : "nav-btn"}
                        to="/contact"
                        >
                        {contactBtn}
                    </NavLink>
                    <NavLink
                        id="privacy"
                        className={({ isActive }) => isActive ? "active-link" : "nav-btn"}
                        to="/privacy"
                    >
                        {privacyBtn}
                    </NavLink>
                </nav>
            </div>
            <div className="langbar-wrapper">
                <button onClick={() => (props.setCurrLang("en"))}>en</button>
                <button onClick={() => (props.setCurrLang("de"))}>de</button>
                <button onClick={() => (props.setCurrLang("hu"))}>hu</button>
            </div>
        </header>
    )
}