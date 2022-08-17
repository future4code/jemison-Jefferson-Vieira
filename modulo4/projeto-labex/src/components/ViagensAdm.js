import React from 'react';
import {useNavigate} from 'react-router-dom';

function ViagensAdm(){
    const navigate= useNavigate()
    const goToVerViagens=() =>{
        navigate("/listaAdm")
      }
  
      const goToCriarViagem=() =>{
        navigate("/criar")
      }
      const goToVerDetalhes=() =>{
        navigate("/detalhes")
      }
    return(

        <div>
            <h1>Viagens Adm</h1>
            <p>Agora renderizou</p>
            <button onClick={goToVerViagens}>Ver lista de Viagens</button>
            <button onClick={goToCriarViagem}>Criar Nova Viagem</button>
            <button onClick={goToVerDetalhes}>Ver detalhes da viagem</button>
        </div>
    )
}


export default ViagensAdm;