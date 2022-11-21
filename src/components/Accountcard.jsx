import React from 'react'
import { FaDollarSign, FaPiggyBank,  FaArrowCircleUp } from 'react-icons/fa'; 
import IconBox from './iconBox';
import { useState } from 'react';
import Modal from './modal';
import { useNavigate } from 'react-router-dom';
import { BankOutlined, DollarOutlined, ExperimentOutlined, PlusCircleOutlined } from '@ant-design/icons';



const Accountcard = ({earnings, show, low, text, type}) => {
  const history = useNavigate()
  let [isOpen, setIsOpen] = useState(false)
  let [isclicked, setisclicked] =useState(false)
  return (
    <div className=''>
      <Modal closeModal={()=>{setisclicked(false)}}  isOpen={isclicked? true : false} />
              <div className={!low ? ' shadow-lg sm:w-[600px] lg:w-[500px]     bg-blue-gradient flex flex-col py-4  px-2 rounded-xl font-poppins':'sm:min-w-[500px] xxs:w-[350px]   bg-red-300 flex flex-col py-4  px-2 rounded-xl font-poppins'}>
                    <div className=' justify-center w-full font-poppins space-y-3'>
                            <div>
                                <p className='text-white font-poppins text-base sm:text-xl  whitespace-nowrap text-center u font-bold uppercase'> {text}</p>
                                {
                                 !low ? <p className='text-white font-poppins text-2xl sm:text-4xl text-center font-bold'>{`${'$ '}${earnings.toLocaleString({ style: 'currency', currency: 'USD' })}`}</p>
                                  :
                                  <p className='text-white font-poppins text-xl text-center font-bold'>INSUFFICIENT BALANCE</p> }
                            </div>
                          {show && <div className='flex gap-5   justify-center text-center uppercase '>
                            <div onClick={()=>{
                              localStorage.setItem('account',(type))
                              history('/withdraw')}}>
                            <IconBox icon={<DollarOutlined/>} text={'Withdraw'}   />
                            </div>
                            <div onClick={()=>{setisclicked(true)}}>
                            <IconBox icon={<BankOutlined/>} text={'Save'}  />
                            </div>
                            <div onClick={()=>{setisclicked(true)}}>
                            <IconBox icon={<PlusCircleOutlined/>} text={'Borrow'}  />
                            </div>
                            <div onClick={()=>{setisclicked(true)}}>
                            <IconBox icon={<ExperimentOutlined/>} text={'Recipe'}  />
                            </div>
                              
                              
                              
                          
                          </div>}
                    </div>
            </div>
    </div>
  )
}

export default Accountcard