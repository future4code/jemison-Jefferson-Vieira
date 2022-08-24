import {useState, useEffect} from "react";
import axios from "axios";
import { url } from "../constants/constantesApi";





const useRequestData = (endpoint, initialState) =>{
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError]= useState("")
    useEffect(() =>{
        setIsLoading(true)
        axios.get(`${url}${endpoint}`)
        .then((response) =>{
            setIsLoading(false)
            setData(response.data)
        }).catch((error) =>{
            setIsLoading(false)
            setError(error)
            console.log(error.data)
        })
    }, [url])
    return [data, isLoading, error]
}
export default useRequestData;