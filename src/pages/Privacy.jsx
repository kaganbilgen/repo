import React from "react";
import { useOutletContext } from "react-router-dom";


export default function Privacy () {
    const lang = useOutletContext()
    return (
        <div>
        {lang==="de" ? <h1>Datenschutzerklärung DE</h1>: 
            lang==="en" ?   <h1>Privacy Policy EN</h1>:
            <h1>Prices Policy PaGe HU</h1>}
        </div>
    )
}