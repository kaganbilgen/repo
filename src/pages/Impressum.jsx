import React from "react";
import { useOutletContext } from "react-router-dom";
import lang from "../assets/lang"


export default function Impressum () {
    const currLang = useOutletContext()
    return (
        <div>
            {currLang==="de" ? lang.de.impressum: 
                currLang==="en" ? lang.en.impressum:
                lang.hu.impressum}
        </div>
    )
}
