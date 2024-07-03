import { TextField } from '@mui/material';
import { Card, Input } from 'antd'
import React, { useState } from 'react'


const MobileVerification = () => {
  const [verify, setVerify] = useState(false);
  const [hideVerify, setHideVerify] = useState(true);

  return (
    <Card className='h-96'>
      <div className='m-5 pb-2 border-b-2 text-lg font-medium'>Mobile Verification</div>

        <div className='w-4/5 mt-20'>

        <div className='flex flex-col items-center justify-center'>

        <div className='flex items-center gap-6'>
        <div className='w-80'>
        <TextField  label="Mobile" InputProps={{style: { fontSize: '16px', fontWeight:"600" },}} variant="outlined" size='small' fullWidth/>
        </div>

        {hideVerify && <span className='underline text-[#329DFF] w-[7rem]' role='button' onClick={()=>{setVerify(true);setHideVerify(false)}}>Verify Now</span>}
        </div>

        {verify && 
        <div>
        <Input.OTP length={8} />
        </div>}

        </div>

        </div>
 
      </Card>
  )
}

export default MobileVerification