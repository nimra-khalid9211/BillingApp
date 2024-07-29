import React, { useState } from 'react'
import CardLayout from '../../Components/CardLayout'
import { Radio } from 'antd'

const Notifications = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <CardLayout title={"Notifications"} height={"h-[36rem]"}> 
    
    <div className='flex justify-around mt-10'>

      <span className='text-base font-medium'>Notification Preferences</span>

      <Radio.Group onChange={onChange} value={value}>

      <Radio value={1}>Email</Radio>
      <Radio value={2}>SMS</Radio>
      <Radio value={3}>Both</Radio>

    </Radio.Group>

    </div>

    </CardLayout>
  )
}

export default Notifications