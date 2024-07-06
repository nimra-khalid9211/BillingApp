import React, { useState } from "react";
import BreadCrumbs from "../../UI/BreadCrumbs";
import { Button, Divider, Radio, Tabs } from "antd";
import Bills from "./Bills";
import BillingOverview from "./BillingOverview";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";
import { AddBillDrawer } from "../../Components/Drawers";
import { FaMoneyBills } from "react-icons/fa6";
import { useLocation } from "react-router-dom";


const items = [
  {
    key: '2',
    label: 'Billing Overview',
    children: <BillingOverview />,
  },
  {
    key: '1',
    label: 'My Bills',
    children: <Bills from={"BMB"} />,
  }
];


const BillManagement = () => {
   const {addBill, setAddBill} = _BillingCondition();
   const [from, setFrom] = useState(false);
  
  return (
    <>
        <BreadCrumbs
        link={"/bill-management"}
          menu={"Bill Management"}
          icon={<FaMoneyBills />}
          subMenu={"Bills"}
          btnTitle2={"Add Bill"}
          btnEvent2={()=>{setAddBill(true); setFrom("addBill")}}
        />

      <Tabs
        defaultActiveKey="1"
        type="card"
        items={items }
      />
      
      <AddBillDrawer addBill={addBill} setAddBill={setAddBill} from={from}/>

    </>
  );
};

export default BillManagement;
