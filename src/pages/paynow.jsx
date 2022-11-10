import React from 'react'
import Header from '../components/Header'
import Qrcode from '../assets/code.png'
import { useState , useEffect } from 'react'
import Clipboard from 'clipboard'

import { FaClipboard, FaBitcoin  } from 'react-icons/fa'


const paynow = () => {
  new Clipboard(".copy");
  
  
  
  const [copied, setcopied] = useState(false)
  const [copy, setCopy] = useState('bc1q2hhtwksgj32fk8j379wh82y46dc3edvy2ega0a')
  
  useEffect(() => {
    setTimeout(()=>{
      if(copied){
      setcopied(false)
      }
    }, 1000)
   
  }, [copied])
  

  // if(copied){
  //   return(
  //     <><h1>loo</h1></>
  //   )
  // }

  return (
    <div className='bg-bk  font-poppins  pt-10'>
        {/* <Header/> */}
        
    <div className='w-full flex justify-center  min-h-screen'>
          <div className='w-full flex flex-col items-center space-y-8 '>
          
            <h1 className='text-[70px] text-yellow-300'><FaBitcoin/></h1>
            <p className='text-gray-500 my-2 uppercase'>scan code to copy btc address </p>
            <div className='max-w-[200px] max-h-[200px]' >
              
             <img src={Qrcode} alt="" className='w-[100%] h-[100%]' /> 
            </div>
            <div className=' flex flex-col items-center text-center w-full cursor-pointer '>
              
            <button data-clipboard-text={copy}  id="input" className='copy   text-white  text-center max-w-[240px] 'onClick={()=>setcopied(true)} >
                    {copy}
           </button>
           <p className='text-gray-500 my-2 uppercase'>tap button or click btc address to copy </p>
            {/* <button className='text-white' onClick={getCopy}>hh</button> */}
            </div>
            <div data-clipboard-action="copy" data-clipboard-target="#input" className='flex items-center gap-2 bg-gray-100 copy  px-4 py-2 rounded-xl font-bold'
             onClick={()=>setcopied(true)}>
            <p className='text-black uppercase text-xl'>copy address</p>
            <i   className='text-2xl copy text-bk'><FaClipboard/></i>
            </div>
            <p className={ copied ?'text-2xl copy text-white uppercase mt-5' : 'hidden'}>copied!</p>
            
          </div>
    </div>
    </div>
  )
}

export default paynow