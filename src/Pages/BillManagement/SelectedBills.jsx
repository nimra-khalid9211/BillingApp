
import React from 'react'
import { _BillingCondition } from '../../actions/Context/BillingOverviewConditions'
import { Button } from 'antd';
import { formatAmount, isOverdue } from '../../Hooks';
import { useNavigate } from 'react-router-dom';
import { BlueButton, WhiteButton } from '../../UI/Buttons';
import { IoChevronBack } from 'react-icons/io5';
import BreadCrumbs from '../../UI/BreadCrumbs';
import { FaMoneyBills } from 'react-icons/fa6';

const SelectedBills = () => {
    const navigate = useNavigate();

    const {setBills, selectableBills, bills} = _BillingCondition();

    console.log(bills, "selected bills")

    // console.log(selectableBills, "selected bills")

    const totalAmount = bills?.reduce((total, bill) => {
        const {overdue} = isOverdue(bill.dueDate)
        const amountString = overdue  ? bill.afterDueAmount : bill.amount ;

        const amount = parseFloat(amountString.replace(/,/g, ''));
    //  console.log(amount)
        return Math.round((total + amount) * 100) / 100;
    },0);

    const formattedAmount = formatAmount(totalAmount);


  return (

    <>

        <BreadCrumbs
        link={"/bill-manager"}
          menu={"Bill Manager"}
          icon={<FaMoneyBills />}
          subMenu={"Selected Bills"}
          btnIcon2={<IoChevronBack />}
          btnTitle2={"Back"}
          customClass2={"back-btn"}
          btnEvent2={()=>{navigate("/bill-manager")}}
        />

    <div className='w-100 bg-white p-6 rounded-3xl'>

        <div className='flex justify-between items-center'>
        <span className='text-2xl medium'>Selected Bills ({bills?.length})</span>

      
        </div>

           {bills?.map((x)=>{
             const {overdue} = isOverdue(x.dueDate)
             return(
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
                            {overdue ?  x.afterDueAmount : x.amount }
                        </span>
                    </div>

                    <div className='flex flex-col place-self-center'>
                        <span className='text-[#F1416C] text-sm underline'>
                            Remove
                        </span>
                    </div>

                </div>

            </div>
            )})}

            <div className='grid grid-cols-4 px-6 text-base font-medium'>

              <div className='col-span-2'>
                  <span className='text-base text-semibold'>{bills?.length} Bills Selected</span>
              </div>

              <div className='ml-24 text-base text-black font-medium col-span-2'>
              Total Amount =
              <span className="text-[#6c7293] text-sm mx-2">Rs</span>

              <span className="rounded-xl ml-2 text-white text-lg py-2 px-4 bg-[#377CF6]">

                 {formattedAmount.integerPart}
                </span>
        
              </div>

            </div>

    </div>

   

    <div className='fixed bottom-16 flex justify-start items-center py-4'>

        <WhiteButton customClass={"cancel-btn"} clickEvent={()=>{navigate("/bill-manager"); setBills("")}} title={"Cancel"}/>

        <BlueButton customClass={"hover-color"} clickEvent={()=>navigate("/bill-manager/payment-method")} customStyle={"11rem"} title={"Proceed to Payment"}/>
        


        {/* <Button shape='round' className='border-[#6C7293] text-sm p-0 text-[#6C7293]' onClick={()=>{navigate("/bill-management"); setBills("")}}>Cancel</Button> */}
        
        {/* <Button shape='round' className='bg-[#377CF6] text-white text-sm' onClick={()=>navigate("/bill-manager/payment-method")}>Proceed to Payment</Button> */}
               
    </div>

    </>
  )
}

export default SelectedBills