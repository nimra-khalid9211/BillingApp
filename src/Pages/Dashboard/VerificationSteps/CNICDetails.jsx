import { TextField } from '@mui/material';
import { Card, Upload } from 'antd';
import React, { useState } from 'react'
import { BsInboxesFill } from 'react-icons/bs';
import { IoCloudUploadSharp } from 'react-icons/io5';
import { CNICDashes } from '../../../Hooks';
import { StepCard } from '../../../Components/CardLayout';
import { uploadIcon } from '../../../assets/image';

const { Dragger } = Upload;

const CNICDetails = () => {
  const [value, setValue] = useState();

  const handleChange = (e) =>{
    const inputValue = e.target.value;
    const formattedValue = CNICDashes(inputValue);
    setValue(formattedValue);
  }

  return (
    <StepCard title={"CNIC Details"}>

      <div className='flex justify-center items-center mt-16 mb-32'>

      <div className='grid grid-cols-2 gap-3 w-1/2'>

      <div>
          <TextField value={value} onChange={handleChange}  label="CNIC Number" 
          InputProps={{style: { fontSize: '16px', fontWeight:"600" },}} 
          variant="outlined" size='small' fullWidth/>

      </div>

      <div>
  
      <TextField label="Expiry Date" type='month' variant="outlined" size='small' fullWidth
       InputLabelProps={{ shrink: true }} InputProps={{ style: { fontSize: '16px', fontWeight: "600" },
        inputProps: { placeholder: 'MM/YYYY', } }}/> 
      </div>

      <div className='mt-4'>
      <label className='text-base'>Upload Front Image</label>
      <Dragger>
    <p className="ant-upload-drag-icon">
      <img src={uploadIcon} alt="" width={40}/>
    </p>
      <p className="ant-upload-text">
      Drop your image here or <span className='text-[#329DFF]'>Browse</span>
        </p>
    <p className="ant-upload-hint">
     Only <span className='font-bold'>JPG</span> files under <span className='font-bold'>2 MB </span>
    </p>
      </Dragger>
      </div>

      <div className='mt-4'>
        <label className='text-base'>Upload Back Image</label>
      <Dragger>
    <p className="ant-upload-drag-icon">
     
    <img src={uploadIcon} alt="" width={40}/>
    </p>
      <p className="ant-upload-text">
      Drop your image here or <span className='text-[#329DFF]'>Browse</span>
        </p>
    <p className="ant-upload-hint">
     Only <span className='font-bold'>JPG</span> files under <span className='font-bold'>2 MB </span>
    </p>
      </Dragger>
      </div>
      
      </div>

      </div>

    </StepCard>
  )
}

export default CNICDetails