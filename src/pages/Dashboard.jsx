import React from 'react'
import Header from '../components/Header'
import FooterMenu from '../components/FooterMenu';
import Accountcard from '../components/Accountcard'
import { FaDollarSign, FaPiggyBank, FaChevronUp } from 'react-icons/fa'; 
import Transactions from '../components/Transactions';
import CTA2 from '../components/CTA 2';
import Modal from '../components/modal';
import { useState } from 'react'
import {useQuery} from '@tanstack/react-query'
import { client } from '../lib/client';


const Dashboard = (email, password) => {
  email = localStorage.getItem('email')
  const emailID = JSON.parse(email)

  let [isOpen, setIsOpen] = useState(false)
  let [isclicked, setisclicked] =useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  
  let query = `*[email == "${emailID}"]`
  const { data: user } = useQuery(['userlist'], () => client.fetch(query))
  ;

  if(!user){
    return(
      <>
      <div>
        loading...
      </div>
      </>
    )
  }

  return (
    <div className='flex min-h-screen flex-col bg-gray-100 relative pb-10 '>
         

     <div>
     <Modal closeModal={()=>{setisclicked(false)}} openModal={openModal} isOpen={isclicked? true : false} />
      </div> 
            <Header name={user[0].firstname}/>
            <button onClick={()=>{setisclicked(true)}}>hh</button>
        <div  className='flex flex-col w-full space-y-5  items-center py-3 mb-5'>
            <Accountcard/>
            <div className=' flex items-start w-full px-3 uppercase'>
                <p className='text-2xl font-bold '>
                    Recent transactions
                </p>
               
            </div>
            <Transactions/>
            <div className='px-2'>
            <CTA2 longText={'Everything you need to accept card payments and grow your business anywhere on the planet'} shortText={'Get a Debit Card'}/>
            </div>
            
        </div>
        
    <FooterMenu/>
    
    </div>
  )
}

export default Dashboard