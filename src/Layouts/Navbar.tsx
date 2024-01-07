import React, { useState } from "react"
import "../Styles/Layouts/Navbar.css"

function Navbar(): React.ReactElement {

    return (
        <>
            <div className="topnav">
                <a href="#" onClick={(event) => alert('Cooming Soon')}>Byby Think Wide 👋</a>
            </div>
        </>
    )

}

export default Navbar