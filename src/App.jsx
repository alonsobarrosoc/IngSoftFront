import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './views/Home'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import Curso from './views/Curso'



export default function App(){
  return(
    <Router>
      <Routes>
        <Route exact path = '/' element = {<Home/>}/>
        <Route exact path = '/login' element = {<Login />} />
        <Route exact path = '/dashboard' element = {<Dashboard/>}/>
        <Route path = '/curso' element = {<Curso/>}/>
      </Routes>
    </Router>
  )
}
