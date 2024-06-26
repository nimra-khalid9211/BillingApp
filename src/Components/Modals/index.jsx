import { Button, Modal } from "antd";
import React from "react";
import { MyBillList } from "../../data/tables";
import PaymentReciept from "../CardsUI/PaymentReciept";

const ViewReceiptModal = ({ setOpenModal, openModal, id }) => {
  const bill = MyBillList.find((bill) => bill.id === id);
  console.log(id)

  console.log(bill, "from view receipt modal")
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
      <PaymentReciept bill={bill} />
    </Modal>
  );
};

export default ViewReceiptModal;
