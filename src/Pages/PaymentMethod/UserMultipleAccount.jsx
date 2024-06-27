import { maskCardNumber } from "../../Hooks";
import { TikCheck, smallArrow } from "../../assets/icon";
import Card from "../../assets/image/Bitmap.svg";
import { accounts } from "../../data/tables";
export default function UserMultipleAccount() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-[25px] mt-5">
      <div className="bg-[#377CF6] text-white p-3">Payment Methods</div>
      <div className="pb-10 pt-5 px-5">
        {accounts.map((account, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 rounded-lg mt-5 bg-white p-5"
          >
            <div className="flex items-center border-r-2">
              <div>
                <img src={TikCheck} alt="icon" />
              </div>
              <div className="flex items-center ml-7">
                <div className="border">
                  <img src={account.cardImg} alt="card icon" />
                </div>
                <div className="ml-5 font-semibold text-lg">
                  {account.userName}
                </div>
              </div>
            </div>
            <div className="border-r-2 text-center font-semibold text-lg">
              {maskCardNumber(account.cardNumber)}
            </div>
            <div className="border-r-2 text-center">
              Expiry: {account.expiry}
            </div>
            <div className="border-r-2 flex items-center justify-center text-[#377CF6]">
              <div
                className={`rounded-2xl w-[10rem] p-2 text-center ${
                  account.status === "Default" ? "bg-[#DBF0FF]" : "bg-[#fff]"
                }`}
              >
                {account.status}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-[#377CF6] underline">Change Account</div>
              <div className="ml-2">
                <img src={smallArrow} alt="icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
