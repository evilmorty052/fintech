import React from 'react'
import { motion, animate } from 'framer-motion'


const Loader = () => {
 
const loadervariant = {
   animationone:{
     x:[-20, 20],
     y:[0, -100],
     transition:{
        x:{
            yoyo:Infinity,
            duration: 0.5
            
        },
        y:{
            yoyo: Infinity,
            duration: 0.25,
            ease: 'easeOut'
        }
     }
   } 
}





  return (
    <div className='min-h-screen bg-black-gradient-2 flex justify-center items-center'>
        <motion.div className='flex gap-x-2 '>
        <motion.div className=' w-20 h-20 bg-white rounded-full flex justify-center items-center '
        variants={loadervariant}
        animate='animationone'
        transition='transition'>
         <span className='text-[60px] font-poppins font-black text-green-300'>M</span>
       </motion.div>
     
        </motion.div>
       
       
    </div>
  )
}

export default Loader