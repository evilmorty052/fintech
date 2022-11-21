import React, { useState } from 'react';
import { Button, Popconfirm } from 'antd';
const Confirm = ({handleCancel, handleOk}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  
  const showPopconfirm = () => {
    setOpen(true);
  };
  
  handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  
  handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  
  return (
    <Popconfirm
      title="Title"
      open={open}
      onConfirm={handleOk}
      okButtonProps={{
        loading: confirmLoading,
      }}
      onCancel={handleCancel}
    >
      <Button type="primary" onClick={showPopconfirm}>
        Confirm
      </Button>
    </Popconfirm>
  );
};
export default Confirm;