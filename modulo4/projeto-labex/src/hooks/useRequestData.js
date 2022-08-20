import {useState, useEffect} from "react";
import axios from "axios";





const url="https://us-central1-labenu-apis.cloudfunctions.net/labeX/jefferson-vieira-jemison"
const useRequestData = () =>{
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError]= useState("")
    useEffect(() =>{
        setIsLoading(true)
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/jefferson-vieira-jemison/trips")
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