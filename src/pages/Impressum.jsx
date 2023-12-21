import React from "react";
import { useOutletContext } from "react-router-dom";


export default function Impressum () {
    const lang = useOutletContext()
    return (
        <div>
            {lang==="de" ? <h1>Impressum DE</h1>: 
                lang==="en" ?   <h1>Impressum EN</h1>:
                <h1>Impressum PaGe HU</h1>}
        </div>
    )
}
