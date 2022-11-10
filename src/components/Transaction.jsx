import React from 'react'

const Transaction = ({amount, time, sender}) => {
  return (
    <div>
            <div className='py-2 px-1 h-20 w-full  relative  font-poppins'>
                    <div className='flex items-center space-x-3'>
                        <div className='flex flex-col'>
                        
                        <span className='text-black text-base font-bold uppercase '>{sender}</span>
                        <span className='text-black text-sm font-medium '>{time}</span>
                        </div>
                        <div className='absolute  right-10 flex flex-col'>
                       
                        <span className='text-black text-xl font-medium  '>{amount &&`${'$ '}${amount.toLocaleString({ style: 'currency', currency: 'USD' })}`}</span>
                        </div>  
                    </div>
                </div>
    </div>
  )
}

export default Transaction