import React, { useEffect, useState }  from 'react'
import {PokemonDatail} from './PokemonDatail.jsx'

export const ListPokemon = (props) => {

    const [pokemons, setPokemons] = useState([])
    const [selectPokemon, setSelectPokemon] = useState(null)
    const [hidden, setHidden] = useState(true)

    const url_Api = "https://pokeapi.co/api/v2"
    const getPokemons = () =>  {
        fetch(`${url_Api}/pokemon`)
        .then((response) => response.json())
        .then((responseParsed) => {
            setPokemons(responseParsed.results)
        })

    } 

    const getDetails = (pokemon) => {
        fetch(pokemon.url)
        .then((response) => response.json())
        .then((responseParsed) => {
            setSelectPokemon(responseParsed)
        })
        setHidden(false)
    }

    useEffect(() => {
        getPokemons()
    },[])


    return(
        <div>
            <PokemonDatail pokemon={selectPokemon}/>
            <ul> 
                <li> 
                    <button onClick={() => setHidden(!hidden)}> Exibir Pokemons </button> </li>
                {hidden && pokemons.map((pokemon) => {
                    return(
                        <li key={pokemon.name}> <button onClick={() => getDetails(pokemon)}> { pokemon.name } </button> </li>
                    )
                })}
            </ul>
        </div>
    )
}