import React from 'react'
import './Information.css'
import {Dados} from './Dados.jsx'

export const PokemonDatail = (props) => {
    if(props.pokemon === null ) {
        return null
    }
    return(
        <div>
            <p>{props.pokemon.name} Nº{props.pokemon.id}</p> 
            <img 
                alt="imagem do pokemon" 
                src={props.pokemon.sprites.front_default}
                width="200px"
                heigtht="200px"
            />
            <div className="Information">
                <Dados 
                    titulo="Height"
                    subtitulo={props.pokemon.height}

                />
                 <Dados 
                    titulo="Weight"
                    subtitulo={props.pokemon.weight}
                    
                />
            </div>
            <h6>{props.pokemon.types.map((type) => type.type.name).join(' - ')}</h6>
            <ol>
                <h1>Skills:</h1>
               {props.pokemon.abilities.map((ability) => {
                   return(
                       <li key={ability.ability.name}> {ability.ability.name} </li>
                   )
               })}
            </ol>
        </div>
    )
}