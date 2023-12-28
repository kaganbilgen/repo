import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from '../assets/logos/weiss_mira_mit.png'
import fbIcon from '../assets/icons/5305154_fb_facebook_facebook logo_icon.svg'
import liIcon from '../assets/icons/5305157_connection_linkedin_network_linkedin logo_icon.svg'
import instIcon from '../assets/icons/5335781_camera_instagram_social media_instagram logo_icon.svg'

export default function Header(props) {
    let pricesBtn, contactBtn, impressumBtn, privacyBtn
    const [navbar, setNavbar] = React.useState(false)

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
        pricesBtn = "Árazás"
        contactBtn = "Kapcsolatfelvétel"
        impressumBtn = "Impresszum"
        privacyBtn = "Adatvédelem"
    }

    function resizeHeader() {
        if (window.scrollY >= 5) {
            setNavbar(true)
        }else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', resizeHeader)

    return (
        <header className={navbar ? "navbar-resize":""}>
            <div className="navbar-wrapper">
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                        <Sidebar
                            lang={props.currLang}
                        />
                    </div>
                </div>
                <NavLink to="/" className={navbar ? "home-logo-resize" : "home-logo"}>
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
            <div className="social-langbar-container">
                <div className="langbar-wrapper">
                    <button onClick={() => (props.setCurrLang("en"))}>en</button>
                    <button onClick={() => (props.setCurrLang("de"))}>de</button>
                    <button onClick={() => (props.setCurrLang("hu"))}>hu</button>
                </div>
                <div className="social-buttons">
                    <a href=""><img src={fbIcon} /></a>
                    <a href=""><img src={liIcon} /></a>
                    <a href=""><img src={instIcon} /></a>
                </div>
            </div>
        </header>
    )
}