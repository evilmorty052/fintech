import React from 'react'
import Header from '../components/Header'
import FooterMenu from '../components/FooterMenu';
import Accountcard from '../components/Accountcard'
import { FaDollarSign, FaPiggyBank, FaChevronUp,FaBan, FaPlusCircle, } from 'react-icons/fa'; 
import Transactions from '../components/Transactions';
import CTA2 from '../components/CTA 2';
import Modal from '../components/modal';
import { useState, useEffect } from 'react'
import {useQuery} from '@tanstack/react-query'
import { client } from '../lib/client';
import Chatra from '@chatra/chatra'
import Inactive from '../components/inactive';
import Witheld from '../components/Witheld';


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
  const name = user && user[0].firstname.slice(0,1)
  const lname = user && user[0].lastname.slice(0,1)


  useEffect(() => {
   user && console.log(user[0].witheld)
  
    
  }, [])
  

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
    <div className='flex min-h-screen flex-col  relative pb-10 bg-black-gradient-2 '>
         

     <div>
     <Modal closeModal={()=>{setisclicked(false)}} openModal={openModal} isOpen={isclicked? true : false} />
      </div> 
            <Header name={user[0].firstname} icon={<FaPlusCircle/>} func={'add money'} username={`${name}${lname} ` } to={'/pay'}/>
            <Inactive/>
            
        <div  className='flex flex-col w-full space-y-5  items-center py-3 mb-5'>
            <div className='px-1'>
            <Accountcard earnings={user[0].investment} show text={'ACCOUNT BALANCE'}/>
            </div>

            {user[0].witheld && 
            <div className='px-1'>
            <Witheld earnings={user[0].witheld} text={'WITHELD BALANCE'} />
            </div>}

            <div className=' flex items-start w-full px-3 uppercase'>
                <p className='text-2xl font-bold text-white '>
                    Recent transactions
                </p>
               
            </div>
            <Transactions/>
            <div className='px-3'>
            <CTA2 longText={'Everything you need to accept card payments and grow your business anywhere on the planet'} shortText={'Get a Debit Card'} show/>
            </div>
            
        </div>
        
    <FooterMenu/>
    
    </div>
  )
}

export default Dashboard