
import DashboardLayout from "../Components/DashboardLayout";
import IssuedBill from "../Components/CardsUI/issuedBill";
import PaymentStatus from "../Components/CardsUI/paymentStatus";
import TotalBill from "../Components/CardsUI/totalBill";

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
          <div className="grid grid-cols-3 gap-4 ">
            <TotalBill />
            <IssuedBill />
            <div className="flex justify-around flex-col">
            <PaymentStatus status="Paid(02)" amount="26,000"  bgColor="#D8EBE1" borderColor="#24A959" />
            <PaymentStatus status="Unpaid(01)" amount="10,000" bgColor="#FFD5DF" borderColor="#F1416C"/>
            </div>
          </div>
        </div>
        <div>2</div>
      </div>
    </DashboardLayout>
  );
}
