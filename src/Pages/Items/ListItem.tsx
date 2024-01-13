import React, { createElement, useEffect, useRef, useState } from "react"
import GetContents from "../../Apis/GetContent"
import "../../Styles/Pages/Items/ListItem.css"
import Loading from "../../Components/Loading"

function ListItem(): React.ReactElement {

    const [stateLoading, setLoading] = useState<boolean>(false);
    const data = GetContents([]);

    useEffect(() => {

        if (data.length == 0) {
            setLoading(true)
        }

        if (data.length != 0) {
            setLoading(false)
        }

    }, [data])

    return (
        <>
            <div className="flex-container">
                {stateLoading ? <Loading /> :
                    data.map((item) => (
                        <div key={item.id} className="flex-item">
                            <div className="title-parent">
                                <span className="title-item">{item.title}</span>
                            </div>
                            <div>
                                <iframe className="video" src={`https://www.youtube.com/embed/${item.video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                    )
                    )}
            </div>
        </>
    )
}

export default ListItem