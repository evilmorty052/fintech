import React from 'react'
import { FaBan } from 'react-icons/fa'
import Modal from './modal'
import { useState } from 'react'

const inactive = () => {
    let [isOpen, setIsOpen] = useState(false)
    let [isclicked, setisclicked] =useState(false)
  return (
    <div className='container mx-auto '>
        <Modal closeModal={()=>{setisclicked(false)}}  isOpen={isclicked? true : false} title={'Account is Inactive'} message={'click button below to start activation process'} />
        <div className='  bg-red-200 flex justify-center items-center gap-2  px-3 py-3 ' onClick={()=>{setisclicked(true)}}>
            <p className=' uppercase font-bold font-poppins text-2xl'>
              Account inactve
            </p>
            <i className='text-xl text-red-500'><FaBan/></i>
            {/* <button className='bg-blue-400 text-white px-8 py-2 rounded-xl uppercase ' onClick={()=>{setisclicked(true)}}>test me</button> */}
            </div>
    </div>
  )
}

export default inactive