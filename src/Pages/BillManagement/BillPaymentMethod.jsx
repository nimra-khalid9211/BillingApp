import { Button, Card, Collapse } from 'antd'
import React, { useState } from 'react'
import { CardData } from '../../data/cardData'
import { _BillingCondition } from '../../actions/Context/BillingOverviewConditions'
import { IoChevronDownCircleOutline } from 'react-icons/io5'
import { isOverdue } from '../../Hooks'
import { useNavigate } from 'react-router-dom'
import { PaymentSuccessfullModal } from '../../Components/Modals'

const BillPaymentMethod = () => {
    const {bills} = _BillingCondition();
    const navigate = useNavigate();

    const [receiptModal, setReceiptModal] = useState(false);

    const totalAmount = bills?.reduce((total, bill) => {
        const amountString = isOverdue(bill.dueDate)  ? bill.afterDueAmount : bill.amount;

        const amount = parseFloat(amountString.replace(/,/g, ''));
     
        return Math.round((total + amount) * 100) / 100;
    },0);

  return (

    <Card className='mt-3 rounded-3xl' bordered={false}>

    <div className='grid grid-cols-12 w-full '>
    
    <div className='col-span-8 px-8 bg-white py-3 rounded-tl-3xl rounded-bl-3xl'>

      <span className='text-xl font-medium'>Payment Method</span>
      <div className='border-b mt-2 border-1'></div>

      <div className='mt-6'>
        <span className='text-base font-medium'>Choose the Card you want to use for this Payment</span>

     <div className='grid grid-cols-5 gap-2 mt-5'>
     { CardData.map((x, index)=>( 

         <div key={index} className={`col-span-2 flex justify-between mt-1 items-start py-2 px-4 rounded-3xl border ${x.default ? "border-[#377CF6] bg-white" :"border-[#E8E7EC] bg-[#F8F8F8]"}`}>

            <div className='flex'>
                {x.icon}

                <div className='pl-3'>

                <div className="font-semibold w-[160px] text-medium text-base">{x.title}</div>
                <div className="text-xs  text-[#377CF6]">{x.default ? "Default" : "Set as Default" }</div>

                </div>

                </div>

                <input type='radio' checked={x.default ? true : false}/>


                </div>
        ))}

</div>


      </div>

      <div className='mt-10 gap-3'>


        <Button className='mr-2 border-[#6C7293] text-[#6C7293]'
     style={{background: "transparent", padding:"5px 30px"}} shape='round'
     onClick={()=>{navigate("/bill-management/selected-bills")}}>
      Cancel
      </Button>

      <Button className='bg-[#377CF6] text-white ml-2' style={{ padding:"5px 20px"}} shape='round' onClick={()=>setReceiptModal(true)}>
        {`Pay Rs. ${totalAmount ? totalAmount?.toLocaleString() :""}`}
        </Button>
  

        </div>

    </div>

    <div className='col-span-4 px-8 py-3 bg-[#F8F9FD] rounded-tr-3xl rounded-br-3xl'>
        
      <span className='text-xl font-medium'> Payment Details</span>
      
      <div className='border-b mt-2 border-1'></div>

      <div className='mt-6'>

        <div className='flex justify-between items-center text-base font-medium px-1'>

        <div className='flex items-center gap-2'>    
      <IoChevronDownCircleOutline size={20} color='#6C7293'/>

      <span>Total Payable Amount</span>
      </div>

      <span>{bills && bills.length}</span>

      </div>

      <div className='border-b mt-2 border-1'></div>

      {bills && bills.map((x,index)=>(  
      <div key={index} className='flex justify-between items-center bg-[#EBF7FF] rounded-xl border-[#DBF0FF] mt-2 py-2 px-4'>

        <span className='text-sm font-semibold'>{x.billname}</span>

        <span className='text-lg font-semibold'>{isOverdue(x.dueDate) ? x.afterDueAmount : x.amount}</span>
      </div>))}

        <div className='flex items-center justify-between mt-3 p-4 rounded-xl border-[#377CF6] border-2 text-[#377CF6]'>

        <span className='text-base font-medium'>Total Payable Amount</span>

        <span  className='text-2xl font-medium'>{totalAmount?.toLocaleString()}</span>

        </div>
 
        </div>

    </div>

    </div>

    <PaymentSuccessfullModal receiptModal={receiptModal} setReceiptModal={setReceiptModal} bills={bills}/>

    </Card>
  )
}

export default BillPaymentMethod