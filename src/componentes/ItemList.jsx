
import ItemCard from "./ItemCard"

export const ItemList = ({productos}) => {

    return (
        <div className="container">
            <div className="flex flex-row flex-wrap justify-content-around row-gap-3 gap-1">               
                {
                     productos.map((product) => <ItemCard key={product.id} item={product}/>)
                }
            </div>
        </div>
    )
}