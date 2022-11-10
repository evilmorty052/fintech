import React from 'react'

const iconBox = ({icon,text}) => {
  return (
    <div className='flex flex-col'>
    <div className='flex flex-col items-center'>
        <div className=' w-12 h-12 bg-white p-2 flex items-center justify-center rounded-lg'>
        <span className='text-[40px]'>{icon}</span>
        </div>
        <p className='text-white text-center text-[12px] font-bold'>{text}</p>
    </div>
</div>
  )
}

export default iconBox