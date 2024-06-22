
import DashboardLayout from "../Components/DashboardLayout";
import IssuedBill from "../Components/CardsUI/issuedBill";
import PaymentStatus from "../Components/CardsUI/paymentStatus";
import TotalBill from "../Components/CardsUI/totalBill";
import PaymentMethodCard from "../Components/CardsUI/paymentMethodCard";
import BillsList from "../Components/CardsUI/billsList";
import TransactionsHistory from "../Components/CardsUI/transactionsHistory";
import GoogleChart from "../Components/CardsUI/googleChart";



export default function RightSider() {
  return (
    <div className="container mx-auto pt-5 bg-[#F6F6F8]">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-4">
            <TotalBill />
            <IssuedBill />
            <div className="flex justify-around flex-col">
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
          <div>
            <BillsList />
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
}
