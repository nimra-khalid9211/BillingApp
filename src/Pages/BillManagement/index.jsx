import React, { useState } from "react";
import BreadCrumbs from "../../UI/BreadCrumbs";
import { Button } from "antd";
import Bills from "./Bills";
import BillingOverview from "./BillingOverview";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";
import { AddBillDrawer } from "../../Components/Drawers";

const BillManagement = () => {
  const [ billingMenu, setBillingMenu ] = useState(1);

  const { addBill, from, setFrom, setAddBill } = _BillingCondition();
  // const [from, setFrom] = useState(false);
  // console.log(from, "frm use bill maangement indx")

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
        <BreadCrumbs
        menu={"Bill Manager"}
        link={"/bill-manager"}
        subMenu={getSubMenu()}
        btnTitle2={"Add Bill"}
        customClass2="hover-color"
        btnEvent2={() => { setAddBill(true); setFrom("addBill")}} />

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
