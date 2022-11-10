import React,{useState, useEffect} from 'react'
import { FaDollarSign } from 'react-icons/fa'
import Input from '../components/input2'
import Enterpin from './Enterpin'
import Modal from '../components/paymentmodal'
import Pay from './pay2'


const Withdraw = () => {
const [clicked, setClicked] = useState(false)
const [balance, setBalance] = useState(4000)
const [amount, setAmount] = useState('')
let [isOpen, setIsOpen] = useState(false)
let [isclicked, setisclicked] =useState(false)

const user ={
  balance: 4000
}

   const handleSubmit = () =>{
        setLoading(true)
        setTimeout(()=>{
            
            navigate('/paynow')
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
      {/* <Enterpin setClicked={clicker}/> */}
      <Pay amount={amount} loader={true}/>
    </>
  )
}



  return (
    <div className='flex min-h-screen bg-black font-poppins '>
      <Modal closeModal={()=>{setisclicked(false)}}  isOpen={isclicked? true : false}
       title={'Confirm Amount'} message={amount} setClicked={clicker}/>
        <div className='w-full   bg-blue-300 '>
            <div className='flex flex-col items-center py-10 space-y-4 '>
                <h3 className='text-white text-lg uppercase text-center'>
                        enter an amount to withdraw
                </h3>
               <h3 className='text-white uppercase text-xl font-bold'>{`Balance ${':'} ${user.balance < amount ? 'insufficient funds' :`${'$ '} ${user.balance-amount } ` }`}</h3>
                <div className='flex flx-col items-center space-y-4 '>
                  
                     <input type={'number'}  className={' border-0 focus:border-0  focus:outline-none  text-black text-center  '}
                     value={amount}
                     onChange={
                      (e)=>{
                        setAmount(e.target.value)
                        
                        
                        }}/>
                     
                </div>
                <button  className='text-white'
                onClick={()=>{
                  
                  setAmount(amount)
                  setClicked(true)}}>
                {/* // onClick={()=>{setisclicked(true)}}> */}
                Confirm
                </button>
               
            </div> 
        </div>
    </div>
  )
}

export default Withdraw