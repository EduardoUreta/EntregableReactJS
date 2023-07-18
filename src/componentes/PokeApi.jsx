import { useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"

export const PokeApi = () => {

    // const [pokemon, setPokemon] = useState(null)

    const [id, setId] = useState(1)

    // useEffect(() => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //     // Con el {id} puedo pedir cualquier ID que quiera
    //         .then((resp) => resp.json())
    //         // Retorna un recurso, lo capturo con el Then
    //         // La promesa que devuelve, lo resuelve 
    //         // en tipo Response, y lo trabajo con json()
    //         .then((data) => {
    //             setPokemon(data)
    //         });
    //         // El metodo json() retorna tbn una promesa
    //         // capturo con el .then y obtengo la data
    //         // de forma setPokemon
    // },[id])
    // // Le paso el Id por dependencia, así se renderiza 
    // // cada vez que apreto el boton


    /////// Consumiendo a través de HOOOKS 

    const {data: pokemon} = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, [id])

    // Cambio de estado apretando el boton
    const handleSiguiente = () => setId(id+1)
    const handleAnterior = () => id > 1 && setId(id-1)
                // Si la id > 1 es verdadero,
                // se ejecutará setId(id-1)
                // si id > 1 es falso, no hará nada

    return (
        <div className="container my-5">
            <h2>PokeApi</h2>
        
        {
            pokemon ?
            // Operador Ternario
            <div>
                <h4 className="text-capitalize">{pokemon.name}</h4>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>

            </div>
            : null // Operador Ternario
        }

        <button onClick={handleAnterior} className="btn btn-primary mx-1">Anterior</button>
        {/* El onClick asigna una función que se ejecutara 
        cuando el elemento sea clickeado por el usuario*/}
        <button onClick={handleSiguiente} className="btn btn-primary mx-1">Siguiente</button>
        </div>
    )
}