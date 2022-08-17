import React from "react";
import { useEffect,useState } from "react";
import { BASEURL } from "./constatesApi";
import axios from 'axios';


function useRequestData(finalUrl){
    const[data,setData]=useState([])


     useEffect(()=>{
 
     axios.get(`${BASEURL}${finalUrl}`)
     .then((response)=>{
        setData(response.data.trips)
        console.log(data)
     })
     
     .catch((error)=>(error.data))
    
    },[])
   
    return [data]

}
export default useRequestData;