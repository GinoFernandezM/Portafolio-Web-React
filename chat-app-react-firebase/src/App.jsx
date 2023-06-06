import { useState } from 'react'
import './App.css'
import Chat from './components/Chat'
import User from './components/User'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <User/>
      <Chat/>
      
    </div>
  )
}

export default App
