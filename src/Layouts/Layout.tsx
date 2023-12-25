import React from "react"
import "../Styles/Main.css"
import Navbar from "./Navbar"
import Main from "./Main"

interface IPage {
  item: React.ReactElement
}

function Layout(pages:IPage): React.ReactElement {

    return (
        <>
            <Navbar />
            <Main pages={pages.item}/>
        </>
    )

}

export default Layout