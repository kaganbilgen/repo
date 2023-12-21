import React from "react";
import { useOutletContext } from "react-router-dom";


export default function Home () {
    const lang = useOutletContext()
    return (
        <div>
            {lang==="de" ? <h1>Home DE</h1>: 
                lang==="en" ?   <h1>Home EN</h1>:
                <h1>Home PaGe HU</h1>}
        </div>
    )
}