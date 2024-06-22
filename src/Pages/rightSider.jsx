<<<<<<< HEAD
=======

>>>>>>> origin/testing
import DashboardLayout from "../Components/DashboardLayout";
import IssuedBill from "../Components/CardsUI/issuedBill";
import PaymentStatus from "../Components/CardsUI/paymentStatus";
import TotalBill from "../Components/CardsUI/totalBill";
<<<<<<< HEAD
import PaymentMethodCard from "../Components/CardsUI/paymentMethodCard";
import BillsList from "../Components/CardsUI/billsList";
import TransactionsHistory from "../Components/CardsUI/transactionsHistory";
import GoogleChart from "../Components/CardsUI/googleChart";

export default function RightSider() {
  return (
    <DashboardLayout className="container mx-auto pt-5 bg-[#D6D4DE]">
      <div className="py-10 px-5 flex justify-between items-center">
        <div className="font-semibold text-2xl">Good Morning, Nimra Khalid</div>
        <div>
          <div className="flex">
            <div>654</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-4">
=======

export default function RightSider() {
  return (
    <DashboardLayout className="container mx-auto pt-5 bg-[#F6F6F8]">
     <div className="py-10 px-5 flex justify-between items-center">
       <div className="font-semibold text-2xl">Good Morning, Nimra Khalid</div>
       <div>
        <div className="flex">
          <div>654</div>
        </div>

       </div>
     </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2">
>>>>>>> origin/testing
          <div className="grid grid-cols-3 gap-4 ">
            <TotalBill />
            <IssuedBill />
            <div className="flex justify-around flex-col">
<<<<<<< HEAD
              <PaymentStatus
                status="Paid(02)"
                amount="26,000"
                bgColor="#D8EBE1"
                borderColor="#24A959"
              />
              <PaymentStatus
                status="Unpaid(01)"
                amount="10,000"
                bgColor="#FFD5DF"
                borderColor="#F1416C"
              />
            </div>
          </div>
          <div><BillsList/></div>
          <div className="mt-10 drop-shadow-xl rounded-[2rem]">

          <GoogleChart/>
          </div>
        </div>
        <div className="col-span-2">
          <PaymentMethodCard/>
          <TransactionsHistory/>
        </div>
=======
            <PaymentStatus status="Paid(02)" amount="26,000"  bgColor="#D8EBE1" borderColor="#24A959" />
            <PaymentStatus status="Unpaid(01)" amount="10,000" bgColor="#FFD5DF" borderColor="#F1416C"/>
            </div>
          </div>
        </div>
        <div>2</div>
>>>>>>> origin/testing
      </div>
    </DashboardLayout>
  );
}
