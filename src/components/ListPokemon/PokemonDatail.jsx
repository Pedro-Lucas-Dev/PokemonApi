import React from 'react'
import './Information.css'

export const PokemonDatail = (props) => {
    if(props.pokemon === null ) {
        return null
    }
    return(
        <div className="CardPokemon">
            <img 
                alt="imagem do pokemon" 
                src={props.pokemon.sprites.front_default}
                width="200px"
                heigtht="200px"
            />
                <div className="nameContainer"
                    onClick={() => alert("teste")}
                >
                    <p>{props.pokemon.name} Nº{props.pokemon.id} </p> 
                </div>
        </div>
    )
}