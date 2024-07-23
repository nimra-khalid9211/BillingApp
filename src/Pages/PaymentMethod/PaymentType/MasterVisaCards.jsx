import { TextField } from "@mui/material";
import { InputCustom, InputDate } from "../../../UI/Inputs";
import { useLocation } from "react-router-dom";

export default function MasterVisaCard({width}) {

  const location = useLocation().state?.account;

  return (
    <div>
      <div className="border-b pb-2 font-bold mt-10">
        Card Details
      </div>
      <div className={`${width ? width : "w-1/2" }`}>
        <div className={`grid grid-cols-5 gap-4 mt-5`}>

          <div className="col-span-2">
          <InputCustom label={"Name on Card"} value={location?.userName}/>
          </div>

          <div className="col-span-2">
          <InputCustom label={"Card Number"} value={location?.cardNumber}/>
          </div>
          

          <div className="col-span-2">
          <InputCustom label={"Expiry Card"} value={location?.expiry}/>
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
