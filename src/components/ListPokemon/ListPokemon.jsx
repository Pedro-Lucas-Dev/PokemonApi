import React, { useEffect, useState }  from 'react'
import {PokemonDatail} from './PokemonDatail.jsx'
import axios from 'axios'

export const ListPokemon = (props) => {

    const [pokemonsWithAllDetails,setPokemonsWithAllDetails] = useState()

    const url_Api = "https://pokeapi.co/api/v2"
    
    useEffect(() => {
        axios(`${url_Api}/pokemon`)
        .then((response) => {
            renderPokemons(response.data.results)
        })
    },[])

    const renderPokemons = (apiResponsePokemon) => {
        const promisses = apiResponsePokemon.map(pokemon => {
            return axios(pokemon.url)
        })
        Promise.all(promisses)
        .then(promise => {
            setPokemonsWithAllDetails(promise)
        })
    }

    const renderAllPokemonsDetails = () => {
        return pokemonsWithAllDetails.map(pokemonDetails => {

            return <PokemonDatail pokemon={pokemonDetails.data} key={pokemonDetails.data.name} />
        })
    }

    return(
        <div className="ListPokemon">
            {pokemonsWithAllDetails && renderAllPokemonsDetails()}
        </div>
    )
}