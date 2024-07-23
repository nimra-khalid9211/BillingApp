import { TextField } from "@mui/material";
import { InputCustom, InputDate } from "../../../UI/Inputs";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { formatCardNumber, formatCardNumber, formatExpiryDate } from "../../../Hooks";

export default function MasterVisaCard({width}) {

  const location = useLocation().state?.account;

  const [data, setData] = useState({cardNumber:"", expiryDate:""});

  console.log(data);

  const [incorrect, setIncorrect] = useState(false);

  const handleChange = (e) => {

        const {name, value} = e.target;

        const formatCardNumber = name === "cardNumber" ? formatCardNumber(value)

     // Remove non-digit characters
      // console.log(value)
  //   const cardNumber = formatCardNumber(value);
  //   console.log(cardNumber);

  //  const formattedDate =  formatExpiryDate(value);

   

  //  console.log(formattedDate, "from date formatter");
  };

  const isValidMonthYear = (input) => {
    const check = /^(0[1-9]|1[0-2])\/\d{4}$/;
    return check.test(input);
  };

  return (
    <div>
      <div className="border-b pb-2 font-bold mt-10">
        Card Details
      </div>
      <div className={`${width ? width : "w-1/2" }`}>
        <div className={`grid grid-cols-5 gap-4 mt-5`}>

          <div className="col-span-2">
          <InputCustom label={"Name on Card"} value={location?.userName} />
          </div>

          <div className="col-span-2">
          <InputCustom label={"Card Number"} name="cardNumber" value={location?.cardNumber ? location?.cardNumber : data.cardNumber} onChange={handleChange}/>
          </div>
          

          <div className="col-span-2">
          <InputCustom label={"MM/YYYY"} name={"expiryDate"} onChange={e=>handleChange(e)} value={location?.expiry ? location?.expiry : data.expiryDate}/>
          {incorrect && <span className="text-xs text-red-600">
            Invalid Date format e.g 01/2024
            </span>}
          </div>

          <div className="col-span-2">
          <InputCustom label={"CVV"} value={location?.cvv}/>
          </div>

        </div>

       { !location &&  <div className="my-5">
          <input type="checkbox" />
          <label htmlFor="" className="ml-3">
            Set as Default
          </label>
        </div>}

      </div>

    </div>
  );
}
