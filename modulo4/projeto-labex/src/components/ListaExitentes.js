import React,{ useEffect } from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";


function ListaExistentes(){
    const navigate= useNavigate()
    const goToFormulario=() =>{
        navigate("/formulario")
      }
  
    
    const[listas,setListas]=useState([]);
    useEffect(()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/jefferson-vieira-jemison/trips")
        .then((response)=>{
            setListas(response.data)
        })
    },[])
    
    

    return(
     
        <div>
         <h1>Lista existentes</h1>
           <p>{listas.name}</p>
           <p>{listas.age}</p>
           <p> {listas.profession}</p>
           <p>olha ai </p>
          <button onClick={goToFormulario} >Formulário de Inscrição</button>    

        </div>

    )
}


export default ListaExistentes;