import React,{ useEffect } from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert2';
import useRequestData from "../hooks/useRequestData";
import {url} from '../constants/constantesApi';
import './listaexistentes.css';


function ListaExistentes(){
    const navigate= useNavigate()
    const goToFormulario=() =>{
        navigate("/formulario")
      }
   
    const goToBack=() =>{
        navigate("/listaPublic")
      }
  
    
 const [data, isLoading,error]=useRequestData("/trips",{})
  const travel = data && data.trips && data.trips.map((user)=>{
    return(
        <div key={user.id}>
           <p>{user.name}</p>
           <p>{user.planet}</p>
           <p>{user.description}</p>
        </div>
    )
  })
    
    console.log(data)

    return(
     
        <div>
         <h1>Lista existentes</h1>
            {travel && travel.length > 0 ? travel : <p>Carregando...</p>}
            {isLoading && <h3>Carregando Viagens...</h3>}
            {!isLoading && error && <p>Ocorreu um erro ao carregar viagens</p>}
            {!isLoading &&  travel && travel.trips && travel.trips.lenght > 0 && travel}
            {!isLoading && travel && travel.trips && travel.trips.length === 0 && <p>Não há viagens</p>}
             <button onClick={goToFormulario} >Formulário de Inscrição</button> 
             <button onClick={goToBack} >Voltar</button> 
         
             

        </div>

    )
}


export default ListaExistentes;