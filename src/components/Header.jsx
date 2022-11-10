import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlusCircle } from 'react-icons/fa'

const Header = ({name,to,func,icon}) => {
  return (
    <div className='w-full bg-black mb-4 py-2 px-4 uppercase'>
          <div className='flex'>
            <div className='flex justify-between items-center w-full'>
              <div className=' flex items-center space-x-3'>
              <div className='w-10 h-10 bg-white rounded-full'> </div>
                <p className='text-lg text-white font-poppins'>{name? `hi ${name}`:''}</p>
              </div>
            <Link to={to}>
            <p className='text-base text-white font-poppins flex items-center'>{func} <i className=' ml-2 text-blue-400'>{icon}</i></p>
            </Link>
                
            </div>
          </div>
    </div>
  )
}

export default Header