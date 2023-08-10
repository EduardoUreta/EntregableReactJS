
import { useContext } from "react"
import {BsCart3} from "react-icons/bs"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

export const CartWidget = () =>{

    const { totalCantidad } = useContext(CartContext)

    return(

        <Link to="/cart" className="text-yellow-400 cursor-pointer flex gap-1 text-center justify-content-center">
            <BsCart3></BsCart3>
            <span>{totalCantidad()}</span>
        </Link>
    )
}
