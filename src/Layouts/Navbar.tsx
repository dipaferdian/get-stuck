import React, { useState } from "react"
import "../Styles/Layouts/Navbar.css"
import "../Styles/Pages/About.css"

function Navbar(): React.ReactElement {

    return (

        <>
            <div className="topnav">                  
                <div className="about" >
                    <a href="#">You don't know anything if you don't think wide</a>
                </div>
            </div>
        </>
    )

}

export default Navbar