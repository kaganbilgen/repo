import React from "react";
import { useOutletContext } from "react-router-dom";


export default function Home () {
    const {hu, en} = useOutletContext()
    return (
        <div>
            {en ? <h1>Home Page EN</h1>: hu ?
                    <h1>Home Page HU</h1>:
                    <h1>Home Page DE</h1>}
        </div>
    )
}