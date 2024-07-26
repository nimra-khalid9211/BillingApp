import { Button, Divider, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { MyBillList } from "../../data/tables";
import PaymentReciept from "../CardsUI/PaymentReciept";
import { TextField } from "@mui/material";
import { BlueButton, LargeButtons, WhiteButton } from "../../UI/Buttons";
import { useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";

export const ViewReceiptModal = ({ setOpenModal, openModal, id, from }) => {
  const bill = MyBillList.find((bill) => bill.id === id);
 

  // console.log(id)

  // console.log(bill, "from view receipt modal")

  return (
    <Modal
      title={
        <div className="flex flex-col justify-center items-center py-6">
          <span className="text-2xl">Payment Receipt</span>
          <span className="text-base mt-1 text-[#24A959]">
            Successful Payment
          </span>
        </div>
      }
      width={450}
      centered
      open={openModal}
      onOk={() => setOpenModal(false)}
      onCancel={() => setOpenModal(false)}
      footer={null}
    >
      <PaymentReciept bill={bill} from={from} />
    </Modal>
  );
};

export const PaymentSuccessfullModal = ({
  setReceiptModal,
  receiptModal,
  img,
  title,
  firstHeading,
  secondHeading,
  buttonText,
  from,
  width,
  onButtonClick,
  debitTextOne,
  debitTextTwo,
  cancelTitle,
  cancelText,
  delArray
}) => {
  const handleButtonClick = () => {
    onButtonClick();
    setReceiptModal(false);
  };

  const [data, setData] = useState('');

  return (
    <Modal
      centered
      open={receiptModal}
      onOk={() => setReceiptModal(false)}
      onCancel={() => setReceiptModal(false)}
      width={width}
      footer={null}
    >

      {(from === "payment" || from === "debitAccountVerified") && (
        <div className="pt-8 px-10 flex flex-col justify-center items-center">

          <img className="" src={img} alt="" width={300} />

          <span className="text-[#377CF6] font-medium text-2xl mt-2 ">
            {title}
          </span>

          <span className="mt-3 text-sm font-medium text-center">
            {firstHeading}
          </span>

          {from === "payment" && (
            <p className="mt-3 text-sm font-medium text-center">
              {secondHeading}
            </p>
          )}

          {from === "debitAccountVerified" && (
            <>
              <p className="text-sm font-medium text-center mt-10">
                {debitTextOne}
              </p>
              <p className="font-bold my-5">{debitTextTwo}</p>
              <div className="flex items-center my-5">
                <div>
                  <Input addonBefore="Rs." defaultValue="1.10" />
                </div>
                <div className="ml-5">
                  <Input addonBefore="Rs." defaultValue="1.10" />
                </div>
              </div>
            </>
          )}


          <Button
            className="bg-[#377CF6] text-white rounded-[2rem] px-10 py-1 font-medium mt-6 mb-10"
            onClick={handleButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      )}

      {from === "debitAccountCancelled" && (
        <>
          <div className="py-8 px-[2rem] text-[#DD2B37]  text-center">

            <div className="text-[#DD2B37] medium text-lg mt-2">
              {cancelTitle}
            </div>

            <Divider />

            {/* <div className="mt-10 font-medium">{cancelText}</div> */}
            <div className="border-l-4 border mt-4 bg-[#FDE1E3] text-[#DD2B37] border-[#DD2B37] px-2 py-3 medium text-start">
              <span className=" ">Warning! You can not undo this action.</span>
            </div>


            <div className="text-sm medium mt-5 text-black">
              <span>PTCL Home Bill will be deleted permanently</span>
            </div>

            <div className="flex flex-col items-center mt-6 text-[#6C7293]">
              <span className="mb-4">Enter the 4 digit code to verify</span>

              <OTPInput
      value={data}
      onChange={setData}
      numInputs={4}
      renderSeparator={<span className="px-1"> </span>}
      renderInput={(props) => <input {...props} 
      className={`border-2 text-center drop-shadow-lg ${data ? "border-[#176BA3]" :"border-[#6C7293]"} text-[3xl] text-[#176BA3] rounded-lg`}
       style={{
        width: '50px',
        height: "50px",
        fontSize: "28px"
      }} />}
    />

            <span className="mt-4">Didn't get a code?
              <span className="text-[#329DFF]">Click to resend</span></span>
            </div>

          </div>

          <div className="bg-[#E8E7EC] py-5 text-center rounded-b-[2rem]">
           
            <LargeButtons  disabled={data?.length === 4 ? false : true}  title={"Yes, Delete Bill"}
             width={"20rem"} customClass={data?.length === 4 ?"delete-btn" : "disabled-delete-btn"} clickEvent={()=>{delArray();setData([])}} from={"delete"}/>
         
          </div>

        </>
      )}

    </Modal>

  );
};

export const ReportModels = ({ report, setReport,title}) => {
  const navigate = useNavigate()

  const operators = [
    { label: "Jazz", value: "option1" },
    { label: "Ufone", value: "option2" },
    { label: "Telenor", value: "option3" },
    { label: "Zong", value: "option4" },
  ];

  const numbers = [
    { label: "03231234567", value: "option1" },
    { label: "03331234567", value: "option2" },
    { label: "03421234567", value: "option3" },
    { label: "03161234567", value: "option4" },
  ];


  return (
    <Modal
      centered
      open={report}
      footer={null}
      // onOk={() => setReport(false)}
      onCancel={() => setReport(false)}
      className={'report-modal no-overfow-y'}
    >
      <div className="p-10">

        <div className="text-center text-xl medium text-[#377CF6] border-b pb-2">
        {title}
        </div>

        <div className="mt-10">
         
          <label htmlFor="" className="">
            Select Operator
          </label>

          <Select
            mode="multiple"
            allowClear
            className="custom-select"
            popupClassName="custom-dropdown"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              outline: "none",
            }}
            placeholder="Please select"
            // defaultValue={["All"]}
            // onChange={handleChange}
            options={operators}
          />

        </div>

        <div className="mt-7">

          <label htmlFor="" className="">
            Select Number
          </label>

          <Select
            mode="multiple"
            allowClear
            className="custom-select"
            popupClassName="custom-dropdown"
            style={{
              width: "100%",
              backgroundColor: "transparent",
            }}
            placeholder="Please select"
            // defaultValue={[""]}
            // onChange={handleChange}
            options={numbers}
          />

        </div>

        <div className="text-[#0083FF] medium mt-5">
          Select Date Range
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
         
          <div>

            <label htmlFor="">From</label>
            
            <TextField
              type="date"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={{
                inputProps: { placeholder: "" },
                style: { fontSize: "16px" },
              }}
            />

          </div>

          <div>
            <label htmlFor="">To</label>

            <TextField
              type="date"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={{
                inputProps: { placeholder: "" },
                style: { fontSize: "16px" },
              }}
            />

          </div>

        </div>

        <div className="grid grid-cols-2 gap-4 mt-10">
          <WhiteButton customClass={"cancel-btn"} customStyle={"100%"} title="Cancel" clickEvent={() => setReport(false)}/>
          <BlueButton customClass={"hover-color"} customStyle={"100%"} title="Generate Report" clickEvent={()=>navigate('/transaction-report')}/>
        </div>

      </div>
    </Modal>
  );
};


export const ChangePasswordModel = ({changePassword, setChangePassword}) =>{

  const [password, setPassword] = useState({oldPassword: '', newPassword: "", confirmPassword: ""});
  const [error, setError] = useState(false);

  const handleChange = (e) =>{
      const {name, value} = e.target;

      setPassword(prev=>({...prev,[name]:value}))

      if(name === "newPassword" || name === "confirmPassword"){
        const {newPassword, confirmPassword} = {...password, [name]: value}

        if(newPassword && confirmPassword && newPassword !== confirmPassword){
          setError(true);
        }else{
          setError(false);
        }
      }
  }

  return(
    <Modal
    centered
    open={changePassword}
    footer={null}
    width={450}
    // onOk={() => setReport(false)}
    onCancel={() => setChangePassword(false)}
    className={'report-modal no-overfow-y'}
    title={
      <div className="flex flex-col justify-center items-center py-6">
        <span className="text-xl text-[var(--blue)]">Change Password</span>
       <Divider />
      </div>
    }
  >
        <div className="px-3">

        <div className="text-center">
       <span className="medium text-[#2D3945]">Your email is <span className="text-[var(--blue)]">saadhassan@gmail.com</span></span>
        </div>

        <div className="py-6 px-6">
          
        <div>
        <label className="text-xs text-[#000000]">Current Password</label>
        <Input.Password placeholder="Current password" size="large" onChange={handleChange} name="oldPassword"
        value={password.oldPassword} style={{ fontWeight: "600", fontSize: "14px"}}/>
        </div>

        <div className="my-4">
        <label className="text-xs text-[#000000]">New Password</label>
        <Input.Password placeholder="New password" size="large"  onChange={handleChange} name="newPassword"
        value={password.newPassword} style={{ fontWeight: "600", fontSize: "14px"}}/>
        </div>

        <div>
        <label className="text-xs text-[#000000]">Confirm Password</label>
        <Input.Password placeholder="Confirm password" size="large" onChange={handleChange} name="confirmPassword"
        value={password.confirmPassword} style={{ fontWeight: "600", fontSize: "14px"}}/>
        </div>

        {error &&  <span className={`text-xs text-red-500`}>Password not matched</span>}


       {/* <div>
       <span className={`text-xs ${error ? "text-red-500" : "text-white"}`}>Password not matched</span>
       </div> */}

        <div className="flex my-6">
          <WhiteButton title={"Cancel"} customClass={"cancel-btn"} clickEvent={()=>setChangePassword(false)} marginRight={"1rem"} customStyle={"100%"}/>
          <BlueButton title={"Update"} customClass={"hover-color"} customStyle={"100%"}/>
        </div>

        </div>

        </div>

    </Modal>
  )
}
