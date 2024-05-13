import React, { useState } from "react"
import "../Styles/Layouts/Navbar.css"
import "../Styles/Pages/About.css"
import About from "../Pages/About"

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
                <a href="#" style={{ cursor: 'default'}}>Getstuck</a>  
                <div onClick={(event) => handleReadClick(event)}>
                    {showAbout && <a style={showAbout ? {borderBottom: '1px solid #279ed8'} : {}} href="#">experiences</a> }
                </div>                   
                <div className="about" onClick={(event) => handleAboutClick(event)}>
                   {showRead && <a href="#">about</a>}
                </div>
            </div>
            {
                showAbout && <About />
            }
        </>
    )

}

export default Navbar