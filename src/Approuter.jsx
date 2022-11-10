import React,{useState} from 'react'
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

const Approuter = () => {
  const [auth, setauth] = useState(true)
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signup2' element={<Signup2/>}/>
        <Route path='/signup3' element={<Signup3/>}/>
        
        
        {/* <Route path='/login' element={<Login/>}/> */}
        <Route path='/login' element={<Log/>}/>
        
        <Route path='/withdraw' element={<Withdraw/>}/>
        

        <Route element={auth? <Outlet/> : <Log/> }>
              <Route path='/setpin' element={<SetPin/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/enterpin' element={<EnterPin/>}/>
              <Route path='/payment' element={<Payment/>}/>
              <Route path='/pay' element={<Pay/>}/>
              <Route path='/paynow' element={<Paynow/>}/>
              <Route path='/signup4' element={<Signup4/>}/>
              
        </Route>
        
    </Routes>
  )
}

export default Approuter