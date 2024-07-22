import { Button, Input, Radio, Tabs } from 'antd'
import React from 'react'
import TransactionRecord from '../../Components/Tables/TransactionRecord';
import BreadCrumbs from '../../UI/BreadCrumbs';
import { _BillingCondition } from '../../actions/Context/BillingOverviewConditions';

const billHeading = [
  {title: "Payment Details"},
  {title: "Consumer ID"},
  {title: "Consumer Name"},
  {title: "Company Code"},
  {title: "Pay Date"},
  {title: "Amount"},
  {title: "Status"},
  {title: "Actions"},
];

const Transactions = () => {
  console.log("from transactions")

  const {transactions, setTransactions} =_BillingCondition();

  const items = () => {
    switch(transactions) { 
      case 1:
        return <TransactionRecord type="all" from="transactions" heading={billHeading}/>;

      case 2:
          return <TransactionRecord type="master" from="transactions" heading={billHeading}/>;

      case 3:
            return <TransactionRecord type="visa" from="transactions" heading={billHeading}/>;

      case 4:
              return <TransactionRecord type="jazzCash" from="transactions" heading={billHeading}/>;

      case 5:
                return <TransactionRecord type="easyPaisa" from="transactions" heading={billHeading}/>;
   
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

  <div>
    {
      items()
    }
  </div>

    </>
  )
}

export default Transactions