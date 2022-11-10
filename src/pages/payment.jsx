import React from 'react'
import Header from '../components/Header'
import GetStarted from '../components/GetStarted'
import Button from '../components/Button'
import { FaArrowCircleLeft, FaSadTear } from 'react-icons/fa'

const payment = () => {
  return (
    <div className='flex flex-col  min-h-screen    bg-gray-100 items-center font-poppins fixed  '>
        <Header func={'back'}/>
        <div className=' my-10'>
        <i className='text-[100px] text-red-300'><FaSadTear/></i>
        </div>
        <div className='w-full flex flex-col items-center justify-center px-2 space-y-5  '>
        <h3 className='uppercase text-center   text-2xl'>
                activate your account
              </h3>
           <div className=' '>
              
            <p className='text-center  uppercase font-medium text-[20px]'>
             it seems your account is inactive to use this feature start the activation process by clicking the button below
            </p>
           </div>
            <div>
               <Button to={'/pay'}/>
            </div>
        </div>

    </div>
  )
}

export default payment