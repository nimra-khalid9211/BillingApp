import { TextField } from '@mui/material';
import { Card, Input } from 'antd'
import React, { useState } from 'react'
import { StepCard } from '../../../Components/CardLayout';


const MobileVerification = () => {
  const [verify, setVerify] = useState(false);
  const [hideVerify, setHideVerify] = useState(true);

  return (
    <StepCard title={"Mobile Verification"}>

        <div className='w-4/5 mt-16 mb-32'>

        <div className='grid grid-cols-2'>

        {/* <div className='flex items-center gap-6'> */}
        <div className='w-80 justify-self-end'>
        <TextField  label="Mobile" InputProps={{style: { fontSize: '16px', fontWeight:"600" },}} variant="outlined" size='small' fullWidth/>
        </div>

        {hideVerify && <span className='underline content-center ml-16 text-[#329DFF] w-[7rem]' role='button' onClick={()=>{setVerify(true);setHideVerify(false)}}>Verify Now</span>}
        {/* </div> */}
        </div>
       

        {verify && 
        <div className='grid grid-cols-4 justify-items-end mt-12'>
          <div className='col-span-1'></div>

       <div className='col-span-3 justify-self-start'>
        <div className='flex flex-col'>
       <Input.OTP length={4} />

       <span className='text-base text-[#6C7293] font-medium mt-12'>Didn'tget a code? <span className='text-[#377CF6]'>Click to resend</span></span>
       </div>
       </div>

      {/* <div className='col-span-1'></div> */}
        </div>}
        
      

        </div>
 
      </StepCard>
  )
}

export default MobileVerification