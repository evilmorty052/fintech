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
import Method from './method';
import Smallcard from '../components/smallcard';
import { Button, notification } from 'antd'
import { AlertTwoTone } from '@ant-design/icons';
import Greeting from '../components/greeting';

const Dashboard = (email, password) => {
  
 
  email = localStorage.getItem('email')
  const emailID = JSON.parse(email)

  let [isOpen, setIsOpen] = useState(false)
  let [isclicked, setisclicked] =useState(false)
  let [clicked, setclicked] =useState(false)

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
  
  const openNotification = (placement) => {
    notification.open({
      message: 'Account Inactive',
      duration: 0,
    //   placement: 'bottom' ,
      description:
        'it seems your account is inactive at the moment contact customer care to complete this withdrawal',
        placement,
        icon: (
          <AlertTwoTone
            style={{
              color: '#108ee9',
            }}
          />
        ),
      onClick: () => {
        console.log('Notification Clicked!');
        
      },
    });
  };

  

  useEffect(() => {
   user && console.log(user[0].witheld)
  
    
  }, [])

  useEffect(()=>{

    return()=>{
      openNotification('bottom-right')
    }
    
  },[])
  

  if(!user){
    return(
      <>
      <div>
        loading...
      </div>
      </>
    )
  }

  if(clicked){
    return(
      <>
      <Modal closeModal={()=>{setisclicked(false)}}  isOpen={isclicked? true : false} />
      <Method setisclicked={setisclicked}/>
      </>
    )

  }

  return (
    <div className='flex min-h-screen flex-col  relative pb-10 bg-plat font-poppins'>
         

     <div>
     <Modal closeModal={()=>{setisclicked(false)}} openModal={openModal} isOpen={isclicked? true : false} />
      </div> 
            <Header name={user[0].firstname} icon={<FaPlusCircle/>} func={'add money'} username={`${name}${lname} ` } task={()=>{setclicked(true)}} />
            {/* <Inactive/> */}
            <div className='container mx-auto px-4 text-center'>
            <Greeting/>
            </div>
        <div  className='flex flex-col w-full space-y-5  items-center py-3 mb-5'>

           
           
            <div className='px-1'>
            <Accountcard earnings={user[0].investment} show text={'ACCOUNT BALANCE'}/>
            </div>
            
            {user[0].witheld && 
            <div className='px-1'>
            <Witheld earnings={user[0].witheld} text={'WITHELD BALANCE'} />
            </div>}
            <div className='container space-y-3 sm:space-y-0 flex flex-col sm:flex-row mx-auto sm:justify-evenly px-5 w-full '>
              <Smallcard amount={'$ 4000'} recipe={'Crypto Recipe'}/>
              <Smallcard amount={'$ 14000'} recipe={'Stocks Recipe'}/>
              
            </div>
            <div className=' flex items-start w-full px-3 uppercase'>
                <p className='text-2xl font-bold text-blk '>
                    Recent transactions
                </p>
               
            </div>
            <Transactions/>
            <div className='px-3' onClick={()=>{setisclicked(true)}}>
            <CTA2 longText={'Everything you need to accept card payments and grow your business anywhere on the planet'} shortText={'Get a Debit Card'} show/>
            </div>
            
        </div>
        
    <FooterMenu/>
    
    </div>
  )
}

export default Dashboard


