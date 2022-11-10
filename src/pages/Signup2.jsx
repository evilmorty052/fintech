import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Alert } from 'antd'
import { FaRegEye, FaAt, FaPhone } from 'react-icons/fa'
import Input from '../components/input'

const Signup2 = () => {
  // const toast = Alert()
  const history = useNavigate()
  const { signInWithGoogle, register } = useAuth()
  const [email, setEmail] = useState('')
  const [phone, setphone] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [err, seterr] = useState(false)

  const handlesubmit =(e)=>{
    e.preventDefault()
    if(!email ){
      
      seterr(true)

    }
    if(!phone){
      
      seterr(true)

    }
    else{
      localStorage.setItem('email', JSON.stringify(email))
      localStorage.setItem('phone', JSON.stringify(phone))
      history('/signup3')
    }
  }
  return (
    <div className=' container flex  min-h-screen mx-auto'>

<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg text-center">
    <h1 class="text-2xl font-bold sm:text-3xl">Keep going!</h1>

    <p class="mt-4 text-gray-500">
      just some more basic info to set up your account, we will never share your info with a 3rd party provider
    </p>
  </div>

  <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4" 
          onSubmit={handlesubmit}>
    <Input placeholder={'Email'} icon={<FaAt/>} type={'email'} value={email} onChange={(e)=>setEmail(e.target.value)} required={'required'} />
    {err && <Alert message={'Firstname is required'} type={'error'}/>}
    {/* <label>Us phone number only:</label> */}
    <Input placeholder={'Phone'} icon={<FaPhone/>} type={'tel'} required={'required'} pattern={'[0-9]{10}'} value={phone} onChange={(e)=>setphone(e.target.value)}/>
    {err && <Alert message={'Lastname is required'} type={'error'}/>}

  

    

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

export default Signup2