import { CartContext } from "../context/CartContext";
import { ItemCount } from "./ItemCount";
import { useContext, useState, useMemo } from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({item}) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    // Se trae de agregar al carrito y saber si está en el carrito o no

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem ={
            ...item,
            cantidad,
        };
        if (item.stock > 0){
        agregarAlCarrito(newItem) // Esta viene de app.jsx
        } else {
            alert("No hay stock, intenta con otro producto")
        }
    }

    const fecha = useMemo(() => new Date(), [])

    return (
        <div className="my-4 mb-4 text-center card w-25 m-auto">
            <img src={item.img} alt={item.nombre} className="m-auto img-fluid img-thumbnail mx-auto "/>
            <h2 className="text-bg-dark text-uppercase">{item.nombre}</h2>
            <p className="text-bg-light">{item.descripcion}</p> 
            <p className="text-bg-light">{item.precio}</p>

            {
                isInCart(item.id)  
                    ? 
                    <Link className="btn btn-success m-auto" to="/cart">Terminar mi compra</Link>
                    : <ItemCount 
                    max={item.stock}
                    counter={cantidad}
                    setCounter={setCantidad}
                    agregar={handleAgregar}
                    />
            }
            <br></br>
            <div>
                <Link className="btn btn-primary" to="/productos">Ver otros productos</Link>
            </div>
            <br></br>
        </div>
    )
}