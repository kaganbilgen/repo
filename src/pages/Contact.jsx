import React from "react";
import { useOutletContext } from "react-router-dom";


export default function Contact () {
    const {hu, en} = useOutletContext()
    return (
        <div>
            {en ? <h1>Contact Page EN</h1>: hu ?
                    <h1>Contact Page HU</h1>:
                    <h1>Contact Page DE</h1>}
        </div>
    )
}