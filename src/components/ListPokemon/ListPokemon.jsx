import React, { useEffect, useState }  from 'react'

export const ListPokemon = (props) => {

    const [pokemons, setPokemons] = useState([])
    const [selectPokemon, setSelectPokemon] = useState(null)

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
    }

    useEffect(() => {
        getPokemons()
    },[])


    return(
        <div>
            {selectPokemon && <img src={selectPokemon.sprites.front_default}/>}
            <ul> 
                {pokemons.map((pokemon) => {
                    return(
                        <li key={pokemon.name}> <button onClick={() => getDetails(pokemon)}> { pokemon.name } </button> </li>
                    )
                })}
            </ul>
        </div>
    )
}