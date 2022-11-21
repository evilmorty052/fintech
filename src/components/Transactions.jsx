import React,{useState} from 'react'
import { Disclosure } from '@headlessui/react'
// import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { FaChevronUp as ChevronUpIcon  } from 'react-icons/fa'
import Transaction from './Transaction'
import { client } from '../lib/client'
import { useQuery } from '@tanstack/react-query'
import { Empty, Table, Tag } from 'antd';
import { Tab, columns, data } from './table'
import { GoogleCircleFilled } from '@ant-design/icons'


const Transactions = () => {

  

  let email = localStorage.getItem('email')
  const emailID = JSON.parse(email)
  let query = `*[email == "${emailID}"]`
  const { data: user } = useQuery(['userlist'], () => client.fetch(query))


  const transaction = user && user[0].transactions
 transaction && console.log(transaction)

 


const deets = transaction.map((transaction)=>{

  return{
    name : transaction.sendername,
    amount: transaction.amount,
    tags: transaction.status,
    type: transaction.type
  }

})
 

transaction && console.log(deets)


  if(!user){
    return(
      <>
      ...loading
      </>
    )
  }

  return (
    <div className="w-full px-4 font-poppins ">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-gradient px-4 py-1 text-left text-sm font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span className=' uppercase text-blk font-bold  font-poppins'>November</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="-4 pt-4 pb-2 text-sm text-gray-500 flex flex-col">
               {!transaction ? <Empty description={
      <span>
        no transactions yet
      </span>
    }/> : <Transaction amount={transaction[1].amount} sender={transaction[1].sendername} time={transaction[1].time} stat={transaction[0].status}/>}
                {/* <>
                {transaction && <Transaction amount={transaction[0].amount} sender={transaction[0].sendername} time={transaction[0].time}/>}
                </> */}
                   
              

              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="bg-blue-gradient flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span className=' uppercase  text-blk font-bold font-poppins'>October</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm text-gray-500 flex flex-col">
              {/* <Empty description={
      <span>
        no transactions yet
      </span>
    }/> */}

    {/* <div className='flex flex-col text-center justify-center items-center'>
    {transaction.map((trans)=>{
   
   return(
    <>
  
    <Tab key={trans.sendername} amount={trans.amount} name={trans.sendername} status={trans.status} />
    
    </>
   )


    })}
    </div> */}
{user && <Table columns={columns} dataSource={deets} pagination={false} />}
   

   
   
              {/* <Transaction sender={'nick something'} time={'10:30'} amount={'1000'}/>
              <Transaction sender={'nick another one'} time={'11:30'} amount={'8000'}/>
              <Transaction sender={'nick bucktwo'} time={'11:30'} amount={'11000'}/> */}
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="bg-blue-gradient flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span className=' uppercase text-blk font-bold  font-poppins'>september</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm text-gray-500 flex flex-col">
              <Empty description={
      <span>
        no transactions yet
      </span>
    }/>
              {/* <Transaction sender={'nick something'} time={'10:30'} amount={'1000'}/>
              <Transaction sender={'nick another one'} time={'11:30'} amount={'8000'}/>
              <Transaction sender={'nick bucktwo'} time={'11:30'} amount={'11000'}/> */}
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="bg-blue-gradient flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span className=' uppercase text-blk font-bold  font-poppins'>August</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm text-gray-500 flex flex-col">
             
              <Empty description={
      <span>
        no transactions yet
      </span>
    }/>
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default Transactions