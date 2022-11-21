import { Avatar, List, message , Badge} from 'antd';
import React from 'react';
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];


const Messages = ({details, description,func, key, runread }) => (
  <List

    itemLayout="horizontal"
    dataSource={details}
    rowKey={key}
    renderItem={(item) => (
      <>
      
              <List.Item   onClick={()=>{
            
            details &&  sessionStorage.setItem('message_key', item.key)
            details &&  sessionStorage.setItem('message_content', item.message)
            details &&  sessionStorage.setItem('message_title', item.title)
              runread()
            }}>
             
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={item.title}
              description={item.message}
            
            />
             
          </List.Item>

    
    
      </>
    
    )}
  />
);
export default Messages;



// import React from 'react'


// const messages = ({notification, runread}) => {
  
//   return (
//     <div className=''>
//       {notification && notification.map((notification)=>{
//         return(
// <ul key={notification && notification._key}
// onClick={()=>{
//   sessionStorage.setItem('message_key', notification.key)
//   runread()
// }}>
//          <li>
//           <div className='flex flex-col'>
//           <h3>{notification.title}</h3>
//           <p>
//             {notification.message}
//           </p>
//           </div>
         
//          </li>
//         </ul>
//         )
        
//       })}
          
//     </div>
//   )
// }

// export default messages