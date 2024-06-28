
import TextField from '@mui/material/TextField';

export default function DebitCard(){
    return(
        <div>
        <div className="border-b pb-2 font-bold mt-10">
          Bank Direct Debit Details
        </div>
        <div className="w-1/2">
        <div className="grid grid-cols-2 gap-4 mt-5">
          <TextField
            id="outlined-basic"
            label="Account Title"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Bank Name " variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Branch Number"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="IBAN#" variant="outlined" />
        </div>
        <div className="my-5">
          <input type="checkbox" />
          <label htmlFor="" className="ml-3">I agree to the <span className="text-[#329DFF]"> "Terms & Conditions"</span> and <span className="text-[#329DFF]">"Privacy Policy"</span></label>
        </div>
        <div className="text-[#329DFF] underline font-semibold">Verify Account</div>
        </div>
      </div>
    )
}