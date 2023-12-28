import React from "react"
import { NavLink} from "react-router-dom"
import Hamburger from 'hamburger-react'

export default function Sidebar(props) {
    const [open, setOpen] = React.useState(false)
    let sidebarRef = React.useRef()

    React.useEffect(()=> {
        let handler = (e)=> {
            if(!sidebarRef.current.contains(e.target)){
                setOpen(false)
            }
        }
    
        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

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
        pricesBtn = "Árazás"
        contactBtn = "Kapcsolatfelvétel"
        impressumBtn = "Impresszum"
        privacyBtn = "Adatvédelem"
    }


    return (
        <div className="sidebar-container" ref={sidebarRef}>
            <div className="sidebar-hamburger">
                <Hamburger toggled={open} toggle={setOpen} className="sidebar"/>
            </div>
            <nav className={open ? "sidebar-active" : "sidebar-inactive"}>
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
                    className={({isActive}) => isActive ? "active-sidebar-link" : "sidebar-nav-btn"}
                    to="/privacy"
                >
                    {privacyBtn}
                </NavLink>
            </nav>
        </div>
    )
}


