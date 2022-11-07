import React from 'react'

const Transaction = ({amount, time, sender}) => {
  return (
    <div>
            <div className='py-2 px-1 h-20 w-full bg-black relative'>
                    <div className='flex items-center space-x-3'>
                        <div className=' bg-white rounded-full h-16 w-16'></div>
                        <div className='flex flex-col'>
                        <span className='text-white text-xl font-medium '>{sender}</span>
                        <span className='text-white text-xl font-medium '>{time}</span>
                        </div>
                        <div className='absolute  right-10'>
                        <span className='text-white text-xl font-medium  '>{amount}</span>
                        </div>  
                    </div>
                </div>
    </div>
  )
}

export default Transaction