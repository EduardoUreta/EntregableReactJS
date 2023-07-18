import { useEffect, useState } from "react"
import { PokeCard } from "./PokeCard";


// Catalogo de Pokemones de a 20
export const PokeList = () => {

    const [list, setList] = useState([])
    console.log(list);
    // Me da un array de los primeros 20 pkmns
    // Que viene con el nombre y una URL del pkmn
    // Asi que voy a pedir el listado 
    // Y luego la URL de cada uno de esos 20 pkmns

    const [pagination, setPagination] = useState({
        next: null,
        previous: null,
    })

    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`)

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then ((data) => {
                setList(data.results)
                setPagination({
                    next: data.next,
                    previous: data.previous
                    // Paso 1: Guardo la paginación
                })
            })
    },[url])
    // Es dependiente de uRL

    const handleSiguiente = () => {
        pagination.next && setUrl(pagination.next)
    }
    const handleAnterior = () => {
        pagination.previous && setUrl(pagination.previous)
    }

    return (
        <div className="container my-5">
            <h2>PokeList</h2>

            <div className="row">
                {
                    list.map((item) => <PokeCard key={item.name} url={item.url}/>)
                }
            </div>

        <button onClick={handleAnterior} className="btn btn-warning mx-1">Anterior</button>
        <button onClick={handleSiguiente} className="btn btn-warning mx-1">Siguiente</button>
        </div>
    )
}