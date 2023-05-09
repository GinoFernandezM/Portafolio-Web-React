import './App.css'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import SingleMovie from './components/SingleMovie'

function App() {

  return (
    <>
       <div className='App'>
         <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/movie/:id' element={<SingleMovie/>}/>
          </Routes>
         </BrowserRouter>
       </div>
    </>
  )
}

export default App
