import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Alert } from 'antd'


const pay = ({name , amount ,loader, text , act, routing,}) => {
const [Loading, setLoading] = useState(false)
const [firstname, setfirstname] = useState('')
const [lastname, setlastname] = useState('')
const [zip, setzip] = useState('')
const [err, seterr] = useState(false)
const [errmsg, seterrmsg] = useState(false)

    const navigate = useNavigate()
    
    const handleSubmit = () =>{
        if(!firstname || !lastname || !zip){
          seterr(true)
          seterrmsg('please fill out all fields')
          return
        }
        else{
          setLoading(true)
          setTimeout(()=>{
            
            navigate('/paynow')
        },4000)
        }
       
    }

    if(Loading){
        return(
            <>
            <div className='flex min-h-screen bg-gray-400 justify-center items-center'>
                <div>
                     <h3 className=' uppercase text-4xl font-bold'>loading...</h3>
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
          <form class="grid grid-cols-6 gap-4"
          onSubmit={handleSubmit}>
            
            <div class="col-span-3">
              <label class="mb-1 block text-sm text-gray-600" for="first_name">
                First Name
              </label>

              <input
                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                type="text"
                id="first_name"
                required='true'
                value={firstname}
                onChange={(e)=>setfirstname(e.target.value)}
              />
              <div className='mt-3 '>
              {err && <Alert message={errmsg} type={'error'}/>}
              </div>
            </div>
            

            <div class="col-span-3">
              <label class="mb-1 block text-sm text-gray-600" for="last_name">
                Last Name
              </label>

              <input
                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                type="text"
                id="last_name"
                value={lastname}
                onChange={(e)=>setlastname(e.target.value)}
              />
              <div className='my-3'>
              {err && <Alert message={errmsg} type={'error'}/>}
              </div>
               
            </div>

            <div class="col-span-6">
              <label class="mb-1 block text-sm text-gray-600" for="email">
                {!act ? "Refferal Code" : act }
              </label>

              <input
                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                type="email"
                id="email"
               
              />
             
            </div>
{/* 
            <div class="col-span-6">
              <label class="mb-1 block text-sm text-gray-600" for="phone">
              {!routing ? "Phone" : routing }
              </label>

              <input
                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                type="tel"
                id="phone"
                value={firstname}
                onChange={(e)=>setfirstname(e.target.value)}
              />
            </div> */}


            <fieldset class="col-span-6">
              <legend class="mb-1 block text-sm text-gray-600">
                Billing Address
              </legend>

              <div class="-space-y-px rounded-lg bg-white shadow-sm">
                <div>
                  <label class="sr-only" for="country">Country</label>

                  <select
                    class="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
                    id="country"
                    name="country"
                    autocomplete="country-name"
                  >
                    <option>USA</option>
                    <option>England</option>
                    <option>Wales</option>
                    <option>Scotland</option>
                    <option>France</option>
                    <option>Belgium</option>
                    <option>Japan</option>
                  </select>
                </div>

                <div>
                  <label class="sr-only" for="postal-code">
                    ZIP/Post Code
                  </label>

                  <input
                    class="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autocomplete="postal-code"
                    placeholder="ZIP/Post Code"
                    value={zip}
                    onChange={(e)=>setzip(e.target.value)}
                  />
              <div className='my-3'>
              {err && <Alert message={errmsg} type={'error'}/>}
              </div>
                  
                  
                </div>
              </div>
            </fieldset>

            <div class="col-span-6">
              <button
                class="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                type="submit"
                onClick={(e)=>{
                    e.preventDefault()
                    handleSubmit()
                }}
              >
                Pay Now
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

export default pay