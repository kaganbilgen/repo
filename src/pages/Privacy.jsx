import React from "react";
import { useOutletContext } from "react-router-dom";
import lang from "../assets/lang"


export default function Privacy () {
    const currLang = useOutletContext()
    return (
        <div >
            {currLang==="de" ? lang.de.privacy: 
                currLang==="en" ? lang.en.privacy:
                lang.hu.privacy}
        </div>
    )
}