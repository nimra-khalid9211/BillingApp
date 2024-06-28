import { TextField } from "@mui/material";
import { useState } from "react";

export default function JazzEasypaisa() {
    const [isVerified, setIsVerified] = useState(false);

    const handleVerifyClick = () => {
      setIsVerified(!isVerified);
    };
  return (
    <div>
      <div className="border-b pb-2 font-bold mt-10">
        JazzCash Account Details
      </div>
      <div className="w-4/5">
        <div className="grid grid-cols-3 gap-4 my-5">
          <TextField
            id="outlined-basic"
            label="Account Holder Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Mobile Numberr"
            variant="outlined"
          />
          <button className="text-[#329DFF] underline text-start ml-7" onClick={handleVerifyClick}>
            Verify Account
          </button>
        </div>
        {isVerified && (
          <div className="mt-5">
            <p className="font-bold">
              Please enter a 4 digit code sent to your mobile number for
              verification.
            </p>
            <div className="flex items-center space-x-2 mt-5">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <input
                    key={index}
                    id={`input-${index}`}
                    type="number"
                    maxLength="1"
                    className="w-12 h-12 border border-[#176BA3] text-center text-2xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#176BA3]"
                  />
                ))}
            </div>
            <p className="mt-5">
              Didn't get a code?
              <span className="text-[#377CF6] font-semibold"> Click to resend</span>
            </p>
            <button className="bg-[#24A959] text-white rounded-[2rem] px-10 py-3 font-semibold my-7">
              Verify Account
            </button>
          </div>
        )}
         <div className="">
            <input type="checkbox" />
            <label htmlFor="" className="ml-3">
              Set as Default
            </label>
          </div>
      </div>
    </div>
  );
}
