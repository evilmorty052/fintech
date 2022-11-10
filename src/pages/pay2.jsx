import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { Alert, Spin } from 'antd';
// import {LoadingOutlined} from 'antd'
import ProgressBar from '../components/progressbar'


const pay2 = ({name , handleSubmit, amount ,loader, text , act, routing,}) => {
const [Loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    const Submit = () =>{
        setLoading(true)
        // setTimeout(()=>{
            
        //     navigate('/paynow')
        // },4000)
    }
    if(Loading){
        return(
            <>
            <div className='flex min-h-screen bg-gray-400 justify-center items-center'>
                <div className=' container flex flex-col items-center max-w-3xl space-y-3 '>
                     <h3 className='text-lg sm:text-2xl uppercase font-bold text-center'>Withdrawal in progress</h3>
                     <ProgressBar percent={'40'}  type={'circle'}/>
                </div>
            </div>
            </>
        )
    }

  return (
    <div className=' bg-gray-100 min-h-screen flex flex-col'>
        {/* <Header/> */}
        <div className=' w-full'>
 
<section>
  <h1 class="sr-only">Checkout</h1>

  <div class="relative mx-auto max-w-screen-2xl">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="bg-gray-50 py-12 md:py-24">
        <div class="mx-auto max-w-lg px-4 lg:px-8">
          <div class="flex items-center">
            <span class="h-10 w-10 rounded-full bg-blue-900"></span>
            <h2 class="ml-4 font-medium">{name}</h2>
          </div>

          <div class="mt-8">
            <p class="text-3xl font-medium tracking-tight">{!loader? '$ 2000'  : `${'$ '}${amount}`  }</p>
            <p class="mt-1 text-sm text-gray-500 font-bold">{!loader? 'Activation Fee' : text }</p>
          </div>
        </div>
      </div>

      <div class="bg-white py-12 md:py-24">
        <div class="mx-auto max-w-lg px-4 lg:px-8">
          <form class="grid grid-cols-6 gap-4">

            <div class="col-span-6">
              <label class="mb-1 block text-sm text-gray-600" for="email">
                {!act ? "Name :" : act }
              </label>

              <input
                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                type="text"
                id="email"
              />
            </div>
            <div class="col-span-6">
              <label class="mb-1 block text-sm text-gray-600" for="email">
                {!act ? "Account Number :" : act }
              </label>

              <input
                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                type="number"
                id="email"
              />
            </div>

            <div class="col-span-6">
              <label class="mb-1 block text-sm text-gray-600" for="email">
                {!act ? "Routing :" : act }
              </label>

              <input
                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                type="number"
                id="email"
              />
            </div>

            <div class="col-span-6">
              <label class="mb-1 block text-sm text-gray-600" for="phone">
              {!routing ? "Bank Name:" : routing }
              </label>

              <input
                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                type="text"
                id="phone"
              />
            </div>


            <div class="col-span-6">
              <button
                class="block justify-center w-full rounded-lg bg-black p-2.5 text-sm text-white"
                type="submit"
                onClick={(e)=>{
                    e.preventDefault()
                    Submit()
                }}
              >
              {Loading ? <i><Spin spinning='true' /></i> : 'Withdraw' }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

            
        </div>
    </div>
  )
}

export default pay2