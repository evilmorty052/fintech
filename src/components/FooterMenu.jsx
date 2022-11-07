import React from 'react'
import { FaHome, FaChartPie , FaPaperPlane, FaCreditCard } from 'react-icons/fa'

const FooterMenu = () => {
  return (
    <div>
        <div className='flex bottom-0 left-0 absolute w-full justify-between bg-black px-2 '>
              <div className=''>
                 <p className='text-white py-4 px-2 uppercase font-medium flex flex-col items-center justify-center '> <i className='font-2xl'><FaHome size={20}/></i>home</p>
              </div>
              <div>
                 <p className='text-white py-4 px-2 uppercase font-medium flex flex-col items-center justify-center '><i><FaChartPie size={20}/></i>budget</p>
              </div>
              <div>
                 <p className='text-white py-4 px-2 uppercase font-medium flex flex-col items-center justify-center font-poppins '><i><FaPaperPlane size={20}/></i>payments</p>
              </div>
              <div>
                 <p className='text-white py-4 px-2 uppercase font-medium flex flex-col items-center justify-center '><i><FaCreditCard size={20}/></i>card</p>
              </div>
        </div>
    </div>
  )
}

export default FooterMenu