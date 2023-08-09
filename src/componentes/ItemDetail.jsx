import { CartContext } from "../context/CartContext";
import { ItemCount } from "./ItemCount";
import { useContext, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { EjemploMemo } from "./EjemploMemo";

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
        <div className="container my-5">
            <h4>FYH: {fecha.toLocaleString()}</h4>
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p> 
            <p>{item.precio}</p>
            <EjemploMemo/>

            {
                isInCart(item.id)  
                    ? 
                    <Link className="btn btn-success" to="/cart">Terminar mi compra</Link>
                    : <ItemCount 
                    max={item.stock}
                    counter={cantidad}
                    setCounter={setCantidad}
                    agregar={handleAgregar}
                    />
            }
        </div>
    )
}