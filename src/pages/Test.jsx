import React, { Children } from 'react'
import { motion, animate} from 'framer-motion'
import Header from '../components/Header'

const Test = ({children}) => {
  return (
    <div className='min-h-screen max-w-7xl pb-5'>
        <motion.div className='cw-full items-center flex flex-col mx-auto '
        initial={{scale: 0}}
        animate={{scale: 1}}
           >
              {children}
        </motion.div>
    </div>
  )
}

export default Test