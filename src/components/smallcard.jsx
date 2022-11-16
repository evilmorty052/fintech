import { ExperimentOutlined } from '@ant-design/icons'
import React from 'react'
import { FaArrowUp, FaBitcoin, FaEthereum,} from 'react-icons/fa'

const smallcard = ({recipe, amount}) => {
  return (
    <div className='max-w-[350px] font-poppins '>
        <a
  class="relative block rounded-xl border border-gray-100 p-8 shadow-xl bg-white "
  href=""
>
  <span
    class="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
  >
    <ExperimentOutlined/>
  </span>

  <div class="mt-4 text-gray-500 sm:pr-8">

    <div className='flex gap-2'>
    <span className='text-4xl text-yellow-300'><FaBitcoin/></span>
    <span className='text-4xl text-purple-300'><FaEthereum/></span>
    
    </div>
   

    <h3 class="mt-4 text-xl font-bold text-gray-900 uppercase">{recipe}</h3>
    <h3 class="mt-4 text-xl font-bold text-gray-900 uppercase">{amount}</h3>

    {/* <p class="mt-2 hidden text-sm sm:block">
      You can manage phone, email and chat conversations all from a single
      mailbox.
    </p> */}
  </div>
</a>

    </div>
  )
}

export default smallcard