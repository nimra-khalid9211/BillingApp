import { useLocation } from "react-router-dom";

export default function MobileTopUpBeneficiary() {
    const location = useLocation().state.x;
    // const componentName = location.state?.componentName || "Default Component Name";
    // const componentNumber = location.state?.componentNumber || "Default Component Name";
    // const componentOperator = location.state?.componentOperator || "Default Component Name";
    // console.log(location);
  return (
    <div className="bg-white w-[30%] p-5 rounded-2xl mt-10 drop-shadow-lg">
      <div className="border-b pb-2 font-semibold">Beneficiary</div>
      <div className="font-semibold my-2">
        <label htmlFor="">Name</label>
          <div className="my-2 bg-[#E8E7EC] py-2 pl-2 w-full rounded-lg border border-[#6C7293]">
            {location.name}
          </div>
      </div>
      <div className="flex items-center justify-between my-2">
        <div className="font-semibold mt-2 w-full">
          <label htmlFor="">Mobile Operator</label>
          <div className="my-2 bg-[#E8E7EC] py-2 pl-2 w-full rounded-lg border border-[#6C7293]">
            {location.mobileOperator}
          </div>
        </div>
        <div className="font-semibold mt-2 w-full ml-3">
          <label htmlFor="">Mobile Name</label>
          <div className="my-2 bg-[#E8E7EC] py-2 pl-2 w-full rounded-lg border border-[#6C7293]">
            {location.mobileNumber}
          </div>
        </div>
      </div>
    </div>
  );
}
