import React, { useEffect, useState } from "react"
import GetContents from "../Apis/GetContent"
import "../Styles/Item.css"
import Loading from "../Components/Loading"

function Item(): React.ReactElement {

    const [stateLoading, setLoading] = useState<boolean>(false);

    const data = GetContents(2, [])

    useEffect(() =>{
        
        if (data.length == 0) {
            setLoading(true)
        }
                
        if (data.length != 0) {
            setLoading(false)
        }

    }, [data])

    return (
        <>
            <div className="grid-container">
                {stateLoading ? <Loading /> : 
                data.map((item) => (
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