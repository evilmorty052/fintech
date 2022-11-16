import React from 'react'
import { CheckCircleOutlined, CiCircleOutlined, AlertFilled } from '@ant-design/icons'
import { FaArrowUp, FaBell } from 'react-icons/fa'

const Transaction = ({amount, time, sender, stat}) => {
  return (
    <div>
            <div className='py-2 px-1 h-20 w-full  relative  font-poppins'>
                    <div className='grid grid-cols-3'>
                        <div className='flex justify-start items-center pl-2'>
                            <span className='text-black text-sm font-medium uppercase '>{sender}</span>
                        </div>
                        <div className='flex justify-end items-center'>
                            <span className='text-black text-base font-medium  '>{amount &&`${'$ '}${amount.toLocaleString({ style: 'currency', currency: 'USD' })}`}</span>
                        </div>
                        <div className='flex justify-center items-center gap-x-2'>
                            <span className='text-black text-base font-medium '>{<FaArrowUp/>}</span>
                            {/* <span className='text-black text-base font-medium '>{<FaBell/>}</span> */}
                        </div>  
                    </div>
                </div>
    </div>
  )


  // return (
  //   <div className=' w-full flex justify-center border-red-400 font-poppins'>
  //     <div className='container mx-auto flex justify-center w-full '>

  //     <table className='w-full  '>
  //     <th className='text-left uppercase underline'> sender </th><th className='text-left uppercase underline'> amount </th><th className='text-left uppercase underline' > status  </th>
  //             <tr className=' '>
  //               <td>
  //                 {sender}
  //               </td>
  //               <td>
  //               {amount &&`${'$ '}${amount.toLocaleString({ style: 'currency', currency: 'USD' })}`}
  //               </td>
  //               <td>
  //                 {stat?
  //                 <>
  //                 <div className='space-x-2 flex items-center'>
  //                 <span>Completed</span>
  //                   <div className='w-[5] h-[5] bg-green-200 px-2 py-2 rounded-full'></div> 
  //                 </div>
                  
  //                 </>
                 
  //                 : <span>s</span>}
  //               </td>
  //             </tr>
  //           </table>
  //     </div>
          
  //   </div>
  // )
}

export default Transaction