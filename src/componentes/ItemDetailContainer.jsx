import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"


export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()
    console.log(itemId);
    console.log(item);

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(respuesta => {
                setItem(respuesta.find(producto => producto.id === Number(itemId)))
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {
            loading 
            ? <h2 className="text-center">Cargando....</h2>
                : <ItemDetail item={item}/>
            }
        </div>
    )
}