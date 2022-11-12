import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Alert } from 'antd'
import { FaRegEye, FaAt, FaPhone, FaArrowRight, FaArrowDown, FaClipboard } from 'react-icons/fa'
import Input from '../components/input'
import Clipboard from 'clipboard'
import { client } from '../lib/client'
import { useQuery } from '@tanstack/react-query'

const SetPin = () => {
  
    new Clipboard(".copy");
  const [copied, setcopied] = useState(false)
  const history = useNavigate()
  const { signInWithGoogle, register } = useAuth()
  const [pin, setPin] = useState()
  const [copy, setCopy] = useState(pin)
  const [err, seterr] = useState(false)
  const [errmsg, seterrmsg] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const newpin =   parseInt(pin)
  
 let email = localStorage.getItem('email')
 const emailID = JSON.parse(email)

 let query = `*[email == "${emailID}"]{pin}`
  const { data: user } = useQuery(['pin'], () => client.fetch(query))
  ;
 let pinref = user
  

  

  useEffect(() => {
    setTimeout(()=>{
      if(copied){
      setcopied(false)
      }
    }, 1000)
   
  }, [copied])
  // useEffect(() => {
  //   setTimeout(()=>{
  //     if(!pinref){
  //     history('/')
  //     }
  //   }, 10000)
   
  // }, [])

  const handlesubmit = (e)=>{
    e.preventDefault()
    
 
    if(pinref[0].pin !== newpin){
      seterr(true)
      seterrmsg('Incorrect Pin')
    }

    else{
      history('/dashboard')
    }
  pinref && console.log(pinref[0].pin)
  pinref && console.log((newpin))
  }

  if(!user){
    return(
<>
    
    ...loading
    </>
    )
    
  }

  return (
    <div className=' container flex  min-h-screen mx-auto font-poppins '>

<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

    
    
  <div class="mx-auto max-w-lg text-center flex flex-col">
        <h1 class="text-2xl font-bold sm:text-3xl uppercase">Verify your Pin</h1>

        <p class="mt-4 text-gray-500 uppercase">
        We Need your Pin To Verify Its really You
        </p>
        <div className='self-center flex flex-col gap-4'>
            {/* {pin && <p className='self-center text-xl'>click pin to copy</p>}
            {pin && <i className='self-center'><FaArrowDown/></i>} */}
            <p className={ copied ?'text-2xl copy text-black uppercase mt-5' : 'hidden'}>copied!</p>
        </div>
        
  </div>

  <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4" 
     onSubmit={handlesubmit}     >

    <div
     data-clipboard-action="copy" data-clipboard-target="#input" 
     className='w-full justify-center items-center flex copy  -300 rounded-3xl'
    onClick={()=>setcopied(true)}>
   
        <div className={pin ?'flex max-w-[100px] gap-4 items-center justify-center  py-2 px-5' : ''}>
            <h3 className='text-4xl tracking-widest' id='input'>{pin}</h3>
            {/* {pin &&<i className='text-2xl text-yellow-300'><FaClipboard/></i>} */}
        </div>
    </div>
            <div className=' my-4 py-4  flex flex-col items-center '>
                   <input type="password" className='rounded-full text-center lett tracking-widest' maxLength={4} value={pin} onChange={(e)=>{setPin(e.target.value)}} /> 
                  <div className=' my-2'>
                       {err && <Alert message={errmsg} type={'error'}/>}
                  </div> 
            </div>

    {/* <Input placeholder={'Pin'}  type={'password'} value={email} onChange={(e)=>setEmail(e.target.value)} /> */}
    {/* <Input placeholder={'Confirm Password'} icon={<FaRegEye/>} type={'password'}/> */}

  

    

    <div class="flex items-center justify-between mt-4">
      {/* <p class="text-sm text-gray-500">
        No account?
        <a class="underline" href="">Sign up</a>
      </p> */}

<button
        type="submit"
        class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      >
        Continue
      </button>

     
    </div>
  </form>
</div>

    </div>
  )
}

export default SetPin