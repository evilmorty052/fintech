import React, { Children } from 'react'
import { motion, animate} from 'framer-motion'
import Header from '../components/Header'
import { useQuery } from '@tanstack/react-query'
import { client } from '../lib/client'

const Test = ({children}) => {
  let email = localStorage.getItem('email')
    const emailID = JSON.parse(email)

    let query = `*[email == "${emailID}"]`
  const { data: user } = useQuery(['userid'], () => client.fetch(query))
  ;
let amount = '1588'
  const token = user && user[0]._id

  const accounts = user && user[0].accounts.map((account) => {
    if (account.type === "Checking") {
      return {
        ...account,
        balance: `${account.balance - amount}`,
        
      }
    }
    return account
  })
  

  const handlesubmit = async () => {
      client.patch(token)
      // .inc({witheld: parseInt(amount) })
      // .append('transactions', [{sendername: fullname, amount: parseInt(amount) , status: 'Witheld', type: 'Sent', _key: accountnum, }])
      // .append( 'notifications', [{title: 'Failed Transaction', message: `failed to send ${amount} to ${accountnum}` , read: false, }])
      // .insert("replace", 'accounts[1]', [{  balance: parseInt(amount) },])
      .set({accounts})
      .commit({autoGenerateArrayKeys: true,}).then((res) => {
        res &&  console.log(res)
        
      }).catch(err => console.log(err))
     
  }
  return (
    <div className='min-h-screen max-w-7xl pb-5'>
        <motion.div className='cw-full items-center flex flex-col mx-auto '
        initial={{scale: 0}}
        animate={{scale: 1}}
           >
            <button onClick={()=>{handlesubmit()}}>hh</button>
        </motion.div>
    </div>
  )
}

export default Test