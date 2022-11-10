import React,{useState} from 'react'
import { Disclosure } from '@headlessui/react'
// import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { FaChevronUp as ChevronUpIcon  } from 'react-icons/fa'
import Transaction from './Transaction'
import { client } from '../lib/client'
import { useQuery } from '@tanstack/react-query'



const Transactions = () => {

  

  let email = localStorage.getItem('email')
  const emailID = JSON.parse(email)
  let query = `*[email == "${emailID}"]`
  const { data: user } = useQuery(['userlist'], () => client.fetch(query))
  const transaction = user[0].transactions
 transaction && console.log(transaction[0].amount)
  if(!user){
    return(
      <>
      ...loading
      </>
    )
  }

  return (
    <div className="w-full px-4 ">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-400 px-4 py-2 text-left text-sm font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span className=' uppercase  font-poppins'>November</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="-4 pt-4 pb-2 text-sm text-gray-500 flex flex-col">
                
                <>
                {transaction && <Transaction amount={transaction[0].amount} sender={transaction[0].sendername} time={transaction[0].time}/>}
                </>
 
              

              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="bg-blue-400 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span className=' uppercase  font-poppins'>October</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm text-gray-500 flex flex-col">
             
              <Transaction sender={'nick something'} time={'10:30'} amount={'1000'}/>
              <Transaction sender={'nick another one'} time={'11:30'} amount={'8000'}/>
              <Transaction sender={'nick bucktwo'} time={'11:30'} amount={'11000'}/>
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="bg-blue-400 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span className=' uppercase  font-poppins'>september</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm text-gray-500 flex flex-col">
             
              <Transaction sender={'nick something'} time={'10:30'} amount={'1000'}/>
              <Transaction sender={'nick another one'} time={'11:30'} amount={'8000'}/>
              <Transaction sender={'nick bucktwo'} time={'11:30'} amount={'11000'}/>
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="bg-blue-400 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span className=' uppercase  font-poppins'>August</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm text-gray-500 flex flex-col">
             
              <Transaction sender={'nick something'} time={'10:30'} amount={'1000'}/>
              <Transaction sender={'nick another one'} time={'11:30'} amount={'8000'}/>
              <Transaction sender={'nick bucktwo'} time={'11:30'} amount={'11000'}/>
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default Transactions