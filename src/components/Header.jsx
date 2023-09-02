import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/mira-holle-logo.png'
import { slide as Menu } from 'react-burger-menu'

export default function Header(props) {
    return (
        <header>
            {props.lang.langObj.en ?
                <div className="header-wrapper">
                    <NavLink to="/" className="home-logo">
                        <img src={logo} alt="mira holle logo" />
                    </NavLink>
                    <nav>
                        <NavLink
                            className="nav-btn"
                            to="/impressum"
                        >
                            Impressum EN
                        </NavLink>
                        <NavLink
                            className="nav-btn"
                            to="/prices"
                        >
                            Prices EN
                        </NavLink>
                        <NavLink
                            className="nav-btn"
                            to="/contact"
                        >
                            Contact EN
                        </NavLink>
                    </nav>
                </div> : props.lang.langObj.hu ?
                    <div className="header-wrapper">:
                        <NavLink to="/" className="home-logo">
                            <img src={logo} alt="mira holle logo" />
                        </NavLink>
                        <nav>
                            <NavLink
                                className="nav-btn"
                                to="/impressum"
                            >
                                Impressum HU
                            </NavLink>
                            <NavLink
                                className="nav-btn"
                                to="/prices"
                            >
                                Prices HU
                            </NavLink>
                            <NavLink
                                className="nav-btn"
                                to="/contact"
                            >
                                Contact HU
                            </NavLink>
                        </nav>
                    </div> :
                    <div className="header-wrapper">
                        <NavLink to="/" className="home-logo">
                            <img src={logo} alt="mira holle logo" />
                        </NavLink>
                        <nav>
                            <NavLink
                                id="impressum"
                                className="nav-btn"
                                to="/impressum"
                            >
                                Impressum DE
                            </NavLink>
                            <NavLink
                                id="prices"
                                className="nav-btn"
                                to="/prices"
                            >
                                Prices DE
                            </NavLink>
                            <NavLink
                                id="contact"
                                className="nav-btn"
                                to="/contact"
                            >
                                Contact DE
                            </NavLink>
                        </nav>
                    </div>
            }
        </header>
    )
}