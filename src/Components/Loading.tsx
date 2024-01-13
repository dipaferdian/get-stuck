import React from "react"
import "../Styles/Components/Spinner.css"

function Loading(): React.ReactElement {

    return(
        <>
          <span style={{textAlign: 'center'}}>Coming Soon!</span>
         <div className="spinner"></div>
        </>
    )
}

export default Loading