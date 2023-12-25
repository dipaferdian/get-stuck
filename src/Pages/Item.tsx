import GetShoes, { Ishoes } from "../Apis/shoes/GetShoes"
import "../Styles/Item.css"

function Item(): React.ReactElement {

    const shoes = GetShoes([])

    return (
        <>
            <div className="flex-container">
                {shoes.map((item) => (
                    <div className="flex-item" key={item.id}>
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