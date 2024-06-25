import React, { useState } from 'react'
import BreadCrumbs from '../../UI/BreadCrumbs'
import { Button, Divider, Radio } from 'antd'
import Bills from './Bills'
import BillingOverview from './BillingOverview'
import AddBillDrawer from './AddBillDrawer'

const BillManagement = () => {
  const [billOverview, setBillOverview] = useState(false);
  const [bills, setBills] = useState(true);
  const [addBill, setAddBill] = useState(false);


  const handleBills = () =>{
    setBills(true);
    setBillOverview(false);
  }

  
  const handleOverviewBills = () =>{
    setBills(false);
    setBillOverview(true);
  }


  return (
    <>

      <div className='flex justify-between items-center mt-20'>

<BreadCrumbs menu={"Dashboard"} subMenu={bills ? "Bills" : "Billing Overview"}/>

<Button type="primary" shape='round' onClick={()=>setAddBill(true)}>Add Bill</Button>

</div>

<Divider className='mt-3'/>

    <div>
    <button className={`${billOverview ? "bg-[#377CF6] text-white"  :"bg-[#E8E7EC]" } py-2 px-6 font-medium rounded-tl rounded-bl hover:bg-[#588fed] hover:text-white`}
    onClick={handleOverviewBills}>Billing Overview
    </button>
    <button className={`${bills ? "bg-[#377CF6] text-white " : "bg-[#E8E7EC]"} py-2 px-6 font-medium rounded-tr rounded-br hover:bg-[#588fed] hover:text-white`} onClick={handleBills}>My Bills</button>

    </div>

    <AddBillDrawer addBill ={addBill} setAddBill={setAddBill}/>
    
    {bills && <Bills from={"BMB"}/>}

    {billOverview && <BillingOverview/>}

     
    </>
  )
}

export default BillManagement