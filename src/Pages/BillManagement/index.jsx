import React, { useState } from "react";
import BreadCrumbs from "../../UI/BreadCrumbs";
import { Button, Divider, Radio, Tabs } from "antd";
import Bills from "./Bills";
import BillingOverview from "./BillingOverview";
import AddBillDrawer from "./AddBillDrawer";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";


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
  const [addBill, setAddBill] = useState(false);


  return (
    <>
      <div className="flex justify-between items-center mt-20">
        <BreadCrumbs
          menu={"Dashboard"}
          subMenu={"Bills"}
        />

        <Button type="primary" shape="round" onClick={() => setAddBill(true)}>
         + Add Bill
        </Button>
      </div>

      <Divider className="mt-3" />

      <Tabs
        defaultActiveKey="1"
        type="card"
        items={items }
      />
      
      <AddBillDrawer addBill={addBill} setAddBill={setAddBill} />

    </>
  );
};

export default BillManagement;
