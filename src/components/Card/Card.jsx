import React from 'react'
import './Card.css'

export const Card = (props) => {
    return(
        <div className="Card" style={{backgroundColor: props.color}}>
            <p> { props.titulo } </p>
            <div>
                {props.children}
            </div>
        </div>
    )
}