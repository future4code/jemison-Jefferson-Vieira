import React,{useState,useEffect} from "react";
import CardContainer from "./CardStyles";
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavortiteIcon from './CardStyles';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded';



function Card (props) {
  

            //  REQUISIÇÃO PERFIL PELA API

                const[profile,setProfile]=useState({});

                const getProfile=()=>{
                const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person";
                axios.get(url)
                .then((response)=>setProfile(response.data.profile))
                .catch((error)=>console.log(error.response.data))
        
     }


                useEffect(()=>{
                getProfile()
                },[])
          
             // FUNÇÃO MATCH
               

         
                const choicePerson=(choice)=>{

                const url="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person";
                const body={
                       id: profile.id,
                       choice: choice
                }
                axios.post(url,body).then((response)=>{
                    getProfile()
                })
                .catch((error)=>console.log(error.response.data));
                console.log(liked);

                    }
                // BOTÕES MATCH   

                const liked=()=>{
                    choicePerson(true)
                }
                
                const unliked=()=>{
                    choicePerson(false)
                }



           return(
             
            <CardContainer key={profile.id}>
                    
                      <img src={profile.photo} alt="Name foto"></img>
                      <h2>{profile.age}</h2>
                      <p>{profile.name}</p>
                      <p>{profile.bio}</p>
                      <div className="botoesContainer">
                    <IconButton>
                        <CloseIcon className="botao2" onClick={unliked}>Dismatch</CloseIcon>             
                    </IconButton>

                     <IconButton>
                     <FavoriteIcon className="botao1" onClick={liked}>Match</FavoriteIcon>
                     </IconButton>
                    </div>
                    <IconButton>
                        <StarRoundedIcon  className="botao3" onClick={()=>props.renderPage("matches")}></StarRoundedIcon>
                    </IconButton>
                      
                   
              </CardContainer>
         
                 
               
        
        )
    
        
   
   }

export default Card ;