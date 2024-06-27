import React, { useState } from "react";
import BreadCrumbs from "../../UI/BreadCrumbs";
import { Button, Divider, Radio } from "antd";
import Bills from "./Bills";
import BillingOverview from "./BillingOverview";
import AddBillDrawer from "./AddBillDrawer";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";

const BillManagement = () => {
  const { tab, setTab } = _BillingCondition();

  const [addBill, setAddBill] = useState(false);

  const handleBills = () => {
    setTab(!tab);
  };

  return (
    <>
      <div className="flex justify-between items-center mt-20">
        <BreadCrumbs
          menu={"Dashboard"}
          subMenu={tab ? "Bills" : "Billing Overview"}
        />

        <Button type="primary" shape="round" onClick={() => setAddBill(true)}>
         + Add Bill
        </Button>
      </div>

      <Divider className="mt-3" />

      <div>
        <button
          className={`${
            !tab ? "bg-[#377CF6] text-white" : "bg-[#E8E7EC]"
          } py-2 px-6 font-medium rounded-tl rounded-bl hover:bg-[#588fed] hover:text-white`}
          onClick={handleBills}
        >
          Billing Overview
        </button>
        <button
          className={`${
            tab ? "bg-[#377CF6] text-white " : "bg-[#E8E7EC]"
          } py-2 px-6 font-medium rounded-tr rounded-br hover:bg-[#588fed] hover:text-white`}
          onClick={handleBills}
        >
          My Bills
        </button>
      </div>

      <AddBillDrawer addBill={addBill} setAddBill={setAddBill} />

      {tab && <Bills from={"BMB"} />}

      {!tab && <BillingOverview />}
    </>
  );
};

export default BillManagement;
