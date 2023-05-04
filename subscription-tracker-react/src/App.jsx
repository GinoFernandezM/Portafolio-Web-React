import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header'
import FormAddMoney from './assets/components/FormAddMoney'
import MainControl from './assets/components/MainControl'

function App() {
  const [count, setCount] = useState(0)
  const [isValid, setIsValid] = useState(false)
  const component = isValid ? <MainControl count = {count} />
                            : <FormAddMoney setCount={setCount} setIsValid={setIsValid}/>
  return (
    <div className='App'>
      
      <Header/>
      {component}
    </div>
  )
}

export default App
