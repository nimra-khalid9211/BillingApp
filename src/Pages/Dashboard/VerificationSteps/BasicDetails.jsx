import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Image } from 'antd'
import React from 'react'
import { StepCard } from '../../../Components/CardLayout'

const BasicDetails = () => {
  
  return (
   <StepCard title={"Basic Details"}>

      <div className='flex justify-center items-center'>

      <div className='w-1/2'> 

      <div  className='flex flex-col justify-center items-center'>

        <div>
        <Image className='rounded-full'
        width={100} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        </div>

        <div className='grid grid-cols-2 gap-4 w-full my-10'>
          
          <div className='mb-4'>
          <TextField  label="First Name" InputProps={{style: { fontSize: '16px', fontWeight:"600" },}} variant="outlined" size='small' fullWidth/>
          </div>

          <div className='mb-4'>
          <TextField  label="Last Name" InputProps={{style: { fontSize: '16px', fontWeight:"600" },}} variant="outlined" size='small' fullWidth/>
          </div>

          <div className='mb-4'>
            <TextField  label="Date of Birth" type='date' variant="outlined" size='small' fullWidth
             InputLabelProps={{ shrink: true, }} InputProps={{  inputProps: { placeholder: '',  }, style: { fontSize: '16px', fontWeight:"600" }, }}/>
            </div>

          <div className='mb-4'>

          <FormControl size='small' fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>

          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Gender">
          <MenuItem>Male</MenuItem>
          <MenuItem>Female</MenuItem>
          <MenuItem>Other</MenuItem>
          </Select>

          </FormControl>

           </div>

          <div className='col-span-2 mb-4'>
          <TextField  label="Address" InputProps={{style: { fontSize: '16px', fontWeight:"600" },}} variant="outlined" size='small' fullWidth/>
          </div>

          <div className='mb-4'>
        <FormControl size='small' fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>

        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="City"
        MenuProps={{ PaperProps: { style: { maxHeight: 200, },},}}>

        <MenuItem>Sialkot</MenuItem>
        <MenuItem>Lahore</MenuItem>
        <MenuItem>Karachi</MenuItem>
        <MenuItem>Islamabad</MenuItem>
        <MenuItem>Rawalpindi</MenuItem>
        <MenuItem>Hyderabad</MenuItem>
        <MenuItem>Jhelum</MenuItem>
        <MenuItem>Gujar Khan</MenuItem>
        <MenuItem>Peshawar</MenuItem>

        </Select>

        </FormControl>
         </div>

         <div className='mb-4'>
        <FormControl size='small' fullWidth>
        <InputLabel id="demo-simple-select-label">State</InputLabel>

        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="State">
        <MenuItem>Punjab</MenuItem>
        <MenuItem>Sindh</MenuItem>
        <MenuItem>Khyber Pakhtunkhawa</MenuItem>
        <MenuItem>Balochistan</MenuItem>
        <MenuItem>Gilgit Baltistan</MenuItem>
        </Select>

        </FormControl>
         </div>

        </div>

      </div>

      </div>

      </div>
      
    </StepCard>
  )
}

export default BasicDetails