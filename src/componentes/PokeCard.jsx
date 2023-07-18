import { useEffect, useState } from "react"

export const PokeCard = ({url}) => {
    // Recibe una URL por Props
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            setPokemon(data)
        })
    },[])

    return (
        <div className="col-3 m-2">
            {
                pokemon ?
                <div>
                    <h4 className="text-capitalize">{pokemon.name}</h4>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>

                </div>
                : null
            }
        </div>
    )
}