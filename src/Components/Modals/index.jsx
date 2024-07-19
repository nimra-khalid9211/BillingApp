import { Button, Divider, Input, Modal, Select } from "antd";
import React from "react";
import { MyBillList } from "../../data/tables";
import PaymentReciept from "../CardsUI/PaymentReciept";
import { TextField } from "@mui/material";
import { BlueButton, WhiteButton } from "../../UI/Buttons";
import { useNavigate } from "react-router-dom";

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

  // const handleDeleteBill = (index) => {
  //   const updatedBills = [...bills];
  //   updatedBills.splice(index, 1); // Remove the bill at the specified index
  //   setBills(updatedBills); // Update the bills state
  //   console.log("clicked")
  // };

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

            <div className="text-[#DD2B37] font-semibold text-lg mt-2">
              {cancelTitle}
            </div>

            <Divider />

            {/* <div className="mt-10 font-medium">{cancelText}</div> */}
            <div className="border-l-4 border mt-4 bg-[#FDE1E3] text-[#DD2B37] border-[#DD2B37] px-2 py-3 font-semibold text-start">
              <span className=" ">Warning! You can not undo this action.</span>
            </div>


            <div className="text-sm font-semibold mt-5 text-black">
              <span>PTCL Home Bill will be deleted permanently</span>
            </div>

            <div className="flex flex-col items-center mt-6 text-[#6C7293]">
              <span className="mb-4">Enter the 4 digit code to verify</span>
            <Input.OTP length={4} />
            <span className="mt-4">Didn't get a code? 
              <span className="text-[#329DFF]">Click to resend</span></span>
            </div>

          </div>

          <div className="bg-[#E8E7EC] py-5 text-center rounded-b-[2rem]">
            <button
              className="bg-[#DD2B37] text-white rounded-[2rem] px-[7rem] py-2 font-semibold ml-3 "
              onClick={delArray}
            >
              Yes, Cancel it
            </button>
          </div>

        </>
      )}

    </Modal>
  );
};

export const ReportModels = ({ report, setReport,title}) => {
  const navigate = useNavigate()
  const options = [
    { label: "Jazz", value: "option1" },
    { label: "Ufone", value: "option2" },
    { label: "Telenor", value: "option3" },
    { label: "Zong", value: "option4" },
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
        <div className="text-center text-xl font-semibold text-[#377CF6] border-b pb-2">
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
            style={{
              width: "100%",
              backgroundColor: "transparent",
              outline: "none",
            }}
            placeholder="Please select"
            defaultValue={["All"]}
            // onChange={handleChange}
            options={options}
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
            style={{
              width: "100%",
              backgroundColor: "transparent",
            }}
            placeholder="Please select"
            defaultValue={["All"]}
            // onChange={handleChange}
            options={options}
          />
        </div>
        <div className="text-[#0083FF] font-semibold mt-5">
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
          <WhiteButton customClass={"cancel-btn"} title="Cancel" clickEvent={() => setReport(false)}/>
          <BlueButton customClass={"hover-color"} customStyle={"11rem"} title="Generate Report" clickEvent={()=>navigate('/transaction-report')}/>
        </div>
      </div>
    </Modal>
  );
};

export default ViewReceiptModal;
