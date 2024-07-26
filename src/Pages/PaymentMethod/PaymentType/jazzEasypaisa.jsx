
import { useState } from "react";
import { InputCustom } from "../../../UI/Inputs";
import { formatMobileNumber } from "../../../Hooks";

export default function JazzEasypaisa({width}) {
  const [isVerified, setIsVerified] = useState(false);
  const [data, setData] = useState({accountName: "", accountNumber: ""});

  const handleChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;
    if (name === "accountNumber") {
      formattedValue = formatMobileNumber(value);
    }

    setData(prev => ({ ...prev, [name]: formattedValue }));
  };

  const handleVerifyClick = () => {
    setIsVerified(!isVerified);
  };

  return (
    <div>
      <div className="border-b pb-2 font-bold mt-10">
       Account Details
      </div>
      <div className={`${width ? width : "w-1/2"}`}>
        <div className="grid grid-cols-5 gap-4 my-5">

        <div className="col-span-2">
        <InputCustom label={"Account Holder Name"} type={"text"} name={"accountName"} value={data.accountName} onChange={handleChange}/>
        </div>

        <div className="col-span-2">
      <InputCustom 
        label={"Mobile Number"} 
        type={'text'} 
        name={"accountNumber"} 
        value={data.accountNumber} 
        onChange={handleChange} 
      />
    </div>

          <button
            className="text-[#329DFF] underline text-start ml-7"
            onClick={handleVerifyClick}
          >
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
              <span className="text-[#377CF6] medium">
                {" "}
                Click to resend
              </span>
            </p>
            {/* <button className="bg-[#24A959] text-white rounded-[2rem] px-10 py-3 medium my-7">
              Verify Account
            </button> */}
          </div>
        )}
        <div className="mt-5">
          <input type="checkbox" />
          <label htmlFor="" className="ml-3">
            Set as Default
          </label>
        </div>
      </div>
    </div>
  );
}
