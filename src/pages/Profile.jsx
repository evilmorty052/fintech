import React from 'react'
import Header from '../components/Header'
import { Avatar } from 'antd'
import { client } from '../lib/client'
import { useQuery } from '@tanstack/react-query'
import Loader from '../components/Loader'
import { UserOutlined } from '@ant-design/icons'
import FooterMenu from '../components/FooterMenu'
import CTA2 from '../components/CTA 2'

const Profile = () => {  let email = localStorage.getItem('email')
const emailID = JSON.parse(email)
let query = `*[email == "${emailID}"]`
const { data: user } = useQuery(['userlist'], () => client.fetch(query))

if(!user){
  return(
    <>
    <Loader/>
    </>
  )
}

  return (
    <>
    
    <div className='flex flex-col font-poppins relative pb-5'>
      <Header func={'back'}/>
      <div className=' container mx-auto space-y-5'>
      <div className='container mx-auto flex flex-col bg-blue-400 justify-center items-center py-4 space-y-4'>
           <div>
                <Avatar size={164} icon={<UserOutlined/>}/>
           </div>
           <div>
               <h3 className='uppercase font-bold '>{`${user[0].firstname } ${user[0].lastname}`  }</h3>
           </div>
      </div>
      <div className='container mx-auto sm:px-4'>
        <ul className='space-y-3'>
          <li>
             <label>ACCOUNT NUMBER</label>
             <h3 className='text-xl font-bold'>010101010101010</h3>
          </li>
          <li>
          <label >ROUTING NUMBER</label>
             <h3 className='text-xl font-bold'>010101010101010</h3>
          </li>
          <li>
          <label className='uppercase' >Billing Address</label>
             <h3 className='text-xl font-bold'>010101010101010</h3>
          </li>
          <li>
          <label className='uppercase' >Email Address</label>
             <h3 className='text-xl font-bold'>{user[0].email}</h3>
          </li>
          <li>
          <label className='uppercase' >Pin</label>
             <h3 className='text-xl font-bold'>{'0890'}</h3>
          </li>
          <li>
            <div className=' space-y-4'>
            <h3 className='text-center text-xl'>SECURITY QUESTIONS</h3>
          <ul className='space-y-3'>
          
            <li className='text-lg font-medium'>
            <label className='uppercase' >Question 1</label>
              <h3>
              where did your parents meet
              </h3>
            
            </li>
            <li className='text-lg font-medium'>
            <label className='uppercase' >Question 2</label>
              <h3>
              where did your parents meet
              </h3>
            
            </li>
            <li className='text-lg font-medium'>
            <label className='uppercase' >Question 3</label>
              <h3>
              where did your parents meet
              </h3>
            
            </li>
   
          </ul>
            </div>
         
          </li>
          {/* <li>

            <CTA2/>
          </li> */}
        </ul>
      </div>
      </div>
    
     {/* <div className='block md:hidden'>
     <FooterMenu/>
     </div> */}
    
    </div>
   
    </>
  )
}

export default Profile