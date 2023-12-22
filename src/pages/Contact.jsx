import React from "react";
import { useOutletContext } from "react-router-dom";
import lang from "../assets/lang"


export default function Contact () {
    const currLang = useOutletContext()
    return (
        <div >
            {currLang==="de" ? lang.de.contact: 
                currLang==="en" ? lang.en.contact:
                lang.hu.contact}
        </div>
    )
}