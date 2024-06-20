
import DashboardLayout from "../Components/DashboardLayout";
import IssuedBill from "../Components/issuedBill";
import PaymentStatus from "../Components/paymentStatus";
import TotalBill from "../Components/totalBill";

export default function DashboardPage() {
  return (
    <DashboardLayout className="container mx-auto pt-5 bg-[#F6F6F8]">
      <div className="grid grid-cols-4 gap-4">
        {/* <div>
          <DashboardSideBar />
        </div> */}
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
