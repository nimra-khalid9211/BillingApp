import React from 'react';
import Cheque from "../../../assets/image/Cheque.svg"; // Adjust the import path as needed

export default function IssuedBill() {
  // Example amount received from backend or wherever it's managed
  const totalDueAmount = 46667.42;

  // Function to format the amount with decimal part aligned to top right
  const formatAmount = (amount) => {
    const [integerPart, decimalPart] = amount.toFixed(2).split('.');
    return { integerPart, decimalPart };
  };

  const { integerPart, decimalPart } = formatAmount(totalDueAmount);

  return (
    <div className="p-5 border rounded-[2rem] font-semibold bg-white drop-shadow-xl">
      <div className="flex justify-center items-center bg-[#EDF1FF] rounded-full h-[4rem] w-[4rem]">
        <img src={Cheque} alt="Cheque" className="" />
      </div>
      <div className="text-lg mt-5 font-bold">Total Due Amount</div>
      <div className="mt-3 flex justify-end">
        <div className="text-2xl relative pr-4">
          <span className="font-normal text-[#6C7293]">Rs</span> {integerPart}
          <span className="text-sm align-super absolute top-0 ml-1">.{decimalPart}</span>
        </div>
      </div>
    </div>
  );
}
