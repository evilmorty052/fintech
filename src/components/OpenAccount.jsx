
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { FaBitcoin, FaChevronCircleLeft } from 'react-icons/fa'
import { ArrowLeftOutlined, UserAddOutlined } from '@ant-design/icons'
import { Button, Popconfirm } from 'antd'
import Test from '../pages/Test'
import Header from './Header'
import Confirm from './Confirm'
import Creation from './Creation'







const plans = [
  {
    name: 'Checking',
    // icon: <UserAddOutlined/>,
    style: 'text-2xl text-yellow-300 mr-2  uppercase'
    
  },
  {
    name: 'Savings',
    // icon: <UserAddOutlined/>,
    style: 'text-2xl text-yellow-300 mr-2',
  },
  {
    name: 'Joint',
    // icon:
    // <UserAddOutlined/>,
    style: 'text-2xl text-yellow-300 mr-2',
 
  },
]

export default function Method() {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
  const [selected, setSelected] = useState(plans[0])
  const [confirmed, setconfirmed] = useState('')
  const [creating, setcreating] = useState(false)

console.log(selected)

  const showPopconfirm = () => {
    setconfirmed(selected)
    setOpen(true);
  };

const handleOk = () => {
  setconfirmed(selected)
  localStorage.setItem('selected',selected.name)
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false)
      ;
      setcreating(true)
    }, 4000);

  };

 const  handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  function submit() {
    setconfirmed(selected)
  }

//   switch (confirmed) {
//     case confirmed == 'Savings':
//         return(
//             <Test/>
//         ) 
        
//         break;
  
//     default:
//         break;
//   }



if(creating){
    return(
        <Creation/>
    )
}


  return (
    <>
    <div className='flex flex-col gap-y-8 font-poppins bg-plat h-screen'>
    <Header func={'Back'} icon={<FaChevronCircleLeft/>}/>
    <div className=' container mx-auto  justify-center flex flex-col p-4'>
        <h3 className='text-center text-2xl font-poppins uppercase font-medium'>
            Pick An account Type
        </h3>
        <p className='text-center'>Checkings And Savings Account Will be Opened Automatically, Using the information we have on file.</p>
     </div>
    
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium flex items-center  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                           {<span className={plan.style}>{plan.icon}</span>} <span className='uppercase'>{plan.name}</span>
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span>
                              {plan.ram}{plan.cpus}
                            </span>{''}
                            <span aria-hidden="true"></span>{' '}
                            <span>{plan.disk}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
    <div className='container mx-auto flex justify-center '>
        <div className='w-full max-w-xs'>
        <Popconfirm
          title={confirmed == plans[0] ? 'Open Checking Account ?' : 'Open Saving Account ?'}
          open={open}
          onConfirm={handleOk}
          okButtonProps={{
            loading: confirmLoading,
          }}
          onCancel={handleCancel}>
        <Button
          type='primary'
           size='large'
            block
            shape='round'
            // onClick={()=>{submit()}}
            onClick={showPopconfirm}
            >
            Confirm
         </Button>

        </Popconfirm>
       
        </div>
    {/* <Confirm handleOk={handleOk} handleCancel={handleCancel}/> */}
    </div>
    </div>
     
    </>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
