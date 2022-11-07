import React from 'react'
import {
    Routes,
    Route,
    useLocation,
    Navigate,
   
  } from 'react-router-dom';
import Home from './Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const Approuter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        
    </Routes>
  )
}

export default Approuter