import React, { useEffect, useState } from "react";
import axios from "axios";
import useForm from "../hooks/useForm";
import swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
function ApplicationForm() {

    const navigate= useNavigate()
    const goToListaExistentes=() =>{
        navigate("/existentes")
      }
   


            const{form,onChange,clear}=useForm({
            name:"",
            age:"",
            applicationText:"",
            profession:"",
            country:"",
         }) 

         
                    
                    const apply = (e) => {
                    const body = {
                    ...form
                    }

                    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jefferson-vieira-jemison/trips/:id/apply`, body)
                    .then(res => {
                        swal.fire({
                        icon: 'success',
                        title: 'Sucesso! Boa Sorte!',
                        })
                     
                    }).catch(err => {
                        swal.fire({
                        icon: 'error',
                        title: 'OOOPS...',
                        text: 'Algo deu errado... tente novamente mais tarde',
                        })
                    })
                    e.preventDefault()
                }


      

  return (
            <div>
                    
                <h1>Lista From Public</h1>
                <div>
                <form  > 
                    <div>
                   
                    <input  
                    type="text"
                    placeholder="Insert Name"
                    value={form.name}
                    onChange={onChange}
                    name ={"name"}
                    >
                    </input>
            
                    </div>  

                    <div>
                    <p>Age:</p>
                    <input 
                    type="number"
                    placeholder="Insert Age"
                    value={form.age}
                    onChange={onChange}
                    name ={"age"}
                    min={"18"}
                    >
                    </input>
                    </div>  
                    <div>
                    <p>ApplicationText:</p>
                    <input  
                    type="text"
                    placeholder="Insert Application Text"
                    value={form.applicationText}
                    onChange={onChange}
                      name ={"applicationText"}>
                    </input>

                    </div>  
                    <div>
                    <p>Profession:</p>
                    <input  
                    type="text"
                    placeholder="Insert Profession"
                    value={form.profession}
                    onChange={onChange}
                      name ={"profession"}>
                    </input>

                    </div>  
                    <div>
                    <p>Country:</p>
                    <input  
                    type="text"
                    placeholder="Insert Country"
                    value={form.country}
                    onChange={onChange}
                    name ={"country"}
                    >
                        </input>

                    </div>  
                    <div>
                    <button onClick={apply }>Salvar</button>
                    </div>
                    <button onClick={goToListaExistentes} >Voltar</button> 
                    </form> 
                </div>
             

 
            </div>

  );
}
export default ApplicationForm;
