import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Alert } from 'antd'
import { FaRegEye, FaAt, FaPhone } from 'react-icons/fa'
import Input from '../components/input'


const Signup4 = () => {
  // const toast = Alert()
  const history = useNavigate()
  const { signInWithGoogle, register, isauth, setisauth , token} = useAuth()
  const [errmsg, seterrmsg] = useState('')
  const [err, seterr] = useState('')
  const [code, setcode] = useState()
  const [refcode, setrefcode] = useState(205060)
  // const [refcode, setrefcode] = useState('wk1222')
  const [match, setmatch] = useState(false)
  
  
  const handlesubmit =(e)=>{
    e.preventDefault()
    // const newcode = parseInt(code)
     
     if(code != refcode){
           seterr(true)
           seterrmsg('check your code and try again')

     }

     else if(code == refcode){
          console.log('equal')
          history('/test')
     }
  }
  // const handlesubmit =(e)=>{
  //   e.preventDefault()
  //    setisauth(true)
  // }








  return (
    <div className=' flex flex-col  min-h-screen pt-10 font-poppins bounce-in-bottom '>
         <div className='justify-center flex'>
                 <h3 className={!err? ' uppercase text-2xl font-bold': ' uppercase text-2xl font-bold text-red-600'}>
                  {code && code}
                 </h3>
         </div>

    <div className=' container  flex   mx-auto items-center'>

<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg text-center">
    <h1 class="text-2xl font-bold sm:text-3xl uppercase">Do You Have a Refferal Code?</h1>

    <p class="mt-4 text-gray-500">
      get up to 20% bonus if you sign up  with a refferal code 
    </p>
  </div>

  <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4 flex flex-col" 
       onSubmit={handlesubmit}   >

    <input
     className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm text-center"
     placeholder={'Refferal Code'}
       type={'pin'} 
       value={code}
       onChange={(e)=>{
      seterr(false)
      setcode(e.target.value)}}
     minLength={"6"}
     maxlength={"6"}
       />


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
        Enter
      </button>
<button
        onClick={()=>{history('/login')}}
        class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      >
        Skip
      </button>

     
    </div>
  </form>
</div>

    </div>
    </div>
  )
}

export default Signup4