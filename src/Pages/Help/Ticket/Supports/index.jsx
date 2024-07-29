import { TextField } from '@mui/material'
import { Divider } from 'antd'
import React, { useState } from 'react'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import UploadFile from '../../../../UI/UploadFile'
import { _BillingCondition } from '../../../../actions/Context/BillingOverviewConditions'
import { TicketModel } from '../../../../Components/Modals'

const Supports = ({from}) => {
  const {setSupport} = _BillingCondition();

  return (
    <div className='mx-7'>
    
    <div className='h-24 mb-7 border border-[var(--blue)] rounded-3xl bg-[#DBF0FF] grid grid-cols-5 content-center'>

      <div className='ml-10 col-span-2 self-center'><IoChevronBackCircleOutline role='button' size={35} onClick={()=>setSupport(0)} color="var(--blue)"/></div>

      <div className='col-span-2 text-xl medium text-[var(--blue)] self-center'>
        {from === '1' ? "Technical Support" :
         from === '2' ? "Transaction Support" :
         from === '3' ? "General Support" :
         ""
        }
      </div>

    </div>

    <Divider/>

    <div>
    
    <span className='text-base medium'>Please fill out this form to create a ticket.</span>

    <div className='grid grid-cols-3'>

      <div className='col-span-2 mt-10'>
      <TextField
          label="Subject"
          size="small"
          fullWidth
        />
      </div>

      <div className='col-span-2 mt-10'>
      <TextField
          label="Description"
          size="small"
          fullWidth
          multiline
          rows={4}
          InputProps={{
            style: {
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "10px",
            },
          }}
        />
      </div>

      <div className='col-span-2 mt-10'>

          <span className='text-sm text-[var(--blue)] medium'>Upload Screenshot</span>

     <UploadFile/>
      </div>

    </div>

    </div>
    
    </div>
  )
}

export default Supports