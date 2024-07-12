import { Box, MenuItem, TextField } from "@mui/material";
import { Button, Drawer, Input } from "antd";
import Cancel from "../../assets/icon/cancel.svg"
import { BlueButton, WhiteButton } from "../../UI/Buttons";
import { InputCustom } from "../../UI/Inputs";
import Search from "antd/es/transfer/search";

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
    <div></div>
      }
      closeIcon={null}
      placement="right"
      // closable={addBill}
      onClose={() => setAddNumber(false)}
      open={addNumber}
      key="right"
      width={1200}
      className="rounded-lb-[80px] relative padding-none"
      style={{overflow:'unset', borderTopLeftRadius: "80px", borderBottomLeftRadius: "80px", background:'#f6f6f8'}}
    >
      <div className="">
      <div onClick={() => setAddNumber(false)} className="absolute left-[-1.5rem] z-50 top-[8rem] cursor-pointer"><img src={Cancel} alt="" /></div>
        {/* <p className="text-[#646464] font-semibold mt-5">
          Add your account details
        </p> */}
       <div className="w-full bg-white py-5 px-5 rounded-tl-[80px] border-b">
          <div className="text-xl text-[#176ba3] font-semibold pl-5">Add Number</div>
        </div>
        <div className="w-4/5 mx-auto mt-10 ">

        <div className="rounded-[30px] p-7 mt-5 shadow-lg shadow-[#8a918e] bg-white">
          <div className="border-b pb-2 font-semibold">Number Details</div>

          <div className="grid grid-cols-2 gap-4 mt-5">

              <InputCustom label={"Name"} />
              
              <InputCustom label={"Mobile Operator"} />

{/* 
            <TextField
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              size="small"
            /> */}

            {/* <Box
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
                size="small"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box> */}

            <TextField
              className="col-span-1 border-black"
              select
              label = {"Mobile Operator"}
              size="small" InputProps={{style: { fontSize: "16px", fontWeight: "600", borderRadius: "10px", }, }}   >

               <div>
               {/* <Search placeholder="Search.." className="p-4"/> */}
               {currencies.map((x, index)=>(
                <div key={index} className="px-2 cursor-pointer py-2 border-b font-medium hover:bg-[#dbf0ff]">{x.label}</div>
             
               ))}
              </div> 
            </TextField>

            <div className="mt-2">
            <BlueButton title={"Procceed"}/>
            </div>

          </div>
        </div>
        <div className="rounded-[30px] p-7 mt-10 shadow-lg shadow-[#8a918e] bg-white">
          <p className="font-bold">
            Please enter a 4 digit code.
          </p>
          <div className="flex items-center space-x-2 mt-5">
            {/* {Array(4)
              .fill(0)
              .map((_, index) => (
                <input
                  key={index}
                  id={`input-${index}`}
                  type="number"
                  maxLength="1"
                  className="w-12 h-12 border border-[#176BA3] text-center text-2xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#176BA3]"
                />
              ))} */}
              <Input.OTP length={4} />
          </div>
          <p className="mt-5">
            Didn't get a code?{" "}
            <span className="text-[#377CF6]">Click to resend</span>
          </p>
        </div>

       <div className="fixed bottom-24">
            <WhiteButton customClass={"cancel-btn"} title={"Cancel"} clickEvent={()=>setAddNumber(false)}/>
            <BlueButton customClass={"hover-color"} title={"Save"}/>
       </div>
        </div>

      </div>
    </Drawer>
  );
}
