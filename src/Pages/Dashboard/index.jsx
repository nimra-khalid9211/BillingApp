import React, { useState } from "react";
import TotalBill from "../../Components/CardsUI/DashboardCards/totalBill";
import IssuedBill from "../../Components/CardsUI/DashboardCards/issuedBill";
import PaymentStatus from "../../Components/CardsUI/DashboardCards/paymentStatus";
import PaymentMethodCard from "../../Components/CardsUI/DashboardCards/paymentMethodCard";
import TransactionsHistory from "../../Components/CardsUI/DashboardCards/transactionsHistory";
import Paid from "../../assets/image/paid.png";
import Unpaid from "../../assets/image/unpaid.png";
import BreadCrumbs from "../../UI/BreadCrumbs";
import { MdDashboardCustomize } from "react-icons/md";
import { AddBillDrawer } from "../../Components/Drawers";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";
import VerificationSteps from "./VerificationSteps";
import CompleteProfile from "./CompleteProfile";
import { SelectableBills } from "../../Components/Tables/SelectableBills";
import GoogleChart from "../../Components/CardsUI/DashboardCards/googleChart";
import { blueDashboard} from '../../assets/image/index'

const Dashboard = () => {
  const {addBill, setAddBill, checkVerfication} = _BillingCondition();
  const [from, setFrom] = useState();

  return (
      <div className="">

    {!checkVerfication ? <VerificationSteps/>  : 
    <>
     <BreadCrumbs menu={"Dashboard"} 
      
       btnTitle1={"Quick Pay"} customClass="first-btn" btnEvent1={()=>{setAddBill(true); setFrom("quickPay")}}
       btnTitle2={"Add Bill"} customClass2="hover-color"  btnEvent2={()=>{setAddBill(true); setFrom("addBill")}} />

     <div>
      <CompleteProfile />
     </div> 
     
          <div className="grid grid-cols-7 gap-4">

            <div className="col-span-5">
             
              <div className="grid grid-cols-3 gap-4">
                <TotalBill />
                <IssuedBill />

                <div className="flex justify-around flex-col">

                  <PaymentStatus
                    status="Paid(02)"
                    amount= {2600.98}
                    bgColor="#D8EBE1"
                    borderColor="#24A959"
                    icon={Paid}
                  />

                  <div className="mt-3">
                    <PaymentStatus
                      status="Unpaid(01)"
                      amount={1000.34}
                      bgColor="#FFD5DF"
                      icon={Unpaid}
                      borderColor="#F1416C"
                    />
                  </div>

                </div>

              </div>

              <div>
                <SelectableBills from="dashboard" type="all" />
              </div>

              <div className="drop-shadow-xl">
              <GoogleChart/>
              </div>

            </div>

            <div className="col-span-2">

              <div>
                <PaymentMethodCard />
              </div>

              <div className="">
                <TransactionsHistory />
              </div>

            </div>

          </div>
        </>
      }

      <AddBillDrawer addBill={addBill} setAddBill={setAddBill} from={from} />
      
    </div>
  );
};

export default Dashboard;
