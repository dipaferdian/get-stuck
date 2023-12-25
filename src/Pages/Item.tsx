import React from "react"
import GetShoes from "../Apis/Shoes/GetShoes"
import "../Styles/Item.css"
import GetShirt from "../Apis/Shirts/GetShirts"

function Item(): React.ReactElement {

    const shoes = GetShoes([])
    const shirts = GetShirt([])

    return (
        <>
            <div className="grid-container">
                {shoes.map((item) => (
                    <div className="grid-item" key={item.id}>
                        <a href={item.link} target="_blank">
                            <img src={item.image} alt="Logo" className="img-shoes" />
                            {item.description}
                        </a>
                    </div>
                )
                )}

                {shirts.map((item) => (
                    <div className="grid-item" key={item.id}>
                        <a href={item.link} target="_blank">
                            <img src={item.image} alt="Logo" className="img-shoes" />
                            {item.description}
                        </a>
                    </div>
                )
                )}
            </div>
        </>
    )
}

export default Item