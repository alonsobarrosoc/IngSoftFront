import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './view/Home'

function App() {

  return (
    <>
      <h1>Hola</h1>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>


      </Router>
    </>
  )
}


export default App
