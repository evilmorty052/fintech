import React from 'react'
import { useState } from 'react'
import Modal from './modal'
import { useNavigate } from 'react-router-dom'

import { FaHome, FaChartPie , FaPaperPlane, FaCreditCard } from 'react-icons/fa'

const FooterMenu = () => {
   const history = useNavigate()
   let [isOpen, setIsOpen] = useState(false)
   let [isclicked, setisclicked] =useState(false)
  return (
    <div>
      <Modal closeModal={()=>{setisclicked(false)}}  isOpen={isclicked? true : false} />
        <div className='flex bottom-0 left-0 absolute w-full justify-between bg-plat px-2 '>
              <div onClick={()=>{history('/')}} className=''>
                 <p className='text-blk py-4 px-2 uppercase font-medium flex flex-col items-center justify-center '> <i className='font-2xl'><FaHome size={20}/></i>home</p>
              </div>
              <div onClick={()=>{setisclicked(true)}}>
                 <p className='text-blk py-4 px-2 uppercase font-medium flex flex-col items-center justify-center '><i><FaChartPie size={20}/></i>budget</p>
              </div>
              <div onClick={()=>{setisclicked(true)}}>
                 <p className='text-blk py-4 px-2 uppercase font-medium flex flex-col items-center justify-center font-poppins '><i><FaPaperPlane size={20}/></i>payments</p>
              </div>
              <div onClick={()=>{setisclicked(true)}}>
                 <p className='text-blk py-4 px-2 uppercase font-medium flex flex-col items-center justify-center '><i><FaCreditCard size={20}/></i>card</p>
              </div>
        </div>
    </div>
  )
}

export default FooterMenu