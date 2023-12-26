import React from "react"
import GetContents from "../Apis/GetContent"
import "../Styles/Item.css"

function Item(): React.ReactElement {

    const data = GetContents([])

    return (
        <>
            <div className="grid-container">
                {data.map((item) => (
                    <div className="grid-item" key={item.id}>
                        <a href={item.link} target="_self">
                            <img src={item.image} alt="Logo" className="img-item" />
                        </a>
                        <div>
                          <span className="title-item">{item.title}</span>
                        </div>
                        <div>
                          <span className="description-item">{item.description}</span>
                        </div>
                    </div>
                )
                )}
            </div>
        </>
    )
}

export default Item