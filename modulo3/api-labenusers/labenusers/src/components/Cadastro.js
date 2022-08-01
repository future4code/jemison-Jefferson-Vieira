import React,{useState} from 'react';
import axios from 'axios';

function Cadastro(){
    const url='https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
    const serviceHeaders=  { headers:{ Authorization:'jefferson-vieira-jemison'} };
    const [inputEmail,setInputEmail]=useState("");
    const handleInputEmail =(e) =>{
       (e.target.value) 
    }
    const [inputNome,setInputNome]=useState("");
    const handleInputNome =(e) =>{
       (e.target.value) 
    }
    const body = {
        email: inputEmail,
        nome: inputNome
    }

   const postUserEmail =(e)=>{
    e.preventDefault(); 
        axios.post(url,body,serviceHeaders).then((response)=>{alert("email cadastrado com sucesso!")
   }).catch((error)=>{
    alert("erro, email não cadastrado!")
   })
   setInputEmail("")
   }
  
    return(

        <div>
            <form>
            <input
                type="text"
                placeholder='Insira um email!'
                value={inputEmail}
                onChange={handleInputEmail}
            />
            <input
                type="text"
                placeholder='insira seu nome!'
                value={inputNome}
                onChange={handleInputNome}
            />
            </form>
            <buton onClick={postUserEmail}>Adicionar email</buton>
          
         
           

        </div>
    )
}


export default Cadastro;