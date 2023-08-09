import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { FaTrashAlt } from "react-icons/Fa"
import { Link } from "react-router-dom";

export const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container text-center text-4x1"> 
                <h2 >Tu carrito está vacio</h2>
                <hr />
                <Link to="/" className="btn btn-success">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="container my-5 text-center">
            <div>
                <h2>Tu compra</h2>
                {
                    cart.map((item) => (
                        <div key={item.id}>
                            <h3>{item.nombre}</h3>
                            <img src={item.img} className="text-center"></img>
                            <p>Precio: ${item.precio}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <button onClick={() => removerDelCarrito(item.id)} className="btn btn-danger"><FaTrashAlt></FaTrashAlt></button>
                            <hr />
                        </div>
                    ))
                }
                <div>
                    <h4>Total: ${totalCompra()}</h4>
                    <Link className="btn btn-success" to="/checkout">Ir al CheckOut</Link>
                    <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito</button>

                </div>
            </div>
        </div>
    )
}