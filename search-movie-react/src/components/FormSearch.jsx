import React, { useContext, useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { DataContext, DataProvider } from '../assets/context/DataContext'

const FormSearch = () => {
  const [title, setTitle] = useState("")
  //const {data} = useFetch("&s=troya")
  const {setQuery, error} = useContext(DataContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(title)
    //console.log(title)
  }

  return (
    <div className='form-search'>
      <h2>Old Movies Finder</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Title Movie' onChange={e => setTitle(e.target.value)}/>
        <input type="submit" value="Search" />
      </form>
      { (error) && <p>The movie doesn't exist </p>}
    </div>
  )
}

export default FormSearch
