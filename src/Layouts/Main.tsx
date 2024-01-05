import React from "react"
import "../Styles/Layouts/Main.css"

interface ILayout {
  pages: React.ReactElement  
}

function Main(render_page: ILayout): React.ReactElement {

    return (
        <>
            <div id="main">
              {render_page.pages}
            </div>
        </>
    )

}

export default Main