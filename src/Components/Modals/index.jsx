import { Button, Modal } from 'antd'
import React from 'react'
import { MyBillList } from '../../data/tables'
import { bitmap } from '../../assets/image'
import { maskCardNumber } from '../../Hooks'


const ViewReceiptModal = ({setOpenModal, openModal, id}) => {

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
    // onOk={() => setOpenModal(false)}
    // onCancel={() => setOpenModal(false)}
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

                <div className='flex justify-center items-center gap-4'>
                    <Button>download</Button>
                    <Button>share</Button>
                </div>

  </Modal>
  )
}

export default ViewReceiptModal