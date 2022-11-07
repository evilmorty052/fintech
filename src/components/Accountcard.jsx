import React from 'react'
import { FaDollarSign, FaPiggyBank } from 'react-icons/fa'; 
import IconBox from './iconBox';


const Accountcard = () => {
  return (
    <div className='  '>
              <div className='   bg-blue-400 flex flex-col py-4  px-20 rounded-xl'>
                    <div className=' justify-center w-full font-poppins space-y-3'>
                            <div>
                                <p className='text-white font-poppins text-base  whitespace-nowrap text-center u font-bold'> Account Balance</p>
                                <p className='text-white font-poppins text-2xl text-center font-bold'>$40000</p>
                            </div>
                            <div className='flex space-x-4 justify-center text-center uppercase '>
                                <IconBox icon={<FaDollarSign/>} text={'Spend'}/>
                            <div className='flex flex-col items-center'>
                                    <div className=' w-12 h-12 bg-white p-2 flex items-center justify-center rounded-lg'>
                                        <span className='text-[40px]'><FaPiggyBank /></span>
                                    </div>
                                    <p className='text-white'>Save</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                    <div className=' w-12 h-12 bg-white p-2 flex items-center justify-center rounded-lg'>
                                        <span className='text-[40px]'><FaDollarSign /></span>
                                    </div>
                                    <p className='text-white'>Borrow</p>
                            </div>
                            </div>
                    </div>
            </div>
    </div>
  )
}

export default Accountcard