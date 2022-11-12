import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { Alert, Spin } from 'antd';
// import {LoadingOutlined} from 'antd'
import ProgressBar from '../components/progressbar'
import Progress from '../components/progress'


const pay2 = ({name , handleSubmit, amount ,loader, text , act, routing,}) => {
const [Loading, setLoading] = useState(false)
const [accountnum, setaccountnum] = useState(0)
const [routingnum, setroutingnum] = useState(0)
const [bank, setbank] = useState('')
const [fullname, setfullname] = useState('')
const [go, setgo] = useState(false)
const [err, seterr] = useState(false)
const [errmsg, seterrmsg] = useState('')

    const navigate = useNavigate()

    // useEffect(() => {
    //   if(err){
    //     setLoading(false)
    //   }
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
    
    const Submit = () =>{
        setLoading(true)
        if(accountnum == 0 || routingnum == 0 || fullname == ''){
          seterr(true)
          seterrmsg('please fill out all fields')
          setLoading(false)
        }

        else{setgo(true)}
        // setTimeout(()=>{
            
        //     navigate('/paynow')
        // },4000)
    }
    if(go){
        return(
            <>
           <Progress amount={amount}/>
            </>
        )
    }

  return (
    <div className=' bg-gray-100 flex flex-col'>
        {/* <Header/> */}
        <div className=' w-full'>
 
<section>
  

  <div class="relative mx-auto max-w-screen-2xl font-poppins">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="bg-gray-50 py-4 md:py-24">
        <div class="mx-auto max-w-lg px-4 lg:px-8">
          <div class="flex flex-col items-left">
            <ul>
              <li>
              <label class="mt-1 text-sm text-gray-500 font-bold uppercase">charges:</label>
            <p class="text-xl font-medium tracking-tight">$ 0.00</p>
              </li>
              <li>
              <label class="mt-1 text-sm text-gray-500 font-bold uppercase">total:</label>
            <p class="text-xl font-medium tracking-tight">{!loader? '$ 2000'  : `${'$ '}${amount}`  }</p>
              </li>
            </ul>
        
          
            <h2 class="ml-4 font-medium">{name}</h2>
          </div>

          <div class="">
           
            
            <p class="mt-1 text-sm text-gray-500 font-bold">{!loader? 'Activation Fee' : text }</p>
          </div>
        </div>
      </div>

      <div class="bg-white py-12 md:py-24">
        <div class="mx-auto max-w-lg px-4 lg:px-8">
          <form class="grid grid-cols-6 gap-4"
          onSubmit={Submit}>
            

            <div class="col-span-6">
              <label class="mb-1 block text-sm text-gray-600" for="email">
                {!act ? "Name :" : act }
              </label>

              <input
                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                type="text"
                id="ac"
                required
                value={fullname}
                onChange={(e)=>{setfullname(e.target.value)}}

              />
               <div className='my-3'>
              {err && <Alert message={errmsg} type={'error'}/>}
              </div>
            </div>
            <div class="col-span-6">
              <label class="mb-1 block text-sm text-gray-600" for="email">
                {!act ? "Account Number :" : act }
              </label>

              <input
                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                type="number"
                id="account"
                required
                value={accountnum}
                onChange={(e)=>{setaccountnum(e.target.value)}}
              />
              <div className='my-3'>
              {err && <Alert message={errmsg} type={'error'}/>}
              </div>
              
            </div>

            <div class="col-span-6">
              <label class="mb-1 block text-sm text-gray-600" for="email">
                {!act ? "Routing :" : act }
              </label>

              <input
                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                type="number"
                id="email"
                required
                value={routingnum}
                onChange={(e)=>{setroutingnum(e.target.value)}}
              />
              <div className='my-3'>
              {err && <Alert message={errmsg} type={'error'}/>}
              </div>
            </div>

            <div class="col-span-6">
              <label class="mb-1 block text-sm text-gray-600" for="phone">
              {!routing ? "Bank Name:" : routing }
              </label>

              <input
                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                type="text"
                id="phone"
                required
                value={bank}
                onChange={(e)=>{setbank(e.target.value)}}
              />
              <div className='my-3'>
              {err && <Alert message={errmsg} type={'error'}/>}
              </div>
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