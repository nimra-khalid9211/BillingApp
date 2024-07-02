import { Button, Modal } from "antd";
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
      <PaymentReciept bill={bill} from={from}/>
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
  debitTextTwo
}) => {
  const navigate = useNavigate();

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
      <div className="pt-8 px-10 flex flex-col justify-center items-center">
        <img className="" src={img} alt="" width={300} />

        <span className="text-[#377CF6] font-medium text-2xl mt-2">
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
        {from === "debitAccount" && (
          <>
            <p className="text-sm font-medium text-center mt-10">
              {debitTextOne}
            </p>
            <p className="font-bold mt-5">
              {debitTextTwo}
            </p>
            <div>
              <input type="text" />
              <input type="number" />
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
    </Modal>
  );
};

export default ViewReceiptModal;
