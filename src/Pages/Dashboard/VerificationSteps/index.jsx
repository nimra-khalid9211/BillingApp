import React, { useState } from 'react'
import BreadCrumbs from '../../../UI/BreadCrumbs';
import { MdDashboardCustomize } from 'react-icons/md';
import { Card, Steps } from 'antd';
import CardLayout from '../../../Components/CardLayout';
import BasicDetails from './BasicDetails';
import MobileVerification from './MobileVerification';
import EmailVerification from './EmailVerification';
import CNICDetails from './CNICDetails';
import { BlueButton, WhiteButton } from '../../../UI/Buttons';

const items = [
  {
    title: 'Basic Details',   
    content:(
      <>
      <BasicDetails />
      </>
    )
  },
  {
    title: 'Mobile Verification',    
    content:(
      <>
      <MobileVerification />
      </>
    ) 
  },
  {
    title: 'Email Verification',   
    content:(
      <>
      <EmailVerification />
      </>
    )
  },
  {
    title: 'CNIC Details',   
    content:(
      <>
      <CNICDetails />
      </>
    )
  },
];


const VerificationSteps = () => {

    const [current, setCurrent] = useState(0);

  return (
    <>
    <BreadCrumbs icon={<MdDashboardCustomize/>} menu={"Dasboard"} subMenu={"Profile"}/>

    <CardLayout title={"Complete your Profile"} from={"nonEdit"}>

    <div className='flex justify-center'>
    <Steps current={current} labelPlacement="vertical" items={items} size="small"/>
    </div>

    <div className='mt-4'>
          {items[current].content}
        </div>

    </CardLayout>

    <div className='flex items-center justify-end mt-4'>

     {current > 0 && <WhiteButton clickEvent={()=>setCurrent(current - 1)} title={"Previous"}/>}
      
     {current < 3 && <BlueButton clickEvent={()=>setCurrent(current + 1)} title={"Next"} />}
      
     {current === 3 && <BlueButton title={"Submit"}/>}

    </div>

    </>
  )
}

export default VerificationSteps