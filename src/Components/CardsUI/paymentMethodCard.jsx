import CreditCard from "../../assets/image/Bitmap.svg"
import Easypaisa from "../../assets/image/easypaisa.svg"
import VisaCard from "../../assets/image/visacard.svg"
export default function PaymentMethodCard(){
    return(
        <div className="rounded-[25px] border border-[#377CF6] bg-[#DBF0FF] p-5">
            <div className="flex justify-between items-center text-[#377CF6] ">
                <div className="font-semibold">Payment Method (03)</div>
                <div className="underline">View All</div>
            </div>
            <div className="flex items-center bg-white rounded-[25px] border border-[#377CF6] p-3 mt-5">
                <img src={CreditCard} alt="" />
                <div className="ml-5">
                    <div className="font-semibold w-[70%] text-base">Master card ending with 5231</div>
                    <div className="text-sm text-[#377CF6]">Default</div>
                </div>
            </div>
            <div className="flex items-center bg-white rounded-[25px] border border-[#377CF6] p-3 mt-5">
                <img src={VisaCard} alt="" />
                <div className="ml-5">
                    <div className="font-semibold w-[70%] text-base">Visa card ending with 5231</div>
                    <div className="text-sm text-[#377CF6]">Set as Default</div>
                </div>
            </div>
            <div className="flex items-center bg-white rounded-[25px] border border-[#377CF6] p-3 mt-5">
                <img src={Easypaisa} alt="" />
                <div className="ml-5">
                    <div className="font-semibold w-[70%] text-base">Easypaisa Account with 5231</div>
                    <div className="text-sm text-[#377CF6]">Set as Default</div>
                </div>
            </div>
            <div className="flex items-center mt-5 font-semibold cursor-pointer">
                <div className="text-[#377CF6]">+</div>
                <div className=" text-[#377CF6] ml-2 text-base">Add Payment Method</div>
            </div>
        </div>
    )
}