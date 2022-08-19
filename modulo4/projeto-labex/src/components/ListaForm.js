import React, { useState } from "react";
// import { BASEURL } from "../constants/constatesApi";
import axios from "axios";
import useForm from "../hooks/useForm";


function ListaForm() {
         const{form,onChange,}=useForm({
            name:"",
            age:"",
            applicationText:"",
            profession:"",
            country:"",
         }) 
     const cadastrado=()=>{
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips/`${id}`/apply",
    )
    .then((response)=>{
        form(response.data)
        .catch((error)=>{
            console.log("deu erro", error.response)
        })
    })
   
          }
  const onClick=(e)=>{
     e.preventDefault(form)
  }
  
  return (
            <div>
                    
                <h1>Lista From Public</h1>
                <div>
                <form onSubmit={onClick} > 

                    <div key={form.id}>
                    <p>Name:</p>
                    <input  
                    type="text"
                    placeholder="Insert Name"
                    value={form.name}
                    onChange={onChange}>
                    </input>

                    </div>  

                    <div>
                    <p>Age:</p>
                    <input 
                    type="text"
                    placeholder="Insert Age"
                    value={form.age}
                    onChange={onChange}
                    handleInput={form}>
                        </input>
                    </div>  
                    <div>
                    <p>ApplicationText:</p>
                    <input  
                    type="text"
                    placeholder="Insert Application Text"
                    value={form.applicationText}
                    onChange={onChange}>
                    </input>

                    </div>  
                    <div>
                    <p>Profession:</p>
                    <input  
                    type="text"
                    placeholder="Insert Profession"
                    value={form.profession}
                    onChange={onChange}>
                    </input>

                    </div>  
                    <div>
                    <p>Country:</p>
                    <input  
                    type="text"
                    placeholder="Insert Country"
                    value={form.country}
                    onChange={onChange}>
                        </input>

                    </div>  
                    <div>
                    <button type="submit">Salvar</button>
                    </div>
                    </form> 
                </div>
             


            </div>

  );
}
export default ListaForm;
