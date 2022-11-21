import { BellFilled, BellOutlined, ClockCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import React,{useState} from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { Badge, Empty, message, notification } from 'antd';
import Messages from './messages';
import { client } from '../lib/client';
import { useQuery } from '@tanstack/react-query';



const Notification = ({count}) => {

  let email = localStorage.getItem('email')
  const emailID = JSON.parse(email)
  let query = `*[email == "${emailID}"]` 
  const { data: user } = useQuery(['notifications'], () => client.fetch(query))

  const notifications = user && user[0].notifications
  const token = user && user[0]

  const unread = notifications && notifications.filter((notification)=>{
    return(
      notification.read == false
    )
  })

  const data = notifications && notifications.map((notification)=>{
    return {
      title: notification.title,
      message: notification.message,
      key: notification._key
    }
  })

  let remove = notifications && `notifications['title == "${data.title}"]`
  const getkey = sessionStorage.getItem('message_key')
  const getmsg = sessionStorage.getItem('message_content')
  const gettt = sessionStorage.getItem('message_title')

  const msgkey = getkey 
  const reviewsToRemove = user && [`notifications[_key=="${msgkey}"]`]


  const read = async () => {
    user &&
    client.patch(token._id)
    .insert("replace", `${reviewsToRemove}`, [{message: `${getmsg}`, title: gettt, read: true}])
    .commit({autoGenerateArrayKeys: true,}).then((res) => {
      console.log(res)
    }).catch(err => console.log(err))
   
}
  
  const reversed = notifications && notifications.reverse()
  console.log(reversed)

const [open, setopen] = useState(false)

  return (
    <div className='py-2'>
       {<Badge count={
        notifications && unread.length
        
          }>
        <span onClick={()=>{setopen(open ? false : true )}} className='text-xl sm:text-2xl text-white'>{!open ?<BellFilled/> : <CloseCircleOutlined/>}</span>
        </Badge> }
       <div className={open ? ' h-40 absolute left-5  top-16    w-64 bg-white flex flex-col sidebar' : 'hidden'}>
         <div className='relative px-2 py-2 overflow-scroll  z-[5000] '>
                {/* <Empty description={
      <span>
        no notifications yet
      </span>
    }/> */}
    <Messages details={data} func={()=>user && console.log()} key={notifications && data.key}  runread={read}/>
    {/* <Messages notification={user && data} runread={read} /> */}
         </div>
       </div>
    </div>
  )
}

export default Notification