import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    const [lang, setLang] = React.useState("de")

    return (
        <div className="site-wrapper">
            <Header
                currLang={lang}
                setCurrLang={setLang}
            />
            <div className="page-wrapper">
                <main>
                    <Outlet context={lang} />
                </main>
            </div>
            <Footer />
        </div>
    )
}