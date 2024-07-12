import { Button, Input, Radio, Tabs } from 'antd'
import React, { useState } from 'react'
import TransactionRecord from '../../Components/Tables/TransactionRecord';
import BreadCrumbs from '../../UI/BreadCrumbs';
import { GrTransaction } from 'react-icons/gr';
import { IoSearchOutline } from 'react-icons/io5';
import { _BillingCondition } from '../../actions/Context/BillingOverviewConditions';


const Transactions = () => {

  const {transactions, setTransactions} =_BillingCondition();
  
  const [showSearch, setShowSearch] = useState(false);


  const items = () => {
    switch(transactions) { 
      case 1:
        return <TransactionRecord type="all"/>;

      case 2:
          return <TransactionRecord type="master" from="transactions"/>;

      case 3:
            return <TransactionRecord type="visa" from="transactions"/>;

      case 4:
              return <TransactionRecord type="jazzCash" from="transactions"/>;

      case 5:
                return <TransactionRecord type="easyPaisa" from="transactions"/>;
   
      }
     };
  
  const btnTitle = [
      {
        id:1,
        title: "All Transactions",
        clickEvent: ()=>setTransactions(1),
        style: "12px 0 0 12px"
      },
      {
        id:2,
        title: "Mastercard",
        clickEvent: ()=>setTransactions(2),
        style: "0"
      },
      {
        id:3,
        title: "Visa",
        clickEvent: ()=>setTransactions(3),
        style: "0"
      },
      {
        id:4,
        title: "JazzCash",
        clickEvent: ()=>setTransactions(4),
        style: "0"
      },
      {
        id:5,
        title: "Easypaisa",
        clickEvent: ()=>setTransactions(5),
        style: "0 12px 12px 0"
      },
    ]
   
  return (
    <>

    <BreadCrumbs menu={"Transactions"}/>

  <div className='flex justify-between items-cent'>


  <div>
    {btnTitle.map((x)=>(

        <Button key={x.id}
          className={`bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2 ${transactions === x.id ? "active-tab-button tab-button-shadow no-hover" : ""}`}
          style={{ borderRadius: x.style }}
          onClick={x.clickEvent}
          >
         {x.title}
        </Button>

))}

  </div>

  <div className='flex justify-end items-center bg-white  rounded-full'>
      {showSearch && <Input  placeholder="Search"   className='rounded-full p-2 border-none  mx-1 transition-all duration-300'
          style={{ boxShadow: 'none' }}
          //  suffix={<IoSearchOutline size={15}/>}
           />}

              <div className='p-3 mx-1 font-lg'>
              <IoSearchOutline size={20} color='#6C7293' onClick={()=>setShowSearch(!showSearch)}/>
              </div>

    </div>

  </div>

  <div>
    {
      items()
    }
  </div>

               

    </>
  )
}

export default Transactions