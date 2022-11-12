import React from 'react'
import { FaDollarSign, FaPiggyBank,  FaArrowCircleUp } from 'react-icons/fa'; 
import IconBox from './iconBox';
import { useState } from 'react';
import Modal from './modal';
import { useNavigate } from 'react-router-dom';



const Accountcard = ({earnings, show, low, text}) => {
  const history = useNavigate()
  let [isOpen, setIsOpen] = useState(false)
  let [isclicked, setisclicked] =useState(false)
  return (
    <div className='  '>
      <Modal closeModal={()=>{setisclicked(false)}}  isOpen={isclicked? true : false} />
              <div className={!low ? 'sm:w-[500px] xxs:w-[350px]    bg-blue-gradient flex flex-col py-4  px-2 rounded-xl font-poppins':'sm:w-[500px] xxs:w-[350px]   bg-red-300 flex flex-col py-4  px-2 rounded-xl font-poppins'}>
                    <div className=' justify-center w-full font-poppins space-y-3'>
                            <div>
                                <p className='text-white font-poppins text-base  whitespace-nowrap text-center u font-bold uppercase'> {text}</p>
                                {
                                 !low ? <p className='text-white font-poppins text-2xl text-center font-bold'>{`${'$ '}${earnings.toLocaleString({ style: 'currency', currency: 'USD' })}`}</p>
                                  :
                                  <p className='text-white font-poppins text-xl text-center font-bold'>INSUFFICIENT BALANCE</p> }
                            </div>
                          {show && <div className='flex space-x-10   justify-center text-center uppercase '>
                            <div onClick={()=>{history('/withdraw')}}>
                            <IconBox icon={<FaDollarSign/>} text={'Withdraw'}   />
                            </div>
                            <div onClick={()=>{setisclicked(true)}}>
                            <IconBox icon={<FaPiggyBank/>} text={'Save'}  />
                            </div>
                            <div onClick={()=>{setisclicked(true)}}>
                            <IconBox icon={<FaArrowCircleUp/>} text={'Borrow'}  />
                            </div>
                              
                              
                              
                          
                          </div>}
                    </div>
            </div>
    </div>
  )
}

export default Accountcard