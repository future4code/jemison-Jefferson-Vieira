import React from 'react';
import {useNavigate} from 'react-router-dom';

function ViagensPublic(){
    const navigate= useNavigate()
    const goToExistentes=() =>{
        navigate("/existentes")
      }
  
      const goToFormInsc=() =>{
        navigate("/formInsc")
      }
    return(

        <div>
          <h1>Lista Viagens Public</h1>
          <button onClick={goToExistentes}>Existentes</button>
          <button onClick={goToFormInsc}>Formulário Isncrição</button>
        </div>
    )
}


export default ViagensPublic;