import React from "react";
import { useOutletContext } from "react-router-dom";
import lang from "../assets/lang"


export default function Prices () {
    const currLang = useOutletContext()
    return (
        <div >
            {currLang==="de" ? lang.de.prices: 
                currLang==="en" ? lang.en.prices:
                lang.hu.prices}
        </div>
    )
}