import React, { useState } from "react"
import "../Styles/Layouts/Navbar.css"
import "../Styles/Pages/About.css"
import "../Styles/Pages/Read.css"
import About from "../Pages/About"
import Main from "./Main"

function Navbar(): React.ReactElement {

    const [showAbout, setShowAbout] = useState<boolean>(false)
    const [showRead, setShowRead] = useState<boolean>(true)


    const handleAboutClick = (event: React.BaseSyntheticEvent) => {

        const contentHidden = event.currentTarget.parentNode.parentNode.querySelector('.content').style.visibility
        event.currentTarget.parentNode.parentNode.querySelector('.content').style.visibility = 'hidden';

        setShowAbout(!showAbout)
        setShowRead(!showRead)

        if (contentHidden == 'hidden') {
            event.currentTarget.parentNode.parentNode.querySelector('.content').style.visibility = 'visible';
            setShowAbout(false)
        }

    }

    const handleReadClick = (event: React.BaseSyntheticEvent) => {
        event.currentTarget.parentNode.parentNode.querySelector('.content').style.visibility = 'visible';
        setShowRead(true)
        setShowAbout(!showAbout)
    }

    return (
        <>
            <div className="topnav">
                <a href="#" onClick={(event) => alert('Cooming Soon')}>Byby Error 👋</a>  
                <div onClick={(event) => handleReadClick(event)}>
                    {showAbout && <a href="#">Error ❌</a> }
                </div>                   
                <div className="about" onClick={(event) => handleAboutClick(event)}>
                   {showRead && <a href="#">About 🙋‍♂️</a>}
                </div>
            </div>
            {
                showAbout && <About />
            }
        </>
    )

}

export default Navbar