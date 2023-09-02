import React from "react";
import { useOutletContext } from "react-router-dom";


export default function Impressum () {
    const {hu, en} = useOutletContext()
    return (
        <div>
            {en ? <h1>Impressum Page EN</h1>: hu ?
                    <h1>Impressum Page HU</h1>:
                    <h1>Impressum Page DE</h1>}
        </div>
    )
}