import React from 'react'
import ProgressBar from './progressbar'
import { useState,  useEffect } from 'react'
import FooterMenu from './FooterMenu'
import { Button, notification } from 'antd'
import {client} from '../lib/client'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
const progress = ({amount}) => {
  const [err, seterr] = useState(false)
    let [percent, setpercent] = useState(2)
    const history = useNavigate()

    let email = localStorage.getItem('email')
    const emailID = JSON.parse(email)

    let query = `*[email == "${emailID}"]{_id}`
  const { data: user } = useQuery(['userid'], () => client.fetch(query))
  ;

  const token = user && user[0]

    const handlesubmit = async () => {
        client.patch(token._id)
        .dec({investment: parseInt(amount) })
        .inc({witheld: parseInt(amount) })
        .commit().then((res) => {
          res &&  history('/dashboard')
          console.log(res)
        }).catch(err => console.log(err))
       
    }

    // const increase = ()=>{
    //     while (percent < 78) {
    //         setpercent((prev)=> prev +2)
    //       }
        
    // }
    const openNotification = () => {
        notification.open({
          message: 'Account Inactive',
          duration: 20,
        //   placement: 'bottom' ,
          description:
            'it seems your account is inactive at the moment contact customer care to complete this withdrawal',
          onClick: () => {
            console.log('Notification Clicked!');
            
          },
        });
      };

    useEffect(() => {
    
     
      
      setTimeout(() => {
        if(percent < 78){
            setpercent((prev)=> prev +2)
        }
      }, 1000);

      if(percent == 77){
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
      <h3>..loading</h3>
    )
  }

  return (
    <div>
        <div className='font-poppins pt-10'>

         <div className='flex container mx-auto  justify-center pt-20 '>
                <div className='flex flex-col py-5  space-y-20  '>
                    <div className='flex flex-col items-center space-y-4 '>
                    <span className={!err ?'text-lg sm:text-2xl uppercase font-bold text-center heartbeat' : 'text-lg sm:text-2xl uppercase font-bold text-center text-red-300'}>{!err ? "Withdrawal in progress" : 'Something Went Wrong'}</span>
                     <ProgressBar percent={percent < 78? percent ++ : 78}  type={'circle'} status={err && 'exception'}/>
                    </div>
                     <div className={err ? '' : 'hidden' }>
                        <Button type="primary" block shape='round '
                        danger={'true'}
                        // href='/dashboard'
                        onClick={handlesubmit}
                        size='large'>
                              BACK
                        </Button>
                     </div>
                </div>
                {/* <FooterMenu/> */}
            </div>
        </div>
    </div>
  )
}

export default progress