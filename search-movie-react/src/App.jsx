import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormSearch from './components/FormSearch'
import Movies from './components/Movies'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import SingleMovie from './components/SingleMovie'

// http://www.omdbapi.com/?apikey=cf9da917&s=troya
// http://www.omdbapi.com/?apikey=cf9da917&i=tt11796304

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
