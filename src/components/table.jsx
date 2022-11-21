import { Space, Table, Tag } from 'antd';
import React from 'react';
import { client } from '../lib/client';
import { useQuery } from '@tanstack/react-query';
import { ArrowDownOutlined, ArrowUpOutlined, CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';




 


const columns = [
  {
    
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    
    dataIndex: 'amount',
    key: 'amount',
    render: (text) => <a>{`${'$'}${text.toLocaleString({ style: 'currency', currency: 'USD' })}`}</a>,
  },
  {
    
    dataIndex: 'type',
    key: 'type',
    render: (text) => text === 'Received' ? <a className='text-green-300'>{<ArrowDownOutlined/>}</a> : <a className='text-red-300'>{<ArrowUpOutlined/>}</a> ,
  },
  {
    
    dataIndex: 'tags',
    key: 'tags',
    render: (text) => text === 'Confirmed' ? <a className='text-green-300'>{<CheckCircleFilled/>}</a> : <a className='text-red-300'>{<ExclamationCircleFilled/>}</a> ,
  },
 
//   {
   
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag == 'Confirmed'  ? 'green' : 'volcano';
//           if (tag == 'Confirmed') {
//             color = 'green';
//             tag = <span><CheckCircleFilled/></span>
           
//           }

//           else {
//             color = 'volcano'
//             tag = <span><ExclamationCircleFilled/></span>
//           } 
//           return (
//             <Tag color={color} key={tag}>
//               {tag}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    amount: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['completed'],
  },
  {
    key: '2',
    name: 'Jim Green',
    amount: 42,
    address: 'London No. 1 Lake Park',
    tags: ['witheld'],
  },
  {
    key: '3',
    name: 'Joe Black',
    amount: 4000,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool'],
  },
];




const Tab = ({name, amount, status, deets,key}) => {
    
    const data = [
        {
          key: key,
          name: name,
          amount: amount,
          address: 'New York No. 1 Lake Park',
          tags: ['completed'],
        },]
  


  return (
    <Table columns={columns} dataSource={data} pagination={false} />
  )
}


       

 
export {Tab, columns, data} ;