import { Card } from 'antd'
import React from 'react'
import { MdSupport } from 'react-icons/md'
import { basket, list } from '../../../assets/image';
import Supports from './Supports';
import { _BillingCondition } from '../../../actions/Context/BillingOverviewConditions';


const CreateTicket = () => {
  const {support, setSupport} = _BillingCondition();

  const supportList = [
    {
      icon: <MdSupport size={27} color='var(--blue)'/>,
      heading: "Technical Support",
      subHeading: "Are you having trouble with a HR Software.",
      select: "Select",
      click: ()=> setSupport(1)
    },
    {
      icon: <img src={list} alt="" />,
      heading: "Transactions",
      subHeading: "Have an accounts or billing enquiry that we can help with.",
      select: "Select",
      click: ()=> setSupport(2)
    },
    {
      icon: <img src={basket} alt="" />,
      heading: "General Support",
      subHeading: "Do you have a question about one of our products or services?",
      select: "Select",
      click: ()=> setSupport(3)
    },
  ]

  return (
    <div className='mx-7 my-10'>

      {support === 0 &&  <> 

      <div className='text-base medium'>Select the department you wish to contact.</div>

      {supportList.map((x, index)=>
      <Card key={index} className='bg-[#D5EEFF] border border-[var(--blue)] px-7 mt-5 rounded-3xl'>

        <div className='flex items-center h-20 justify-between'>     

       <div className='flex items-center gap-3'>
       <span>{x.icon}</span>

       <div className='flex flex-col'>
        <span className='text-sm medium text-[var(--blue)]'>{x.heading}</span>
        <span className='text-xs text-[#6C7293]'>{x.subHeading}</span>
       </div>

       </div>

       <div>
        <span className='py-1 px-6 mr-6 rounded-full bg-white  text-[var(--blue)] cursor-pointer'
        style={{border: "1px solid var(--blue)"}} onClick={x.click}>{x.select}</span>
       </div>

       </div>

      </Card>)}
      </>}

          {support === 1 ? <Supports from="1"/> :
           support === 2 ? <Supports from="2"/> :
           support === 3 ? <Supports from="3"/>
          : ""}

    </div>
  )
}

export default CreateTicket