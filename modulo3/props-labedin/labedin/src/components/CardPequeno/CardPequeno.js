import React from 'react';
import './CardPequeno.css'

function CardPequeno (props){
    return (
        <div className="smallcard-container">
            <div>
            <img src={ props.imagem } />
            </div>
            <h4>{ props.texto}</h4>
            <p>{ props.textoConteudo }</p>
           
        </div>
    )
}



export default CardPequeno; 