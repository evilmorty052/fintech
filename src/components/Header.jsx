import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlusCircle,  } from 'react-icons/fa'
import Notification from './Notification'
import Userprofile from './Userprofile'

const Header = ({name,to,func,icon, username, task}) => {
  return (
    <div className='w-full bg-blk mb-4 py-2 px-4 uppercase font-poppins relative '>
          <div className='flex max-w-5xl mx-auto'>
            <div className='flex justify-between w-full'>
              <div className=' flex items-center space-x-3'>
              <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
               <span className='text-gradient uppercase text-xl font-black'>{username}</span> 
               </div>
               <div className='flex items-center gap-x-4'>
               <Notification/>
               <div>
                <Link to={'/profile'}>
                <Userprofile/>
                </Link>
              
               </div>
              
               </div>
              
                {/* <p className='text-lg text-white font-poppins font-bold'>{name? `${name}`:''}</p> */}
              </div>
              <div className='flex items-center gap-x-1 sm:gap-x-2 justify-center'>
             
              <Link to={to}>
            <span className='text-base text-white font-poppins flex items-center font-bold ' onClick={task}>{func} <i className=' ml-2 text-blue-400'>{icon}</i></span>
            </Link>
              </div>
           
                
            </div>
          </div>
    </div>
  )
}

export default Header