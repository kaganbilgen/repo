import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    const [ deLang, setDeLang] = React.useState(true)
    const [ huLang, setHuLang] = React.useState(false)
    const [ enLang, setEnLang] = React.useState(false)
    const langObj={
        de: deLang,
        hu: huLang,
        en: enLang
    }
    const setLangObj={
        setDe: setDeLang,
        setHu: setHuLang,
        setEn: setEnLang
    }

    return (
        <div className="site-wrapper">
            <Header
               lang = {{langObj, setLangObj}}  
            />
            <main>
                <Outlet context={langObj} />
            </main>
            <Footer />
        </div>
    )
}