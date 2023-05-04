import React, { useState } from 'react'

const AddCategory = ({setCategory, setValue2}) => {

  const [value, setValue] = useState("")
  const [error, setError] = useState(false)
  const searcGif = (e) => {
    e.preventDefault();
    //console.log("enter form")
    if(value === ""){
      setError(true);
      return
    }
    
    setError(false)
    setCategory(value)
    setValue2(value)
    setValue("")
  }

  return (
    <div>
      <h1 className='titleText'>Gif Maker</h1>
      <form onSubmit={searcGif}>
        <input type="text" placeholder='Search...'
              onChange={(e)=>(setValue(e.target.value))}
              value={value}
        />
      </form>
      {(error)?<p className='error'>El campo no puede estar vacio</p>:""}
    </div>
  )
}

export default AddCategory




