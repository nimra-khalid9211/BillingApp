import { TextField } from "@mui/material";

export default function MasterVisaCard() {
  return (
    <div>
      <div className="border-b pb-2 font-bold mt-10">
        Credit / Debit Card Details
      </div>
      <div className="w-1/2">
      <div className="grid grid-cols-2 gap-4 mt-5">
        <TextField
          id="outlined-basic"
          label="Name on Card"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Card Number" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Expiry on Card"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="CVV" variant="outlined" />
      </div>
      <div className="my-5">
        <input type="checkbox" />
        <label htmlFor="" className="ml-3">Set as Default</label>
      </div>
      </div>
    </div>
  );
}
