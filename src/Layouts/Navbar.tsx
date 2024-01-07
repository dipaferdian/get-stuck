import React, { useState } from "react"
import "../Styles/Layouts/Navbar.css"
import "../Styles/Pages/About.css"
import "../Styles/Pages/Read.css"
import About from "../Pages/About"

function Navbar(): React.ReactElement {

    const [showAbout, setShowAbout] = useState<boolean>(false)

    const handleClick = (event: React.BaseSyntheticEvent) => {

        const contentHidden = event.currentTarget.parentNode.parentNode.querySelector('.content').style.visibility
        event.currentTarget.parentNode.parentNode.querySelector('.content').style.visibility = 'hidden';

        setShowAbout(!showAbout)

        if (contentHidden == 'hidden') {
            event.currentTarget.parentNode.parentNode.querySelector('.content').style.visibility = 'visible';
            setShowAbout(false)
        }

    }

    return (
        <>
            <div className="topnav">
                <a href="#" onClick={(event) => alert('Cooming Soon')}>Byby Think Wide 👋</a>  
                <div>
                     <a href="#">Read 📖</a>
                </div>                   
                <div className="about" onClick={(event) => handleClick(event)}>
                    <a href="#">About 🙋‍♂️</a>
                </div>
            </div>
            {showAbout && <About />}
        </>
    )

}

export default Navbar