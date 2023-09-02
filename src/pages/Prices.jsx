import React from "react";
import { useOutletContext } from "react-router-dom";


export default function Prices () {
    const {hu, en} = useOutletContext()
    return (
        <div>
            {en ? <h1>Prices Page EN</h1>: hu ?
                    <h1>Prices Page HU</h1>:
                    <h1>Prices Page DE</h1>}
        </div>
    )
}