import { Button, Modal } from 'antd'
import React from 'react'
import { MyBillList } from '../../data/tables'
import { bitmap, paymentSuccessfull } from '../../assets/image'
import { useNavigate } from 'react-router-dom'
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




export const PaymentSuccessfullModal = ({setReceiptModal, receiptModal, bills })=>{
    const navigate = useNavigate();

    return(
        <Modal
        centered
        open={receiptModal}
        onOk={() => setReceiptModal(false)}
        onCancel={() => setReceiptModal(false)}
        width={400}
        footer={null}
      >
        <div className='pt-8 px-10 flex flex-col justify-center items-center'>
        <img src={paymentSuccessfull} alt="" width={300}/>


                <span className='text-[#377CF6] font-medium text-2xl mt-2'>Payment Successfull</span>

                <span className='mt-3 text-sm font-medium text-center'>We are pleased to inform you that the payment for the {bills?.length} bills have been successfully processed.</span>

        <Button shape='round' className='mt-6 mb-10 bg-[#377CF6] text-white' onClick={()=>navigate("/bill-management")}>Billing Overview</Button>

        </div>
      </Modal>
    )
}

export default ViewReceiptModal;
