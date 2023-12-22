import React from "react"
import { NavLink} from "react-router-dom"
import Hamburger from 'hamburger-react'

export default function Sidebar(props) {
    let pricesBtn, contactBtn, impressumBtn, privacyBtn

    if (props.lang === "de") {
        pricesBtn = "Preise"
        contactBtn = "Kontakt"
        impressumBtn = "Impressum"
        privacyBtn = "Datenschutzerklärung"
    }else if (props.lang === "en") {
        pricesBtn = "Pricing"
        contactBtn = "Contact"
        impressumBtn = "Impressum"
        privacyBtn = "Privacy"
    }else if (props.lang === "hu"){
        pricesBtn = "Prices HU"
        contactBtn = "Contact HU"
        impressumBtn = "Impressum HU"
        privacyBtn = "Privacy HU"
    }

    const [isOpen, setOpen] = React.useState(false)
    return (
        <div className="sidebar-container">
            <div className="sidebar-hamburger">
                <Hamburger toggled={isOpen} toggle={setOpen} className="sidebar"/>
            </div>
            <nav className={isOpen ? "sidebar-active" : "sidebar-links"}>
                <NavLink 
                    onClick={()=> setOpen(false)}
                    id="impressum"
                    className={({isActive}) => isActive ? "active-sidebar-link" : "sidebar-nav-btn"}
                    to="/impressum"
                >
                    {impressumBtn}
                </NavLink>
                <NavLink 
                    onClick={()=> setOpen(false)}
                    id="prices"
                    className={({isActive}) => isActive ? "active-sidebar-link" : "sidebar-nav-btn"}
                    to="/prices"
                >
                    {pricesBtn}
                </NavLink>
                <NavLink 
                    onClick={()=> setOpen(false)}
                    id="contact"
                    className={({isActive}) => isActive ? "active-sidebar-link" : "sidebar-nav-btn"}
                    to="/contact"
                >
                    {contactBtn}
                </NavLink>
                <NavLink 
                    onClick={()=> setOpen(false)}
                    id="privacy"
                    className="sidebar-nav-btn"
                    to="/privacy"
                >
                    {privacyBtn}
                </NavLink>
            </nav>
        </div>
    )
}


