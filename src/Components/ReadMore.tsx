import React, { useState } from "react";

type Itext = {
    text: string
}

function ReadMore(text: Itext): React.ReactElement {

    const [stateText, setText] = useState(text)

    console.log(stateText)
    return (
        <>
            <label className="readmore"></label>
        </>
    )

}

export default ReadMore;