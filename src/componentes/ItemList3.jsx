
import { ItemListContainer } from "./ItemListContainer"

const ItemList3 = ({productos}) => {

    return (
        <div className="container">
            <h2>Productos</h2>

            <div className="flex flex-row flex-column justify-content-center">
                {
                    loading ? <h2>Cargando....</h2> 
                    : productos.map((product) => <ItemListContainer key={product.id} item={product}/>)
                }
            </div>
        </div>
    )
}

export default ItemList3