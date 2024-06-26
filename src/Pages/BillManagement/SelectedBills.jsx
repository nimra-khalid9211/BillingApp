
import React from 'react'
import { _BillingCondition } from '../../actions/Context/BillingOverviewConditions'
import { Button } from 'antd';
import { isOverdue } from '../../Hooks';

const SelectedBills = () => {

    const {setTab, bills} = _BillingCondition();
    console.log(bills)

    const totalAmount = bills.reduce((total, bill) => {
        const amountString = isOverdue(bill.dueDate)  ? bill.afterDueAmount : bill.amount;

        const amount = parseFloat(amountString.replace(/,/g, ''));
     
        return Math.round((total + amount) * 100) / 100;
    },0);
  return (

    <>
    <div className='w-100 bg-white p-6 rounded-3xl'>

        <span className='text-2xl font-semibold'>Selected Bills ({bills.length})</span>

           {bills.map((x)=>(
            <div key={x.id} className='bg-[#F1F1F1] my-4 rounded-3xl'> 

                <div className='grid grid-cols-5 gap-4  py-7'>

                    <div className='flex flex-col place-self-center'>
                        <span className='text-[#6C7293] text-sm'>
                            Bill Name
                        </span>
                        
                        <span className='text-base font-medium'>
                            {x.billname}
                        </span>
                    </div>

                    <div className='flex flex-col place-self-center'>
                        <span className='text-[#6C7293] text-sm'>
                            Consumer Number
                        </span>
                        
                        <span className='text-base font-medium'>
                            {x.consumerID}
                        </span>
                    </div>

                    <div className='flex flex-col place-self-center'>
                        <span className='text-[#6C7293] text-sm'>
                            Due Date
                        </span>
                        
                        <span className='text-base font-medium'>
                            {x.dueDate}
                        </span>
                    </div>

                    <div className='flex flex-col place-self-center'>
                        <span className='text-[#6C7293] text-sm'>
                            Amount Due
                        </span>
                        
                        <span className='text-base font-medium'>
                            {isOverdue(x.dueDate) ? x.amount : x.afterDueAmount}
                        </span>
                    </div>

                    <div className='flex flex-col place-self-center'>
                        <span className='text-[#F1416C] text-sm underline'>
                            Remove
                        </span>
                    </div>

                </div>

            </div>
            ))}

            <div className='grid grid-cols-2 px-6 text-base font-medium'>

              <div>
                  <span className='text-base text-semibold'>{bills.length} Bills Selected</span>
              </div>

              <div>
                <span className='text-base'>Total Amount</span>

                <span className='rounded-xl ml-6 text-white text-lg py-2 px-4 bg-[#377CF6]'>{totalAmount}</span>

              </div>

            </div>

    </div>

   

    <div className='flex justify-start items-center gap-4 py-3'>

        <Button shape='round' className='border-[#6C7293] text-sm p-0 text-[#6C7293]' onClick={()=>setTab(true)}>Cancel</Button>
        <Button shape='round' className='bg-[#377CF6] text-white text-sm'>Proceed to Payment</Button>
               
    </div>

    </>
  )
}

export default SelectedBills