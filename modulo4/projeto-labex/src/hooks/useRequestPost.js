import React from "react";
import { useEffect,useState } from "react";
import { BASEURL } from "../constants/constantesApi";
import axios from 'axios';


function useRequestPost(){
    const[post,setPost]=useState([])


            useEffect(()=>{
        
            axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/jefferson-vieira-jemison/trips/:id/apply",{
                body:{
                    
                        age: "",
                        name: "",
                        applicationText: "",
                        profession: "",
                        country: ""
                }
            })
            .then((response)=>{
                setPost(response.data)
                console.log(post)
            })
            
            .catch((error)=>(error.data))
            
            },[])
        
    return post
}
export default useRequestPost;