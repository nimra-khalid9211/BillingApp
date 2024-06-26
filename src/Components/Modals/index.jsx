<<<<<<< HEAD
import { Button, Modal } from 'antd'
import React from 'react'
import { MyBillList } from '../../data/tables'
import { bitmap, paymentSuccessfull } from '../../assets/image'
import { maskCardNumber } from '../../Hooks'
import { LuDownload } from 'react-icons/lu'
import { FaShareNodes } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
=======
import { Button, Modal } from "antd";
import React from "react";
import { MyBillList } from "../../data/tables";
import PaymentReciept from "../CardsUI/PaymentReciept";
>>>>>>> origin/mobileTopup

const ViewReceiptModal = ({ setOpenModal, openModal, id }) => {
  const bill = MyBillList.find((bill) => bill.id === id);
  console.log(id)

<<<<<<< HEAD
export const ViewReceiptModal = ({setOpenModal, openModal, id}) => {

    const bill = MyBillList.find(bill => bill.id === id)

    // console.log(bill, "from view receipt modal")

  return (

    <Modal 
    title={<div className='flex flex-col justify-center items-center py-6'>
        <span className='text-2xl'>Payment Receipt</span>
        <span className='text-base mt-1 text-[#24A959]'>Successful Payment</span>
    </div>}
    width={450}
    centered
    open={openModal}
    onOk={() => setOpenModal(false)}
    onCancel={() => setOpenModal(false)}
    footer={null}
  >

                <table className='w-full bg-white text-base'>

                    <tbody>

                        <tr className='flex justify-between mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
                            <th className='text-[#6C7293] font-medium'>Transaction ID</th>
                            <td className='font-semibold text-black'>{bill.transactionID}</td>
                        </tr>

                        <tr className='flex justify-between mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
                            <th className='text-[#6C7293] font-medium'>Bill Name</th>
                            <td className='font-semibold text-black'>{bill.billname}</td>
                        </tr>

                        <tr className='flex justify-between mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
                            <th className='text-[#6C7293] font-medium'>Consumer ID</th>
                            <td className='font-semibold text-black'>{bill.consumerID}</td>
                        </tr>

                        <tr className='flex justify-between mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
                            <th className='text-[#6C7293] font-medium'>Company Code</th>
                            <td className='font-semibold text-black'>{bill.billCompany}</td>
                        </tr>

                        <tr className='flex justify-between mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
                            <th className='text-[#6C7293] font-medium'>Pay Date</th>
                            <td className='font-semibold text-black'>{bill.payDate}</td>
                        </tr>

                        <tr className='flex justify-between mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
                            <th className='text-[#6C7293] font-medium'>Pay Time</th>
                            <td className='font-semibold text-black'>{bill.payTime}</td>
                        </tr>

                        <tr className='flex justify-between mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
                            <th className='text-lg text-[#377CF6] font-medium'>Amount Paid</th>
                            <td className='text-2xl text-[#377CF6] font-semibold'>{bill.amount}</td>
                        </tr>

                        <tr className='flex flex-col mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
                            <th className='text-[#6C7293] font-medium text-start'>Payment Method</th>

                            <td className='flex justify-between items-center text-sm text-[#6C7293] font-normal'>

                                <div className='flex items-center'>
                                <img src={bitmap} alt="" className='border border-1 px-2 rounded-lg'/>
                                <span className='pl-8 '>Usman Afzal</span>
                                </div>

                                    <span>{maskCardNumber(1234567891234567)}</span>

                            </td>
                        </tr>

                    </tbody>

                </table>

                <div className='flex justify-center items-center gap-4 py-3'>
                        <Button shape='round' className='border-[#4371D1] text-[#4371D1]' icon={<LuDownload />}>Download</Button>
                        <Button shape='round' icon={<FaShareNodes />} className='bg-[#4371D1] text-white'>Share</Button>
                </div>

  </Modal>
  )
}



export const PaymentSuccessfullModal = ({setReceiptModal, receiptModal, bills})=>{
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
=======
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
>>>>>>> origin/mobileTopup
