import React from "react"
import "../Styles/Layouts/Main.css"

interface ILayout {
  pages: React.ReactElement  
}

function Main(render_page: ILayout): React.ReactElement {

    return (
        <>
            <div id="main">
              <div className="content">
               {render_page.pages}
              </div>
            </div>
        </>
    )

}

export default Main