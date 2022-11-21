import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
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
import { AlertTwoTone, PlusCircleFilled } from '@ant-design/icons';
import Greeting from '../components/greeting';
import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';
import Stepper from '../components/Stepper';


const Dashboard = (email, password) => {
  const mobile = window.innerWidth < 780
 
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
  
  console.log(user && user[0].accounts)


  if(!user){
    return(
      <>
      <div>
        <Loader/>
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
    // <div className='flex min-h-screen flex-col  relative pb-10 bg-plat font-poppins'>
    <div className=' min-h-screen relative bg-plat font-poppins grid grid-cols-1  pb-10'>
         

     <div>
     <Modal closeModal={()=>{setisclicked(false)}} openModal={openModal} isOpen={isclicked? true : false}  />
      </div> 
            <Header name={user[0].firstname} icon={<FaPlusCircle/>} func={'Add account'} username={`${name}${lname} ` } task={()=>{setclicked(true)}} to={'/openaccount'}/>
            {/* <Inactive/> */}
            <div className='container mx-auto px-4 text-center max-w-xl'>
            <Greeting/>
            </div>
        <div  className='flex flex-col w-full space-y-5  items-center py-3 mb-5'>
           <div className='self-start px-2 flex flex-col'>
           <h1 className='text-2xl font-bold text-blk'>ACCOUNTS</h1>
           {/* <Page/> */}
           </div>
         
           <div className='hidden lg:flex gap-x-6 '>
           <div className='px-1 lg:self-start'>
            <Accountcard earnings={user[0].investment} show text={'ACCOUNT BALANCE'}/>
            </div>

            <div className='px-1 lg:self-start'>
            <Accountcard earnings={user[0].investment} show text={'ACCOUNT BALANCE'}/>
            </div>
           </div>
           <div className='sm:flex space-y-2 px-3 lg:hidden sm:flex-col sm:items-center w-full  '>
            {/* <Accountcard earnings={user[0].investment} show text={'CHECKING ACCOUNT(0883..)'}/>
            <Accountcard earnings={user[0].earnings} show text={'SAVINGS ACCOUNT (3433..)'}/> */}

            {
              user[0].accounts.map((accounts)=>{
                return(
                  <Accountcard earnings={user && accounts.balance} show text={`${accounts.type}${' account '}(${accounts.number.slice(0,4)}...)`} key={accounts.number} type={accounts.type}/>
                )
                
              })
            }
            </div>
            
            {user[0].witheld && 
            <div className='px-1'>
            <Witheld earnings={user[0].witheld} text={'WITHELD BALANCE'} />
            </div>}
            {/* <div>
              <Link to={'/routing'}>
              <button
              className='flex items-center space-x-2 bg-blue-400 px-4 py-2 rounded-3xl'  >
                   <span className='font-medium'>ADD ACCOUNT</span>
                   <span><FaPlusCircle/></span>
              </button>
              </Link>
             
            </div> */}
            <div className='hidden lg:flex container mx-auto w-full justify-center gap-x-3   '>
              <Smallcard amount={'$ 4000'} recipe={'Crypto Recipe'}/>
              <Smallcard amount={'$ 14000'} recipe={'Stocks Recipe'}/>
              <Smallcard amount={'$ 14000'} recipe={'Stocks Recipe'}/>
              <Smallcard amount={'$ 14000'} recipe={'Stocks Recipe'}/>
              
            </div>
            <div className='self-start px-2'>
           <h1 className='text-2xl font-bold text-blk'>RECIPES</h1>
           </div>
            <div className='lg:hidden container space-y-3 sm:space-y-0 flex flex-col sm:flex-row mx-auto sm:justify-evenly px-5 w-full  '>
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


