import React,{useState, useEffect, useReducer } from 'react'
import {
    Routes,
    Route,
    useLocation,
    Navigate,
    Outlet
   
  } from 'react-router-dom';
import Home from './Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Payment from './pages/payment';
import Pay from './pages/pay';
import Paynow from './pages/paynow';
import Signup2 from './pages/Signup2';
import Signup3 from './pages/Signup3';
import Signup4 from './pages/Signup4';
import SetPin from './pages/SetPin';
import Withdraw from './pages/Withdraw';
import EnterPin from './pages/Enterpin'
import Log from './pages/log';
import { useAuth } from './contexts/AuthContext';
import AuthContextProvider from './contexts/AuthContext'
import Progress from './components/progress';
import Method from './pages/method';
import Redirect from './pages/Redirect';
import Test from './pages/Test';
import Profile from './pages/Profile'
import OpenAccount from './components/OpenAccount'



const Approuter = () => {


let {isauth,setisauth, token,user, log, lot, login,} = useAuth()
let stat = localStorage.getItem('token')
let status = JSON.parse(stat)
const [state, setstate] = useState(status)


useEffect(() => {
  console.log(state)

  
}, [])

  
  
  const [auth, setauth] = useState(true)

  
 
  
  return (
    

<Routes>
<Route path='/' element={<Home/>}/>
        <Route path='/progress' element={<Progress/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signup2' element={<Signup2/>}/>
        <Route path='/signup3' element={<Signup3/>}/>
        <Route path='/signup4' element={<Signup4/>}/>
        <Route path='/method' element={<Method/>}/>
        <Route path='/redirect' element={<Redirect/>}/>
        <Route path='/openaccount' element={<OpenAccount/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/profile' element={<Profile/>}/>
      
        
       
        
        {/* <Route path='/login' element={<Login/>}/> */}
        <Route path='/login' element={<Log/>}/>
        
        <Route path='/withdraw' element={<Withdraw/>}/>
        

        <Route element={state? <Outlet/> : <Login/> }>
        
              <Route path='/setpin' element={<SetPin/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/enterpin' element={<EnterPin/>}/>
              <Route path='/payment' element={<Payment/>}/>
              <Route path='/pay' element={<Pay/>}/>
              <Route path='/paynow' element={<Paynow/>}/>      
        </Route>
        
    </Routes>
  
  
  )
}

export default Approuter