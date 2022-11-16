import React from 'react'

const iconBox = ({icon,text}) => {
  return (
 <div className='flex flex-col font-poppins'>
        <div className='  p-2 flex items-center justify-center'>
        <span className='text-[40px] '>{icon}</span>
        </div>
        <span className='text-gray-200  text-sm font-bold text-center'>{text}</span>
</div>
  )
}

export default iconBox