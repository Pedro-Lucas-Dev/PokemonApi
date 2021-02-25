import React from 'react'

export const Dados = (props) => {
    return(
        <div>
            <p className="title">{props.titulo}</p>
            <p className="subTitle">{props.subtitulo}</p>
        </div>
    )

}