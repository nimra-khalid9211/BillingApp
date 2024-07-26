import React, { useState } from 'react'
import CardLayout from '../../../Components/CardLayout'
import {  Input } from 'antd'
import { IoArrowBack, IoChevronBack, IoSearchOutline } from 'react-icons/io5'
import { FaAngleDown } from 'react-icons/fa6'
import { BlueButton } from '../../../UI/Buttons'
import TicketTable from './TicketTable'
import CreateTicket from './CreateTicket'


const Ticket = () => {

    const [ticket, setTicket] = useState(1);

  return (

    <CardLayout from={"nonEdit"} linkTitle={ticket > 1 ? <span className='flex items-center'><IoChevronBack size={15}/> Back</span>
       : ""} onClick={()=>setTicket(ticket-1)}
    title={
      ticket === 1 ? "Tickets" :
      ticket === 2 ? "Create Ticket" : 
      ""
    }
    >

     {ticket === 1 && <div className='flex justify-between items-center pb-4 border-b mx-7 mt-10'>

       <div className='flex gap-3'>

       <div>
        <Input size="large" placeholder="Search" className='text-sm rounded-2xl' suffix={<IoSearchOutline />} />
        </div>

        <div className='flex justify-between px-3 text-[#a59a9a] rounded-2xl w-48 items-center border border-[#d9d9d9]'>
            <span className='text-sm'>Sort By</span>
            <span><FaAngleDown size={18}/></span>
        </div>

       </div>

       <div>
        <BlueButton title={"Create Ticket"} customClass={'hover-color'} clickEvent={()=>setTicket(2)}/> 
       </div>

        </div>}

        {
            ticket === 1 ? <TicketTable />  : 
            ticket === 2 ? <CreateTicket /> :
            ""
        }

        

    </CardLayout>
  )
}

export default Ticket