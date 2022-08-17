import React, { useEffect } from "react";
import axios from "axios";
import {useState} from 'react';
import useRequestData from "./useRequestData";

function ListaExistentes(){
    
     const [data] = useRequestData('/trips')
     
     const listaPublica = data &&  data.map((item)=>{
        return(
            <div key={item.id}>
                <section>
                    <p>{item.name}</p>
                    <p>{item.planet}</p>
                </section>
            </div>
        )
     })

    return(
     
        <div>
         <h1>Lista existentes</h1>
        
         {listaPublica}
        </div>

    )
}


export default ListaExistentes;