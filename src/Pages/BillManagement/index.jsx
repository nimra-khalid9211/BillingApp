import React, { useState } from "react";
import BreadCrumbs from "../../UI/BreadCrumbs";
import { Button, Divider, Radio, Tabs } from "antd";
import Bills from "./Bills";
import BillingOverview from "./BillingOverview";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";
import { AddBillDrawer } from "../../Components/Drawers";
import { FaMoneyBills } from "react-icons/fa6";
import { useLocation } from "react-router-dom";




const BillManagement = () => {
   const {addBill, setAddBill, billingMenu, setBillingMenu} = _BillingCondition();
   const [from, setFrom] = useState(false);
  
  return (
    <>
        <BreadCrumbs
        link={"/bill-management"}
          menu={"Bill Management"}
          icon={<FaMoneyBills />}
          subMenu={"Bills"}
          btnTitle2={"Add Bill"}
          customClass={"w-20"}
          btnEvent2={()=>{setAddBill(true); setFrom("addBill")}}
        />

      {/* <Tabs
        defaultActiveKey="1"
        type="card"
        items={items }
      /> */}

      <div>
        <Button className={`bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2
        ${billingMenu === 2 ? "active-tab-button" : ""} `}
        style={{borderRadius: "12px 0 0 12px"}} onClick={()=>setBillingMenu(2)}>
          Billing Overview
        </Button>


        <Button className={`bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2
        ${billingMenu === 1 ? "active-tab-button" : ""}`} 
        style={{borderRadius: "0 12px 12px 0"}}n onClick={()=>setBillingMenu(1)}>

            Bills Detail

            </Button>
      </div>

      {billingMenu === 2 ? <BillingOverview />  :  <Bills from={"BMB"} />}
      
      <AddBillDrawer addBill={addBill} setAddBill={setAddBill} from={from}/>

    </>
  );
};

export default BillManagement;
