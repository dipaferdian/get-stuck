import React, { useEffect, useRef, useState } from "react"
import GetContents from "../../Apis/GetContent"
import "../../Styles/Pages/Items/ListItem.css"
import Loading from "../../Components/Loading"


function ListItem(): React.ReactElement {

    const [stateLoading, setLoading] = useState<boolean>(false);
    const [currentItem, setCurrentItem] = useState<number[]>([]);
    const data = GetContents([]);

    const elementRef = useRef<HTMLDivElement>(null);

    const handleClick = (event: React.BaseSyntheticEvent) => {

        const itemId = event.currentTarget.getAttribute('item-id') as number;

        if (currentItem.includes(itemId)) {
            setCurrentItem([...currentItem, itemId]);
            event.currentTarget.classList.add('clicked');

            return null
        }

        setCurrentItem([...currentItem, itemId]);
        event.currentTarget.classList.add('clicked');
        
    };

    useEffect(() => {

        if (data.length == 0) {
            setLoading(true)
        }

        if (data.length != 0) {
            setLoading(false)
        }

    }, [data])

    useEffect(() => {

        if (currentItem.length > 1) {
           
            elementRef.current?.children[currentItem[0] - 1]?.classList.remove('clicked')

            if (currentItem[0] == currentItem[1]) {
                setCurrentItem([])
            }else{
                currentItem.shift()
            }
        }

    }, [handleClick])

    return (
        <>
            <div className="grid-container" ref={elementRef}>
                {stateLoading ? <Loading /> :
                    data.map((item) => (
                        <div key={item.id} className="grid-item" onClick={(event)=>handleClick(event)} item-id={item.id}>
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

export default ListItem