import { Box, MenuItem, TextField } from "@mui/material";
import { Button, Drawer } from "antd";
import Cancel from "../../assets/icon/cancel.svg"
import Buttons from "../../Components/SaveCancelButton/buttons";
import { BlueButton, WhiteButton } from "../../UI/Buttons";

export default function AddDetails({ addNumber, setAddNumber }) {
  const currencies = [
    {
      value: "USD",
      label: "Jazz",
    },
    {
      value: "EUR",
      label: "Ufone",
    },
    {
      value: "BTC",
      label: "Telenor",
    },
    {
      value: "JPY",
      label: "Zong",
    },
  ];
  return (
    <Drawer
      title={
        <div>

          {/* <span className="text-xl text-[#377CF6] border-b pb-2">Add Number</span> */}
        </div>
      }
      closeIcon={null}
      placement="right"
      // closable={addBill}
      onClose={() => setAddNumber(false)}
      open={addNumber}
      key="right"
      size="large"
      className="rounded-tl-[80px] rounded-bl-[80px] py-8 px-5 relative"
    >
      <div className="">
      <div onClick={() => setAddNumber(false)} className="absolute left-[-1rem] z-50 top-[10rem]"><img src={Cancel} alt="" /></div>
        <div className="text-xl text-[#377CF6] border-b pb-2 font-semibold">
          Add Number
        </div>
        <p className="text-[#646464] font-semibold mt-5">
          Add your account details
        </p>
        <div className="rounded-2xl p-7 mt-5 shadow-2xl">
          <div className="border-b pb-2 font-semibold">Number Details</div>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Mobile Operator"
              variant="outlined"
            />
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { mt: 2, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-select-currency"
                select
                label="Mobile Operator"
                defaultValue="EUR"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </div>
        </div>
        <div className="rounded-2xl p-7 mt-10 shadow-2xl">
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
            Didn't get a code?{" "}
            <span className="text-[#377CF6]">Click to resend</span>
          </p>
        </div>

       <div className="mt-7">
            <WhiteButton title={"Cancel"} clickEvent={()=>setAddNumber(false)}/>

            <BlueButton  title={"Save"}/>
       </div>

      </div>
    </Drawer>
  );
}
