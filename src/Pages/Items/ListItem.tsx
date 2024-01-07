import React, { createElement, useEffect, useRef, useState } from "react"
import GetContents, { IContent, Ichild } from "../../Apis/GetContent"
import "../../Styles/Pages/Items/ListItem.css"
import Loading from "../../Components/Loading"

const linkTitle = "Tautan Berguna"
const imageAlt  = "Dari internet"

function ListItem(): React.ReactElement {

    const [stateLoading, setLoading] = useState<boolean>(false);
    const [currentItem, setCurrentItem] = useState<number[]>([]);

    const data = GetContents([]);

    const elementRef = useRef<HTMLDivElement>(null);

    const handleClick = (event: React.BaseSyntheticEvent, child: Array<Ichild>) => {

        const itemId = event.currentTarget.getAttribute('item-id') as number;

        if (currentItem.includes(itemId)) {
            setCurrentItem([...currentItem, itemId]);
            event.currentTarget.classList.add('clicked');
            elementRef.current?.classList.add('clicked');

            return null
        }

        setCurrentItem([...currentItem, itemId]);
        event.currentTarget.classList.add('clicked');
        elementRef.current?.classList.add('clicked');


        // Get the parent element
        let parentElement = event.currentTarget

        const childs = child ?? []

        if (childs.length > 0) {

            for (const item of childs) {

                // Create a new element
                let ElementDiv = document.createElement("div");
                let elementTitle = document.createElement("div");
                let elementLink = document.createElement("a");
                let elementImage = document.createElement("img");

                ElementDiv.textContent = item.description as string
                ElementDiv.classList.add('grid-item-child');

                elementTitle.textContent = item.title as string
                elementTitle.classList.add('title-child');

                elementLink.textContent = linkTitle
                elementLink.classList.add('title-link-child')
                elementLink.setAttribute('href', item.link as string)
                elementLink.setAttribute('target', '_blank')

                elementImage.setAttribute('src', item.image as string)
                elementImage.setAttribute('alt', imageAlt)

                parentElement.append(elementTitle);

                // Insert the new element before the first child
                parentElement.append(ElementDiv);

                ElementDiv.appendChild(elementLink);

                if (item.image) {
                    elementTitle.appendChild(elementImage);                    
                }

            }
        }
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

            const currentElement = elementRef.current?.children[currentItem[0] - 1]

            currentElement?.classList.remove('clicked')

            currentElement?.querySelectorAll('.grid-item-child')?.forEach((child) => {
                child.remove()
            })

            currentElement?.querySelectorAll('.title-child')?.forEach((child) => {
                child.remove()
            })

            elementRef.current?.classList.remove('clicked');

            if (currentItem[0] == currentItem[1]) {
                setCurrentItem([])
            } else {
                currentItem.shift()
                elementRef.current?.classList.add('clicked');
            }
        }

    }, [handleClick])

    return (
        <>
            <div className="grid-container" ref={elementRef}>
                {stateLoading ? <Loading /> :
                    data.map((item) => (
                        <div key={item.id} className="grid-item" onClick={(event) => handleClick(event, item.child ?? [])} item-id={item.id}>
                            <div>
                                <span className="title-item">{item.title}</span>
                            </div>
                            <div>
                                <span className="description-item">{
                                    item.description
                                }</span>
                            </div>
                            <div className="detail-item">
                                <div className="bottom-right-item">
                                    <span className="author">
                                        <p className="author-label">Author</p>
                                        <p className="author-name">{item.author}</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                    )}
            </div>
        </>
    )
}

export default ListItem