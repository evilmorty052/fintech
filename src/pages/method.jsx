import React, {useState} from 'react'
import { FaBitcoin, FaPaypal, FaCreditCard   } from 'react-icons/fa'
import { BankOutlined } from '@ant-design/icons'
import Modal from '../components/modal'
import { useNavigate } from 'react-router-dom'

const method = ({setisclicked}) => {



  return (
    <div>
        
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 font-poppins bounce-in-bottom">
  <div class="relative container mx-auto bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mx-auto max-w-md">
     <span className='font-black text-blk text-3xl'>MEDIK</span><span className='text-blue-300 font-black text-3xl'>BANK</span>
      {/* <img src="/img/logo.svg" class="h-6" alt="Tailwind Play" /> */}
      <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p className='font-bold'>CHOOSE A PAYMENT METHOD:</p>
          <ul class="space-y-4 font-bold uppercase">
            <li class="flex items-center" onClick={()=>setisclicked(true)}>
            <span className='text-blue-500'><FaCreditCard/></span>
              
              <p class="ml-4">
                Debit/Credit Card
                
              </p>
            </li>
            
            <li class="flex items-center" onClick={()=>{history('/pay')}}>
             <span className='text-yellow-300'><FaBitcoin/></span>
              <p class="ml-4">
               BITCOIN
              
              </p>
            </li>
            <li class="flex items-center"
            onClick={()=>setisclicked(true)}>
            <span className='text-blue-500'><FaPaypal/></span>
             
              <p class="ml-4">Paypal</p>
            </li>
          </ul>
          <p className='uppercase font-medium'>It seems some payment methods are not available to you because your account is inactive</p>
        </div>
      
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default method