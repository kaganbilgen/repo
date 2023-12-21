import React from "react"
import { NavLink} from "react-router-dom"
import Hamburger from 'hamburger-react'

export default function Sidebar() {
    const [isOpen, setOpen] = React.useState(false)
    return (
        <div className="sidebar-container">
            <div className="sidebar-hamburger">
                <Hamburger toggled={isOpen} toggle={setOpen} className="sidebar"/>
            </div>
            <nav className={isOpen ? "sidebar-links-active" : "sidebar-links"}>
                <NavLink 
                    onClick={()=> setOpen(false)}
                    id="prices"
                    className="sidebar-nav-btn"
                    to="/prices"
                >
                    Preise
                </NavLink>
                <NavLink 
                    onClick={()=> setOpen(false)}
                    id="contact"
                    className="sidebar-nav-btn"
                    to="/contact"
                >
                    Kontakt
                </NavLink>
                <NavLink 
                    onClick={()=> setOpen(false)}
                    id="impressum"
                    className="sidebar-nav-btn"
                    to="/impressum"
                >
                    Impressum
                </NavLink>
            </nav>
        </div>
    )
}


