import React from "react"
import "../Styles/Navbar.css"

function Navbar(): React.ReactElement {

    return (
        <>
            <div className="topnav">
                <a href="#">Shopee</a>
                <a href="#">Tokopedia</a>
                <a href="#">Facebook</a>
            </div>
        </>
    )

}

export default Navbar