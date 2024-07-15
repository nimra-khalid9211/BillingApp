import PaymentReciept from "../../Components/CardsUI/PaymentReciept";
import { MobileTopUpReceipt } from "../../data/tables";
import Recharge from "../../assets/image/recharge.png";
import { Link } from "react-router-dom";

export default function Receipt() {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-white p-5 ltr rounded-s-[3rem]">
        <div className="border-b-2 p-2 font-semibold text-lg mb-10">
          Mobile Top Up Successful
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className="mt-20">
            <img src={Recharge} alt="" className="w-36 h-28" />
          </div>
          <div className="text-[#377CF6] font-bold text-xl">
            Recharge Successfull
          </div>
          <p className="w-96 mt-5 text-center text-[#6C7293]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
          <Link to='/mobile-top-up' className="text-[#377CF6] py-3 px-7 rounded-[3rem] border border-[#377CF6] mt-5">
            Back to Mobile Top up
          </Link>
        </div>
      </div>
      <div className="bg-[#F8F9FD] p-5 rtl rounded-s-[3rem]">
        <div className="border-b-2 p-2 font-semibold text-lg mb-10">
          Payment Receipt
        </div>
        <div className="w-3/5 mx-auto mb-2">
          <PaymentReciept from="Receipt" bill={MobileTopUpReceipt} />
        </div>
      </div>
    </div>
  );
}
