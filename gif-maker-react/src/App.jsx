import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddCategory from './assets/components/AddCategory'
import DisplayGifs from './assets/components/DisplayGifs'

function App() {
  const [category, setCategory] = useState("")
  const [value2, setValue2] = useState("")

  return (
    <div className='App'>

        <AddCategory setCategory={setCategory} setValue2={setValue2}/>
      <div className='category'>
        <h2 className='subTitle'>{value2}</h2>
        <DisplayGifs category={category}/>
      </div>
        
      
    </div>
  )
}

export default App
