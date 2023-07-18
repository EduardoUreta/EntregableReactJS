import { useEffect } from "react"
import { useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"

// Para escuchar el parametro del Link..
import { useParams } from "react-router-dom";



// Sirve para reutilizar código

export const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(respuesta => {
                if (params.categoryID){
                    setProductos(respuesta.filter(productos => productos.category === params.categoryID))
                }else{
                    setProductos(respuesta)
                }})
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [params.categoryID])

    return {productos, loading};
    // Es lo mismo que productos: productos, 
    //                  loading: loading
}