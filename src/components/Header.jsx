import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlusCircle } from 'react-icons/fa'

const Header = ({name,to,func,icon, username}) => {
  return (
    <div className='w-full bg-plat mb-4 py-2 px-4 uppercase font-poppins'>
          <div className='flex'>
            <div className='flex justify-between items-center w-full'>
              <div className=' flex items-center space-x-3'>
              <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
               <span className='text-gradient uppercase text-xl font-black'>{username}</span> 
               </div>
                <p className='text-lg text-primary font-poppins font-bold'>{name? `hi ${name}`:''}</p>
              </div>
            <Link to={to}>
            <p className='text-base text-primary font-poppins flex items-center '>{func} <i className=' ml-2 text-blue-400'>{icon}</i></p>
            </Link>
                
            </div>
          </div>
    </div>
  )
}

export default Header