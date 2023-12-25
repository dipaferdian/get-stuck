import React from "react"
import "../Styles/Navbar.css"

function Navbar(): React.ReactElement {

    return (
        <>
            <div className="topnav">
                <a href="#" onClick={(event) => alert('Cooming Soon')}>Mrpwd</a>
            </div>
        </>
    )

}

export default Navbar