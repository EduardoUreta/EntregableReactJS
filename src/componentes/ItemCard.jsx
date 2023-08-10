import { Link } from "react-router-dom"
import Swal from "sweetalert2";

const ItemCard = ({item}) => {

    return (
        <div className="col-sm-4 col-md-3 col-lg-3 justify-content-around text-center">
                <div key={item.id} className="">
                    <img src={item.img} className="img-fluid img-thumbnail mx-auto"></img>
                    <h1 className="text-bg-dark text-uppercase ">{item.nombre}</h1>
                    <h6 className="text-bg-light">{item.descripcion}</h6>
                    <h4 className="text-bg-light">${item.precio}</h4>
                </div>
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