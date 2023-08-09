import { Link } from "react-router-dom"
import Swal from "sweetalert2";

const ItemCard = ({item}) => {

    return (
        <div className="flex flex-col justify-content-center  align-items-center ">
            <h4>{item.nombre}</h4>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>

            {
                item.stock >= 1 && item.stock <= 10 
                ? 
                    <p className="text-red-500">Quedan sólo {item.stock} unidades!</p>
                : 
                    item.stock === 0 && null
            }

            { item.stock === 0 ? 
                    <button
                    className="btn btn-danger"
                    onClick={() =>
                      Swal.fire({
                        icon: "error",
                        title: "¡Error!",
                        text: "No quedan productos disponibles.",
                      })
                    }
                  >
                    Agotado
                  </button>
            :
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
            }
        </div>
    )
}

export default ItemCard