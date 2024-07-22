import { Link } from "react-router-dom";

export default function MobileTopUpAmountRecharge() {
  return (
    <div className="bg-white w-[30%] p-5 rounded-2xl mt-10 ml-10 drop-shadow-lg">
      <div className="border-b pb-2 font-medium">Amount Recharge</div>
      <div className="text-center">
        <div className="mt-5 font-medium">
          Enter Amount you want to recharge
        </div>
        <div className="flex justify-center items-center my-4">
          <div className="text-lg mr-2">Rs.</div>
          <div className="my-2">
            <input
              type="number" placeholder="Enter amount here"
              className="outline-none  p-2 w-full rounded-lg border border-[#6C7293]"
            />
          </div>
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
