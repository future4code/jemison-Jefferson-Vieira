import React from "react";
import { useNavigate } from "react-router-dom";



function Home(){
    const navigate= useNavigate()
    const goToLista=() =>{
        navigate("/Lista")
      }
  
      const goToAdmin=() =>{
        navigate("/Admin")
      }
    return(
        <div>
             <h1>HOME</h1> 
        <button onClick={goToLista}>Lista de Viagens</button>
        <button onClick={goToAdmin}>Administrativa</button>
        </div>
    )
}


export default Home;