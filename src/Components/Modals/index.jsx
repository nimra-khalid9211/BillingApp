import { Button, Input, Modal } from "antd";
import React from "react";
import { MyBillList } from "../../data/tables";
import { bitmap, paymentSuccessfull } from "../../assets/image";
import { useNavigate } from "react-router-dom";
import PaymentReciept from "../CardsUI/PaymentReciept";

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
  cancelSecondHeading,
  cancelFirstHeading,
  cancelTitle,
}) => {
  const navigate = useNavigate();

  // console.log(firstHeading)

  const handleButtonClick = () => {
    onButtonClick();
    setReceiptModal(false);
  };

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
          // onClick={() => navigate("/bill-management")}
          // onClick={() => navigate(link)}
          onClick={handleButtonClick}
        >
          {buttonText}
        </Button>
      </div>
        )}
      {from === "debitAccountCancelled" && (
        <div className="py-8 px-10 text-center">
            <div className="text-[#F1416C] font-medium text-2xl mt-2 ">
              {cancelTitle}
            </div>
            <p className="mt-10 text-lg font-semibold text-center">
              {cancelSecondHeading}
            </p>
            <span className="mt-3 text-sm font-medium text-center">
              {cancelFirstHeading}
            </span>
            <div className="flex flex-col mt-10">
              <label htmlFor="" className="text-start">
                What is the reason for cancelling Verfication
              </label>
              <textarea name="" id="" className="border border-[#6C7293 rounded-lg bg-transparent p-2"></textarea>
            </div>
              <button className="bg-[#F1416C] text-white rounded-[2rem] px-10 py-3 font-semibold ml-3"   onClick={handleButtonClick}>
                Yes, Cancel it
              </button>
        </div>
      )}
    </Modal>
  );
};

export default ViewReceiptModal;
