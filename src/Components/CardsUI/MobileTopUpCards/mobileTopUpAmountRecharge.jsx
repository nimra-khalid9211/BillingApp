import { Link } from "react-router-dom";

export default function MobileTopUpAmountRecharge() {
  return (
    <div className="bg-white w-[30%] p-5 rounded-2xl mt-10 drop-shadow-xl ml-10">
      <div className="border-b pb-2 font-semibold">Amount Recharge</div>
      <div className="text-center">
        <div className="mt-5 font-semibold">
          Enter Amount you want to recharge
        </div>
        <div className="flex justify-center items-center my-4">
          <div className="text-lg mr-2">Rs.</div>
          <input
            type="text"
            className="p-1 outline-none text-3xl font-semibold w-[50%]"
          />
        </div>
        <div className="mt-2 text-white bg-[#377CF6] p-2 rounded-2xl w-full">
          <Link to="successfull">
            <div>Pay Now</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
