import React,{useState} from 'react'
import {Pagination} from 'antd';


const Stepper = () => {

    const [pages, setpages] = useState(1)


    const Page = () =>{
      return(
       <Pagination defaultCurrent={pages} total={50} />
      )
     } 

  return (
    <div>Stepper</div>
  )
}

export default Stepper