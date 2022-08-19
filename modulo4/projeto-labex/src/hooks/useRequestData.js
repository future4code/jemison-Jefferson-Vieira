import React from "react";
import { useEffect,useState } from "react";
import { BASEURL } from "../constants/constatesApi";
import axios from 'axios';


function useRequestData(){
    const[data,setData]=useState([])


     useEffect(()=>{
 
     axios.get(`${BASEURL}`)
     .then((response)=>{
        setData(response.data)
        console.log(data)
     })
     
     .catch((error)=>(error.data))
    
    },[])
   
    return [data]

}
export default useRequestData;