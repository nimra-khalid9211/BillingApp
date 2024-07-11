import React, { useState } from "react";
import BreadCrumbs from "../../UI/BreadCrumbs";
import { Button } from "antd";
import Bills from "./Bills";
import BillingOverview from "./BillingOverview";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";
import { AddBillDrawer } from "../../Components/Drawers";
import { FaMoneyBills } from "react-icons/fa6";
import {blueBill} from '../../assets/image/index'

const BillManagement = () => {
  const { addBill, setAddBill, billingMenu, setBillingMenu } = _BillingCondition();
  const [from, setFrom] = useState(false);

  const getSubMenu = () => {
    switch (billingMenu) {
      case 1:
        return "Overview";
      case 2:
        return "Added Bills";
      default:
        return "Bills";
    }
  };

  return (
    <>
           {/* <BreadCrumbs link={"/dashboard"} menu={"Dashboard"} 
      
       btnTitle1={"Quick Pay"} customClass="first-btn" btnEvent1={()=>{setAddBill(true); setFrom("quickPay")}}
       btnTitle2={"Add Bill"} customClass2="hover-color"  btnEvent2={()=>{setAddBill(true); setFrom("addBill")}} /> */}



      <BreadCrumbs
        link={"/bill-manager"}
        menu={"Bill Manager"}
        subMenu={getSubMenu()}
        btnTitle2={"Add Bill"}
        customClass2="hover-color"
        btnEvent2={() => { setAddBill(true); setFrom("addBill"); }}
      />

      <div>
        <Button
          className={`bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2 ${billingMenu === 1 ? "active-tab-button no-hover" : ""}`}
          style={{ borderRadius: "12px 0 0 12px" }}
          onClick={() => setBillingMenu(1)}
        >
          Overview
        </Button>

        <Button
          className={`bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2 ${billingMenu === 2 ? "active-tab-button no-hover" : ""}`}
          style={{ borderRadius: "0 12px 12px 0" }}
          onClick={() => setBillingMenu(2)}
        >
         Added Bills
        </Button>
      </div>

      {billingMenu === 1 ? <BillingOverview /> : <Bills from={"BMB"} />}

      <AddBillDrawer addBill={addBill} setAddBill={setAddBill} from={from} />
    </>
  );
};

export default BillManagement;
