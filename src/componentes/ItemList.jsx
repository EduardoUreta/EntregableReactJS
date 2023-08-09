
import ItemCard from "./ItemCard"

export const ItemList = ({productos}) => {

    return (
        <div className="container">
            <div className="flex flex-row flex-wrap justify-content-around  gap-2">               
                {
                     productos.map((product) => <ItemCard key={product.id} item={product}/>)
                }
            </div>
        </div>
    )
}