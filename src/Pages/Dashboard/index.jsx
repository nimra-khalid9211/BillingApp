import React, { useState } from "react";
import { MyBills } from "../../Components/Tables";
import TotalBill from "../../Components/CardsUI/DashboardCards/totalBill";
import IssuedBill from "../../Components/CardsUI/DashboardCards/issuedBill";
import PaymentStatus from "../../Components/CardsUI/DashboardCards/paymentStatus";
import GoogleChart from "../../Components/CardsUI/DashboardCards/googleChart";
import PaymentMethodCard from "../../Components/CardsUI/DashboardCards/paymentMethodCard";
import TransactionsHistory from "../../Components/CardsUI/DashboardCards/transactionsHistory";
import Paid from "../../assets/image/paid.png"
import Unpaid from "../../assets/image/unpaid.png"
import BreadCrumbs from "../../UI/BreadCrumbs";
import { MdDashboardCustomize } from "react-icons/md";
import { Button } from "antd";
import { AddBillDrawer } from "../../Components/Drawers";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";

const Dashboard = () => {
  const {addBill, setAddBill} = _BillingCondition();
  const [from, setFrom] = useState();
  
  return (
      <>

      <BreadCrumbs icon={<MdDashboardCustomize />} menu={"Dashboard"} 
       btnTitle1={"Quick Pay"} btnEvent1={()=>{setAddBill(true); setFrom("quickPay")}}
       btnTitle2={"Add Bill"}  btnEvent2={()=>{setAddBill(true); setFrom("addBill")}} />

    <div className="container mx-auto bg-[#F6F6F8]">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <div className="grid grid-cols-3 gap-4">
            <TotalBill/>
            <IssuedBill/>
            <div className="flex justify-around flex-col">
              <PaymentStatus
                status="Paid(02)"
                amount="26,000"
                bgColor="#D8EBE1"
                borderColor="#24A959"
                icon={Paid}
              />
              <div className="mt-3">
                <PaymentStatus
                  status="Unpaid(01)"
                  amount="10,000"
                  bgColor="#FFD5DF"
                  icon={Unpaid}
                  borderColor="#F1416C"
                />
              </div>
            </div>
          </div>
          <div>
            <MyBills from="dashboard" />
          </div>
          <div className="mt-10 drop-shadow-xl rounded-[2rem]">
            <GoogleChart />
          </div>
        </div>
        <div className="col-span-2">
          <PaymentMethodCard />
          <TransactionsHistory />
        </div>
      </div>
    </div>

    <AddBillDrawer addBill={addBill} setAddBill={setAddBill} from={from}/>

    </>
  );
};

export default Dashboard;
