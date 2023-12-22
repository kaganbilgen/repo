import React from "react";
import { useOutletContext } from "react-router-dom";
import lang from "../assets/lang"


export default function Home () {
    const currLang = useOutletContext()
    return (
        <div >
            {currLang==="de" ? lang.de.home: 
                currLang==="en" ? lang.en.home:
                lang.hu.home}
        </div>
    )
}