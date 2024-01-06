import React from "react"
import "../Styles/Layouts/Navbar.css"

function Navbar(): React.ReactElement {

    return (
        <>
            <div className="topnav">
                <a href="#" onClick={(event) => alert('Cooming Soon')}>byby Error 👋</a>
            </div>
        </>
    )

}

export default Navbar