import React from "react";
import TotalBill from "../../Components/CardsUI/totalBill";
import IssuedBill from "../../Components/CardsUI/issuedBill";
import PaymentStatus from "../../Components/CardsUI/paymentStatus";
import GoogleChart from "../../Components/CardsUI/googleChart";
import PaymentMethodCard from "../../Components/CardsUI/paymentMethodCard";
import TransactionsHistory from "../../Components/CardsUI/transactionsHistory";
import { MyBills } from "../../Components/Tables";
import Paid from "../../assets/image/paid.png";
import Unpaid from "../../assets/image/unpaid.png";

const Dashboard = () => {
  return (
    <div className="container mx-auto pt-5 bg-[#F6F6F8]">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <div className="grid grid-cols-3 gap-4">
            <TotalBill />

            <IssuedBill />

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
            {/* <BillsList /> */}

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
  );
};

export default Dashboard;
