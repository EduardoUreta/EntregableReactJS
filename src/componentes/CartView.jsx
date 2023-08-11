import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { FaTrashAlt } from "react-icons/Fa"
import { Link } from "react-router-dom";


export const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container text-center text-4x1"> 
            <br></br>
                <h2 className="text-blue-800 text-uppercase" >Tu carrito está vacio</h2>
                <br></br>
                <hr />
                <br></br>
                <Link to="/productos" className="btn btn-success">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="container my-5 text-center fw-bolder ">
            <h1 className="text-blue-700 text-uppercase fw-bolder">Tu compra</h1>
            <hr/>
            <br></br>
            <div className="row justify-content-center gap-4">
                {
                    cart.map((item) => (
                        <div key={item.id} className="card w-25 row-gap-1 ">
                            <img src={item.img} className="m-auto img-fluid img-thumbnail mx-auto "></img>
                            <h1 className="bg-black text-warning ">{item.nombre}</h1>
                            <p>Precio: ${item.precio}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <button onClick={() => removerDelCarrito(item.id)} className="btn btn-danger m-auto"><FaTrashAlt></FaTrashAlt></button>
                            <hr />
                        </div>
                    ))
                }
                <div>
                    <br></br>
                    <h4 className="card bg-black container w-40 text-yellow-500">Total: ${totalCompra()}</h4>
                    <br></br>
                    <hr/>
                    <br></br>
                    <Link className="btn btn-success" to="/checkout">Ir al CheckOut</Link>
                    <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito</button>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    )
}