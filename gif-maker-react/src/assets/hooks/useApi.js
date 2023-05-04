import React, { useEffect, useState } from 'react'

const useApi = (url) => {
  const[data, setData] = useState("")
  const[loading, setLoading] = useState(false)

  const fetchApi = () => {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            setLoading(true)
            setData(json.data)
            //console.log(json)
        })
        .catch(error => {
            console.log(error)
        })
  }

  useEffect(() => {
    fetchApi()
  },[url])

  return {loading, data}
}

export default useApi
