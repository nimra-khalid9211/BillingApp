import React from 'react';
import Cheque from "../../../assets/image/Cheque.svg"; 
import { formatAmount } from "../../../Hooks";

export default function IssuedBill() {
  const totalDueAmount = 46667.42;

  const { integerPart, decimalPart } = formatAmount(totalDueAmount);

  return (
    <div className="py-5 px-7 border rounded-3xl border-[var(--blue)] medium bg-white drop-shadow-xl">
      <div className="flex justify-center items-center bg-[#EDF1FF] rounded-full h-[4rem] w-[4rem]">
        <img src={Cheque} alt="Cheque" className="" />
      </div>
      <div className="text-lg mt-5 font-bold">Due Amount</div>
      <div className="mt-3 flex justify-end">
        <div className="relative pr-4">
          <span className="text-[#6C7293] text-sm mr-1">Rs</span> <span className='text-lg'>{integerPart}</span>
          <span className="text-sm align-super absolute top-0 ml-1">.{decimalPart}</span>
        </div>
      </div>
    </div>
  );
}