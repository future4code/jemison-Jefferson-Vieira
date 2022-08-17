import React from 'react';
import { useNavigate } from "react-router-dom";

function Autenticacao(){
    const navigate= useNavigate()
    const goToAuthNo=() =>{
        navigate("/login")
      }
  
      const goToAuthYes=() =>{
        navigate("/adm")
      }
    return(

        <div>
        <h1>Autenticação</h1>
        <form>
        <button onClick={goToAuthNo}>não cadastrado</button>
        <button onClick={goToAuthYes}>Lista de Viagens Adm</button>
        </form>
       
        </div>
    )
}


export default Autenticacao;