import React,{useEffect} from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import Test from './Test'
import Dashboard from '../Home'

const Redirect = () => {
const nav = useNavigate()

  useEffect(() => {
    setTimeout(() => {

      nav('/login')
    }, 8000);
  
    
  }, [])
  



  return (
   <>
   <Test>
 <div className='container mx-auto min-h-screen flex flex-col justify-center px-4 py-10 space-y-10'>
     <div className='w-full text-center'>
           <h1 className='uppercase text-4xl'>welcome</h1>
           <p className='uppercase text-xl text-center tracking-widest'>thanks for signing up!</p>
      </div>
      <div className='text-center'>
          <p>you will be redirected to the login page shortly please sign in with your newly created credentials to start enjoying our products and services </p>
      </div>
  </div>
  
   </Test>
     
   </>
  )
}

export default Redirect