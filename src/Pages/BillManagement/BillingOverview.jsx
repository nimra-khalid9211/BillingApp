import React, { useState } from "react";
import { Menu, Tabs } from "antd";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";
import { SelectableBills } from "../../Components/Tables/SelectableBills";
import TransactionRecord from "../../Components/Tables/TransactionRecord";

const items = [
  {
    label: "All Bills",
    key: "all",
  },
  {
    label: "Electricity",
    key: "electricity",
  },
  {
    label: "Gas",
    key: "gas",
  },
  {
    label: "Water",
    key: "water",
  },
  {
    label: "Internet",
    key: "internet",
  },
];

const BillingOverview = () => {
  const [current, setCurrent] = useState("all");
  const {selectedBills, setSelectedBills} = _BillingCondition()
  
  const totalAmount = selectedBills.reduce((total, bill) => {
    const amountString =
      bill.status === "unpaid" && isOverdue(bill.dueDate)
        ? bill.afterDueAmount
        : bill.amount;
    const amount = parseFloat(amountString.replace(/,/g, ""));
    return Math.round((total + amount) * 100) / 100;
  }, 0);


  const onClick = (e) => {
    // console.log('click ', e);
    setCurrent(e.key);
  };

  const renderContent = () => {
    switch (current) {
      case "all":
        return <SelectableBills type="all" />;
      case "electricity":
        return <TransactionRecord type="electricity" from="billingOverview" />;
      case "gas":
        return <TransactionRecord type="gas" from="billingOverview" />;
      case "water":
        return <TransactionRecord type="water" from="billingOverview" />;
      case "internet":
        return <TransactionRecord type="internet" from="billingOverview" />;
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <>
      <div className="mt-10">
        <div className="grid grid-cols-2">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            className="custom-menu text-base font-medium my-4"
            mode="horizontal"
            items={items}
          />
         {
          selectedBills.length > 0 && (
            <div className="w-[480px] flex items-center justify-between bg-[#DBF0FF] border border-[#176BA3] rounded-2xl p-5 text-xs font-semibold place-self-end">
            <div className="border-r border-[#8AC3EC] w-28">{selectedBills.length} Bill{selectedBills.length >=2 ? "s" : ""} Selected</div>
            <div className="border-r border-[#8AC3EC] w-44">Total Amount =  {totalAmount.toLocaleString()}</div>
            <button className="bg-[#176BA3] text-white py-1 px-2 rounded-2xl w-20">Pay All</button>
          </div>
          )
         }
        </div>
        <div className="mt-4">{renderContent()}</div>
      </div>
    </>
  );
};

export default BillingOverview;
