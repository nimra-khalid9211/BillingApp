import { TextField } from "@mui/material";
import { InputCustom, InputDate } from "../../../UI/Inputs";

export default function MasterVisaCard() {
  return (
    <div>
      <div className="border-b pb-2 font-bold mt-10">
        Credit / Debit Card Details
      </div>
      <div className="w-1/2">
        <div className="grid grid-cols-2 gap-4 mt-5">

          <InputCustom label={"Name on Card"} />
          {/* <TextField
            id="outlined-basic"
            label="Name on Card"
            variant="outlined"
            size="small"
          /> */}

          <InputCustom label={"Card Number"} />
          
          {/* <TextField
            id="outlined-basic"
            label="Card Number"
            variant="outlined"
            size="small"
          /> */}

          <InputDate label={"Expiry on Card"}/>

          {/* <TextField
            id="outlined-basic"
            label="Expiry on Card"
            variant="outlined"
            size="small"
          /> */}

          <InputCustom label={"CVV"} />

          {/* <TextField
            id="outlined-basic"
            label="CVV"
            variant="outlined"
            size="small"
          /> */}

        </div>
        <div className="my-5">
          <input type="checkbox" />
          <label htmlFor="" className="ml-3">
            Set as Default
          </label>
        </div>
      </div>
    </div>
  );
}
