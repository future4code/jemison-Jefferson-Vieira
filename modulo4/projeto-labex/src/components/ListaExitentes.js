import React from "react";
import useRequestData from "../hooks/useRequestData";
import {useNavigate} from 'react-router-dom';

function ListaExistentes(){
    const navigate= useNavigate()
    const goToFormulario=() =>{
        navigate("/formulario")
      }
  
    
     const [data] = useRequestData('/trips')
     
     const listaPublica = data &&  data.map((item)=>{
        return(
            <div key={item.id}>
                <section>
                    <p>{item.name}</p>
                    <p>{item.planet}</p>
                </section>
            </div>
        )
     })

    return(
     
        <div>
         <h1>Lista existentes</h1>
          <button onClick={goToFormulario} >Formulário de Inscrição</button>    
         {listaPublica}
        </div>

    )
}


export default ListaExistentes;