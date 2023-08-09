import { createContext, useState } from "react";
// Con esto cree el contexto, guardado en MyContext

export const CartContext = createContext()

// Pero hay que tener un Context Provider
// El que comparte el acceso
// Cualquier hijo del provider, accede a los datos
// Para que todos puedan acceder, se hace en el cmp App.jsx

    // Con el provedor, puedo pasar valores y los hijos pueden acceder
    // A través de un hook, en el mismo componente

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    // El elemento inicial de mi carrito será un array vacio
    console.log(cart);

    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }

    const removerDelCarrito = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }
    // Si quiero eliminar el id 1, me va a filtrar y retornar
    // todo lo que no sea id 1 

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const totalCompra = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const totalCantidad = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCompra,
            vaciarCarrito,
            totalCantidad, 
            removerDelCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}