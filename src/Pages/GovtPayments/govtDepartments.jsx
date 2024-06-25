import { useNavigate } from "react-router-dom";
import RightArrow from "../../assets/image/arrow-right.png"
import Challan from "../../assets/image/challan.png"

export default function GovtDepartments() {
  const navigate = useNavigate();

  const handleClick = (componentName) => {
    navigate("/tab1", { state: { componentName } });
  };
  return (
    <div className="rounded-[3rem] border">
      <div className="bg-[#377CF6] text-white p-3 mb-10 rounded-t-lg">
        Govt Payments
      </div>
      <div className="w-[60%] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div onClick={() => handleClick("Govt E-Challan")}>
            <div className="flex items-center justify-between border border-[#E8E7EC] rounded-2xl px-5 py-7 mb-5">
              <div className="flex items-center">
                <div className="w-14 h-14">
                <img className="w-full h-full" src={Challan} alt="" />
                </div>
                <div className="ml-2 text-base font-semibold">
                  Govt E-Challan
                </div>
              </div>
           <div className="w-6 h-3">
           <img src={RightArrow} className="w-full h-full" />
           </div>
            </div>
          </div>
          <div onClick={() => handleClick("Bill Payment")}>
            <div className="flex items-center justify-between border border-[#E8E7EC] rounded-2xl px-5 py-7 mb-5">
              <div className="flex items-center">
                <div>icon</div>
                <div className="ml-2 text-base font-semibold">Bill Payment</div>
              </div>
              <div>arrow</div>
            </div>
          </div>
          <div onClick={() => handleClick('Mobile Recharge')}>
            <div className="flex items-center justify-between border border-[#E8E7EC] rounded-2xl px-5 py-7 mb-5">
              <div className="flex items-center">
                <div>icon</div>
                <div className="ml-2 text-base font-semibold">Mobile Recharge</div>
              </div>
              <div>arrow</div>
            </div>
          </div>
          <div onClick={() => handleClick('Insurance Payment')}>
            <div className="flex items-center justify-between border border-[#E8E7EC] rounded-2xl px-5 py-7 mb-5">
              <div className="flex items-center">
                <div>icon</div>
                <div className="ml-2 text-base font-semibold">Insurance Payment</div>
              </div>
              <div>arrow</div>
            </div>
          </div>
          <div onClick={() => handleClick('School Fees')}>
            <div className="flex items-center justify-between border border-[#E8E7EC] rounded-2xl px-5 py-7 mb-5">
              <div className="flex items-center">
                <div>icon</div>
                <div className="ml-2 text-base font-semibold">School Fees</div>
              </div>
              <div>arrow</div>
            </div>
          </div>
          <div onClick={() => handleClick('Internet Bill')}>
            <div className="flex items-center justify-between border border-[#E8E7EC] rounded-2xl px-5 py-7 mb-5">
              <div className="flex items-center">
                <div>icon</div>
                <div className="ml-2 text-base font-semibold">Internet Bill</div>
              </div>
              <div>arrow</div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}
