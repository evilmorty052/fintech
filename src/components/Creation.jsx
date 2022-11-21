import React from 'react'
import ProgressBar from './progressbar'
import { useState,  useEffect } from 'react'
import FooterMenu from './FooterMenu'
import { Button, notification } from 'antd'
import {client} from '../lib/client'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'

const Creation = ({amount, accountnum, fullname}) => {
const [loading, setloading] = useState(false)
  const [err, seterr] = useState(false)
    let [percent, setpercent] = useState(2)
    const history = useNavigate()

    let email = localStorage.getItem('email')
    const emailID = JSON.parse(email)

    let query = `*[email == "${emailID}"]{_id}`
  const { data: user } = useQuery(['userid'], () => client.fetch(query))
  ;
 
  const type = localStorage.getItem('selected')

  const token = user && user[0]

  const mirage = () =>{
    setloading(true)
    setTimeout(() => {
        history('/dashboard')
    }, 3000);
  }

    const handlesubmit = async () => {
        client.patch(token._id)
        .append( 'accounts', [{type: type, balance: '0' , number: '09087776', }])
        .commit({autoGenerateArrayKeys: true,}).then((res) => {
          res &&  mirage()
          console.log(res)
        }).catch(err => console.log(err))
       
    }

   
    const openNotification = () => {
        notification.open({
          message: 'Account Created Succesfully',
          duration: 10,
        //   placement: 'bottom' ,
          description:
            'Your Checking Account Has Been Set up Succesfully Your Account Number Will be Sent To You Via Email',
          onClick: () => {
            console.log('Notification Clicked!');
            
          },
        });
      };

    useEffect(() => {
    
     
      
      setTimeout(() => {
        if(percent < 100){
            setpercent((prev)=> prev +2)
        }
      }, 1000);

      setInterval(() => {
        if(percent < 100){
            percent ++
        }
        
      }, 1000);

      if(percent == 100){
        seterr(true)
        openNotification()
      }
      
        
        
    
    }, [percent])


    useEffect(() => {
      const checkerr = ()=>{
       err && console.log(percent)
      }
    
      return () => {
        
      }
    }, [err])
    
    
  if(!user){
    return(
      <Loader/>
    )
  }

  if(loading){
    return(
        <Loader/>
      )
  }

  return (
    <div>
        <div className='font-poppins pt-10'>

         <div className='flex container mx-auto  justify-center pt-20 '>
                <div className='flex flex-col py-5  space-y-20  '>
                    <div className='flex flex-col items-center space-y-4 '>
                    <span className={!err ?'text-lg sm:text-2xl uppercase font-bold text-center heartbeat' : 'text-lg sm:text-2xl uppercase font-bold text-center text-green-500'}>{!err ? "Creating Account" : 'Account Created'}</span>
                     <ProgressBar percent={percent}  type={'circle'} status={err && 'success'}/>
                    </div>
                     <div className={err ? '' : 'hidden' }>
                        <Button type="primary" block shape='round '
                        // danger={'true'}
                        // href='/dashboard'
                        onClick={handlesubmit}
                        size='large'>
                              Complete
                        </Button>
                     </div>
                </div>
                {/* <FooterMenu/> */}
            </div>
        </div>
    </div>
  )
}

export default Creation