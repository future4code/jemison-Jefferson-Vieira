import React from 'react';
import {useNavigate} from 'react-router-dom';

    
function DetalhesViagem(){
    const navigate= useNavigate()
    const goToListaCandidatos=() =>{
        navigate("/candidatos")
      }
  
      const goToAprovacao=() =>{
        navigate("/aprovacao")
      }
      const goToListaAprovados=() =>{
        navigate("/aprovados")
      }

    return(

        <div>
            <h1>Detalhes Viagem</h1>
            <button onClick={goToListaCandidatos}>lista candidatos</button>
            <button onClick={goToAprovacao}>aprovacao</button>
            <button onClick={goToListaAprovados}>aprovados</button>
        </div>
    )
}


export default DetalhesViagem;