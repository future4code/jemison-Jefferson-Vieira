import React from "react";
import { useNavigate } from "react-router-dom";



function HomePage(){
    const navigate= useNavigate()
    const goToListaPublic=() =>{
        navigate("/existentes")
      }
  
      const goToAdmin=() =>{
        navigate("/login")
      }
    return(
        <div>
             <h1>HOMEPAGE</h1> 
        <button onClick={goToListaPublic}>Lista de  Existentes</button>
        <button onClick={goToAdmin}>Administrativa</button>
        </div>
    )
}


export default HomePage;