import React, { useState } from "react";
import { Menu, Tabs } from "antd";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";
import { SelectableBills } from "../../Components/Tables/SelectableBills";
import TransactionRecord from "../../Components/Tables/TransactionRecord";
import { isOverdue } from "../../Hooks";
import { BlueButton } from "../../UI/Buttons";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [current, setCurrent] = useState("all");
  const {selectedBills, setBills} = _BillingCondition()

console.log(selectedBills, "billing overview")

    

  const totalAmount  = selectedBills.reduce((total, bill) => {
    const { overdue } = isOverdue(bill.dueDate); 
    const amountString =
      bill.status === "Unpaid" && overdue
        ? bill.afterDueAmount : bill.amount;
        
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
            
            <div className="border-r border-[#8AC3EC] w-44">Total Amount = 
           
            <span className="text-[#6c7293] text-xs mx-2">Rs</span> 
           
            <span className="font-bold">
                 {totalAmount.toLocaleString()}
            
            </span>
            
            </div>
            
             <BlueButton customClass="hover-color" customStyle={"6rem"}  title={"Pay All"}
              clickEvent={() => { navigate("/bill-manager/selected-bills");setBills(selectedBills);}}>
              Pay All
              </BlueButton>
          
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
