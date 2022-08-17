import axios from 'axios';
import React,{useEffect, useState} from 'react';
import CardContainer from '../Card/CardStyles';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { IconButton } from "@mui/material";
import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';
import ContainerMatch from './StylesMatch';




function Match(props){

const [deuBom,setDeuBom]=useState([])
   const url="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"


    const getMatches=()=>{
        axios.get(url)
        .then((response)=>setDeuBom(response.data.matches))
        .catch((error)=>console.log(error.response.data))
    } 
        //USEEFFECT

        useEffect(()=>{
            getMatches()
        },[])
    
       
    // FUNCAO LIMPAR

   
    

    const putLimpa=()=>{
    
        const urlClear="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear";
    
        axios.put(urlClear)
        .then((response)=>{getMatches()
         alert("Apagado com Sucesso!")})
        .catch((error)=>{alert("erro, não apagado!")})


       

}




     

     return(
       <ContainerMatch>
        <h1>Sua lista de match's</h1>
        {deuBom.map((item)=>{
             return(
                  <CardContainer key={item.id}> 
                    <h3>{item.name}</h3>  
                    <img src={item.photo} />
                  
               
                 </CardContainer>
               )

            })
        }
                     <IconButton>
                        <DeleteOutlineRoundedIcon className="botao1" onClick={putLimpa}>Limpar</DeleteOutlineRoundedIcon>
                     </IconButton>
                     <IconButton>
                       <ReplyAllRoundedIcon className="botao2" onClick={()=>props.renderPage("inicial")} >Voltar</ReplyAllRoundedIcon>
                     </IconButton>
                    
       </ContainerMatch>

          
     
     )
}


export default Match;