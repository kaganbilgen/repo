import React from "react";
import { useOutletContext } from "react-router-dom";


export default function Contact () {
    const lang = useOutletContext()
    return (
        <div>
            {lang==="de" ? <h1>Kontakt DE</h1>: 
                lang==="en" ?   <h1>Contact EN</h1>:
                <h1>Contact PaGe HU</h1>}
        </div>
    )
}