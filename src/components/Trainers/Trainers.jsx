import React, {useState} from 'react'

export const Trainers = (props) => {

    const [name, setName] = useState("Ashe") 

    
    
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={() => setName("Pedro")}> Treinador 1 </button>
            <button onClick={() => setName("Red")}> Treinador 2 </button>
            <button onClick={() => setName("Lucas")}> Treinador 3 </button>
        </div>
    )
}