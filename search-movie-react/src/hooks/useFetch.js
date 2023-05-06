import { useEffect, useState } from "react"

const API_ENDPOINT = `http://www.omdbapi.com/?apikey=cf9da917`

export const useFetch = (params) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)

    const fetchMovie = (url) => {
        setIsLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(json => {
                if(json.Response === "True"){
                    setData(json.Search || json)
                    setError(false)
                }
                else{
                    setError(true)
                }
                setIsLoading(false)
                console.log(json)
            })
            .catch(error => console.log(error))
    }

    useEffect(()=>{
        fetchMovie(`${API_ENDPOINT}${params}`)
    }, [params])

    return {isLoading, error, data}
}
