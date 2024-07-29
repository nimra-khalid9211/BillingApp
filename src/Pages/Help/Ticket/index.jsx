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
      ticket === 3 ? "View Ticket" : 
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