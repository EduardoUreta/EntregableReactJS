
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";


////// Eventos /////

export const Contacto = () => {
    // Acceder al dato dado por el proovedor del contexto
    const { tutor } = useContext(CartContext) // Permite consumir un contexto
    // Desestructuro



    // Queremos contar la cantidad de Clicks en la pantalla

    const clickear = (event) => {
        console.log(event)
    }
    // Para que no se acumule en cada renderizado..
    // Uso el use Effect

    useEffect(() => {
        window.addEventListener("click", clickear);
        // Con esto, remuevo el evento
        // Hay que agregar las referencias a la función
        return () => {
            window.removeEventListener("click", clickear)
        }
    }, [])


    return(
        <div onClick={clickear} className="container my-5">
            <h2>Contacto</h2>
            <h1>xd</h1>
        </div>
    )
}