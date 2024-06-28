import { Button, Modal } from "antd";
import React from "react";
import { MyBillList } from "../../data/tables";
import { bitmap, paymentSuccessfull } from "../../assets/image";
import { useNavigate } from "react-router-dom";
import PaymentReciept from "../CardsUI/PaymentReciept";

export const ViewReceiptModal = ({ setOpenModal, openModal, id }) => {
  const bill = MyBillList.find((bill) => bill.id === id);
  console.log(id);
  console.log(bill, "from view receipt modal");
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

// export const ViewReceiptModal = ({setOpenModal, openModal, id}) => {

//     const bill = MyBillList.find(bill => bill.id === id)

//     // console.log(bill, "from view receipt modal")

//   return (

//     <Modal
//     title={<div className='flex flex-col justify-center items-center py-6'>
//         <span className='text-2xl'>Payment Receipt</span>
//         <span className='text-base mt-1 text-[#24A959]'>Successful Payment</span>
//     </div>}
//     width={450}
//     centered
//     open={openModal}
//     onOk={() => setOpenModal(false)}
//     onCancel={() => setOpenModal(false)}
//     footer={null}
//   >

//                 <table className='w-full bg-white text-base'>

//                     <tbody>

//                         <tr className='flex justify-between mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
//                             <th className='text-[#6C7293] font-medium'>Transaction ID</th>
//                             <td className='font-semibold text-black'>{bill.transactionID}</td>
//                         </tr>

//                         <tr className='flex justify-between mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
//                             <th className='text-[#6C7293] font-medium'>Bill Name</th>
//                             <td className='font-semibold text-black'>{bill.billname}</td>
//                         </tr>

//                         <tr className='flex justify-between mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
//                             <th className='text-[#6C7293] font-medium'>Consumer ID</th>
//                             <td className='font-semibold text-black'>{bill.consumerID}</td>
//                         </tr>

//                         <tr className='flex justify-between mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
//                             <th className='text-[#6C7293] font-medium'>Company Code</th>
//                             <td className='font-semibold text-black'>{bill.billCompany}</td>
//                         </tr>

//                         <tr className='flex justify-between mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
//                             <th className='text-[#6C7293] font-medium'>Pay Date</th>
//                             <td className='font-semibold text-black'>{bill.payDate}</td>
//                         </tr>

//                         <tr className='flex justify-between mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
//                             <th className='text-[#6C7293] font-medium'>Pay Time</th>
//                             <td className='font-semibold text-black'>{bill.payTime}</td>
//                         </tr>

//                         <tr className='flex justify-between mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
//                             <th className='text-lg text-[#377CF6] font-medium'>Amount Paid</th>
//                             <td className='text-2xl text-[#377CF6] font-semibold'>{bill.amount}</td>
//                         </tr>

//                         <tr className='flex flex-col mx-14 py-3 border-dashed border-b border-[#eff0fb]'>
//                             <th className='text-[#6C7293] font-medium text-start'>Payment Method</th>

//                             <td className='flex justify-between items-center text-sm text-[#6C7293] font-normal'>

//                                 <div className='flex items-center'>
//                                 <img src={bitmap} alt="" className='border border-1 px-2 rounded-lg'/>
//                                 <span className='pl-8 '>Usman Afzal</span>
//                                 </div>

//                                     <span>{maskCardNumber(1234567891234567)}</span>

//                             </td>
//                         </tr>

//                     </tbody>

//                 </table>

//                 <div className='flex justify-center items-center gap-4 py-3'>
//                         <Button shape='round' className='border-[#4371D1] text-[#4371D1]' icon={<LuDownload />}>Download</Button>
//                         <Button shape='round' icon={<FaShareNodes />} className='bg-[#4371D1] text-white'>Share</Button>
//                 </div>

//   </Modal>
//   )
// }

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

        <button
          className="bg-[#377CF6] text-white rounded-[2rem] px-20 py-2 font-semibold mt-6 mb-10"
          // onClick={() => navigate("/bill-management")}
          // onClick={() => navigate(link)}
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </Modal>
  );
};

export default ViewReceiptModal;
