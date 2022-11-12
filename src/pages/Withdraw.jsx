import React,{useState, useEffect} from 'react'
import { FaChevronCircleLeft, FaDollarSign } from 'react-icons/fa'
// import Input from '../components/input2'
import Enterpin from './Enterpin'
import Modal from '../components/paymentmodal'
import Pay from './pay2'
import { useNavigate } from 'react-router-dom'
import { Input,} from 'antd';
import { Button } from 'antd';
import { client } from '../lib/client'
import { useQuery } from '@tanstack/react-query'
import Header from '../components/Header'
import Accountcard from '../components/Accountcard'
import CTA2 from '../components/CTA 2'
import { LoadingOutlined } from '@ant-design/icons'
import FooterMenu from '../components/FooterMenu'
import {  notification } from 'antd'

const Withdraw = () => {
  const [err, seterr] = useState(true)
const [clicked, setClicked] = useState(false)
const [balance, setBalance] = useState(4000)
const [amount, setAmount] = useState('')
let [isOpen, setIsOpen] = useState(false)
let [isclicked, setisclicked] =useState(false)
const [loading, setLoading] = useState(false)
const navigate = useNavigate()

let email = localStorage.getItem('email')
const emailID = JSON.parse(email)
// const user ={
//   balance: 4000
// }

const openNotification = () => {
  notification.open({
    message: 'INSUFFICIENT BALANCE',
    duration: 20,
  //   placement: 'bottom' ,
    description:
      'please choose a lower amount to withdraw',
    onClick: () => {
      console.log('Notification Clicked!');
      
    },
  });
};



let query = `*[email == "${emailID}"]`
  const { data: user } = useQuery(['userlist'], () => client.fetch(query))
  ;

  const name = user && user[0].firstname.slice(0,1)
  const lname = user && user[0].lastname.slice(0,1)
 

   const handleSubmit = () =>{
       
    if(parseInt(amount) > user[0].investment ){
      seterr(true)
      openNotification()

      return
    }

        setLoading(true)
        setTimeout(()=>{
          setClicked(true) 
            // navigate('/progress')
        },4000)
        
        
    }

const clicker = ()=>{
  if(clicked){
    setClicked(false)
  }
  else {setClicked(true)}
}

// useEffect(() => {
//   if(amount > balance){
//     setBalance('insufficient funds')
//   }

  
// }, [])


if(clicked){
  return(
    <>
    <div className='w-full'>
    <Header func={'BACK'} to={'/dashboard'} icon={<FaChevronCircleLeft/>} username={`${name}${lname}`}/>
    <Pay amount={amount} loader={true}/>
    </div>
      {/* <Enterpin setClicked={clicker}/> */}
      
    </>
  )
}

if(!user){
  return(
    <>

    <h3>...loading</h3>
    </>
  )
}
  


  return (
    <div className='flex flex-col bg-black-gradient-2 font-poppins  h-screen'>
     <Header func={'BACK'} to={'/dashboard'} icon={<FaChevronCircleLeft/>} username={`${name}${lname}`}/>
     
      {/* <Modal closeModal={()=>{setisclicked(false)}}  isOpen={isclicked? true : false}
       title={'Confirm Amount'} message={amount} setClicked={clicker}/> */}
        <div className=' container mx-auto  p-10 flex flex-col items-center space-y-10 justify-center   '>
        <Accountcard earnings={user[0].investment < parseInt(amount) ? 'INSUFFICIENT' : user[0].investment - amount } low={user[0].investment < parseInt(amount) ? true : false} text={'ACCOUNT BALANCE'}/>
        {/* {user&& <h3 className='text-black uppercase text-xl font-bold '>{`Balance ${':'} ${user[0].earnings < parseInt( amount) ? 'insufficient funds' :`${'$ '} ${user[0].earnings[0]-amount } ` }`}</h3>} */}
            <div className='flex flex-col items-center  space-y-4 '>
                <h3 className='text-white text-lg uppercase text-center font-semibold'>
                        enter an amount to withdraw
                </h3>
               {/* {user&& <h3 className='text-black uppercase text-xl font-bold'>{user[0].earnings[0] - amount}</h3>} */}
                <div className='flex flx-col items-center space-y-4 '>
                  
                     <Input type='number' size={'large'}
                     onPressEnter={()=>{handleSubmit()}}
                     className={'text-center'}
                    //  prefix={<FaDollarSign/>}
                    
                     value={amount}
                     onChange={
                      (e)=>{
                        setAmount(e.target.value)
                        }}/>    
                </div>
                <Button  className='text-black'
                type="primary" block
                size='large'
                shape='round'
                onClick={()=>{
                  setAmount(amount)
                  handleSubmit()}}>
                {/* // onClick={()=>{setisclicked(true)}}> */}
                {!loading ? 'CONFIRM' : <LoadingOutlined />}
                </Button>

                
               
            </div> 
        </div>
        <div className='container mx-auto'>
                  <CTA2 shortText={'No Withdrawal Charges '} longText={'enjoy charge free transfers for your first year'}/>
         </div>

         <div className=' mt-10'>
          <FooterMenu/>
         </div>
                
    </div>
  )
}

export default Withdraw