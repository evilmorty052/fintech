import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Alert } from 'antd'
import { FaRegEye, FaAt, FaPhone } from 'react-icons/fa'
import Input from '../components/input'
import {client} from '../lib/client'

const Signup3 = () => {
  // const toast = Alert()
  const emailid = localStorage.getItem('email')
  let firstname = localStorage.getItem('firstname')
  let lastname = localStorage.getItem('lastname')
  let phone = localStorage.getItem('phone')
  
  
  const history = useNavigate()
  const { signInWithGoogle, register } = useAuth()
  const [email, setEmail] = useState(JSON.parse(emailid))
  const [password, setPassword] = useState('')
  const [passwordref, setPasswordref] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [err, seterr] = useState(false)
  const [errmsg, seterrmsg] = useState('')
  
 

  const handlesubmit = async (e)=>{
    e.preventDefault()
    if(!password || !passwordref ){
      
      seterr(true)
      seterrmsg('you must set a password to continue')
      return
    }
    if(password !== passwordref){
      
      seterr(true)
      seterrmsg('passwords must match')
      return
    }
    else{
      localStorage.setItem('password', JSON.stringify(password))
   await  register(email,password)
      .catch(error=>{
        seterr(true)
        seterrmsg(error.message)
        return
      })
      .then(res =>{res && history('/setpin')})
      
    }
  }
  return (
    <div className=' container flex  min-h-screen mx-auto font-poppins bounce-in-bottom'>

<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg text-center">
    <h1 class="text-2xl font-bold sm:text-3xl uppercase">Pick a Password</h1>

    <p class="mt-4 text-gray-500">
  pick  a password to associate with your account
    </p>
  </div>

  <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4" 
    
         onSubmit={handlesubmit} >
    <Input placeholder={'Password'}  type={'password'} value={password} onChange={(e)=>setPassword(e.target.value)} required='required'/>
    {err && <Alert message={errmsg} type={'error'}/>}
    <Input placeholder={'Confirm Password'}  type={'password'} value={passwordref} onChange={(e)=>setPasswordref(e.target.value)} required='required'/>
    {err && <Alert message={errmsg} type={'error'}/>}

  

    

    <div class="flex items-center justify-between mt-4">
      {/* <p class="text-sm text-gray-500">
        No account?
        <a class="underline" href="">Sign up</a>
      </p> */}

<button
        type="submit"
        class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      >
        Next
      </button>
<button
        onClick={()=>{history(-1)}}
        class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      >
        Back
</button>

     
    </div>
  </form>
</div>

    </div>
  )
}

export default Signup3