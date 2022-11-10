import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';

const ProgressBar = ({percent, status, type}) => {
//     const [percent, setPercent] = useState(0);
//     const [moved, setMoved] = useState(0);

//     const increase = () => {
//       let newPercent = percent + 10;
//       if (newPercent > 100) {
//         newPercent = 100;
//       }
//       setPercent(newPercent);
//     };
  
//     const decline = () => {
//       let newPercent = percent - 10;
//       if (newPercent < 0) {
//         newPercent = 0;
//       }
//       setPercent(newPercent);
//     };

// const move = () =>{
//     setTimeout(()=>{
        
//             increase()
//             setMoved(prev + 1)
        
//       }, 1000)
// }

//     useEffect(() => {
//         if(moved <5){
//             move()
//         }
       
        
       
//       }, [percent])
  
    return (
      <>
        <Progress percent={percent} status={status} type={type} />
        {/* <Button.Group>
          <Button onClick={decline} icon={<MinusOutlined />} />
          <Button onClick={increase} icon={<PlusOutlined />} />
        </Button.Group> */}
      </>
    );
};

export default ProgressBar;