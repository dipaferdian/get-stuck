import React from "react"
import "../Styles/Layouts/Main.css"
import About from "../Pages/About"


function Main(): React.ReactElement {

    return (
        <>
            <div id="main">
              <div className="content">
                <About />
              </div>
            </div>
        </>
    )

}

export default Main