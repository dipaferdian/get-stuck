import React from "react"
import "../Styles/Navbar.css"

function Navbar(): React.ReactElement {

    return (
        <>
            <div className="topnav">
                <a href="#" onClick={(event) => alert('Cooming Soon')}>Shopee</a>
                <a href="#" onClick={(event) => alert('Cooming Soon')}>Tokopedia</a>
                <a href="#" onClick={(event) => alert('Cooming Soon')}>Facebook</a>
            </div>
        </>
    )

}

export default Navbar