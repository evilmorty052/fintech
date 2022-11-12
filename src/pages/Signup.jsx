import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Alert } from 'antd'
import { FaRegEye, FaAt } from 'react-icons/fa'
import Input from '../components/input'



const Signup = () => {
  // const toast = Alert()
  const history = useNavigate()
  const { signInWithGoogle, register } = useAuth()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [err, seterr] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handlesubmit =(e)=>{
    e.preventDefault()
    if(!firstName ){
      
      seterr(true)

    }
    if(!lastName){
      
      seterr(true)

    }
    else{
      localStorage.setItem('firstname', JSON.stringify(firstName))
      localStorage.setItem('lastname', JSON.stringify(lastName))
      history('/signup2')
    }
  }

  return (
    <>
  
    <div className=' container flex  min-h-screen mx-auto pt-10 bounce-in-bottom  '>

<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg text-center">
    <h1 class="text-2xl font-bold sm:text-3xl uppercase ">{`${'Hi '} ${firstName}`}</h1>

    <p class="mt-4 text-gray-500">
     Nice to meet you! ,we just need Some Basic Info to Know You better.
    </p>
  </div>

  <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4" 
     onSubmit={handlesubmit}   >
    <Input placeholder={'First Name'}  type={'text'} value={firstName} onChange={(e)=>setFirstName(e.target.value)} required={'required'}  title={'Firstname must be longer than 2 letters'} />
    {err && <Alert message={'Firstname is required'} type={'error'}/>}
    <Input placeholder={'Last Name'}  type={'text'} value={lastName} onChange={(e)=>setLastName(e.target.value)} required={'required'}  title={'lastname must be longer than 2 letters'}/>
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
    </>
  )
}

export default Signup