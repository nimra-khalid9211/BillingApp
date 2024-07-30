import React, { useState } from 'react'
import CardLayout from '../../../Components/CardLayout'
import {  Input } from 'antd'
import { IoArrowBack, IoChevronBack, IoSearchOutline } from 'react-icons/io5'
import { FaAngleDown } from 'react-icons/fa6'
import { BlueButton, WhiteButton } from '../../../UI/Buttons'
import TicketTable from './TicketTable'
import CreateTicket from './CreateTicket'
import { _BillingCondition } from '../../../actions/Context/BillingOverviewConditions'
import { TicketModel } from '../../../Components/Modals'
import ViewTicket from './ViewTicket'


const Ticket = () => {

    const [ticket, setTicket] = useState(1);
    const {support, setSupport} = _BillingCondition();
    const [successModel, setSuccessModel] = useState(false);

  return (

    <>

    <CardLayout from={"nonEdit"} linkTitle={ticket > 1 && support === 0 ? <span className='flex items-center' onClick={()=>setTicket(1)}><IoChevronBack size={15}/> Back</span>
      : ticket === 1 ?  
      <BlueButton title={"Create Ticket"} customClass={'hover-color'} clickEvent={()=>setTicket(2)}/> 
      : ""}
    title={
      ticket === 1 ? "Tickets" :
      ticket === 2 ? "Create Ticket" : 
      ticket === 3 ? 
      <div className='flex justify-between items-center w-4/5'>

      <div>
      <span className='text-xs text-[#8d92ab]'>Subject:</span> <span className='w-60 truncate text-sm text-black'>Bill Management Module Giving Error</span>
      </div>
        
        <div>
        <span className='text-xs text-[#8d92ab]'>Dept:</span> <span className='text-sm text-black'>Technical Support </span>
        </div>

        <div>
        <span className='text-xs text-[#8d92ab]'>Ticket ID:</span> <span className='text-sm text-black'>#302-02</span>
        </div>

          <div>
          <span className='border px-4 py-1 text-sm rounded-lg text-[#6c7293] border-[#6c7293]'>Open</span>
          </div>
        
      </div> 
      : 
      ""
    }
    >

        {
            ticket === 1 ? <TicketTable setTicket={setTicket}/>  : 
            ticket === 2 ? <CreateTicket /> :
            ticket === 3 ? <ViewTicket /> :
            ""
        }
    </CardLayout>

  {support > 0 &&  <div className='my-10'>
      <WhiteButton title={"Cancel"} marginRight={"1rem"} clickEvent={()=>setSupport(0)} customClass={"cancel-btn"}/> 
      <BlueButton title={"Create Ticket"} customClass={"hover-color"} clickEvent={()=>setSuccessModel(true)}/> 
    </div>}

    <TicketModel setSuccessModel={setSuccessModel} successModel={successModel} setTicket={setTicket} setSupport={setSupport}/>

    </>
  )
}

export default Ticket