import React from "react";
import { useOutletContext } from "react-router-dom";


export default function Prices () {
    const lang = useOutletContext()
    return (
        <div>
        {lang==="de" ? <h1>Preise DE</h1>: 
            lang==="en" ?   <h1>Prices EN</h1>:
            <h1>Prices PaGe HU</h1>}
        </div>
    )
}