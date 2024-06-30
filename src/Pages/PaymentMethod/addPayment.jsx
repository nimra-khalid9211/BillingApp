import { debit, easypa, jazz, master, visa } from "../../assets/image";
import MasterVisaCard from "./PaymentType/MasterVisaCards";
import Buttons from "../../Components/SaveCancelButton/buttons";
import JazzEasypaisa from "./PaymentType/jazzEasypaisa";
import DebitCard from "./PaymentType/debitCard";
import { useState } from "react";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";

export default function AddPayment() {

  const {paymentType, setPaymentType} = _BillingCondition()
  const handlePaymentTypeClick = (type) => {
    setPaymentType(type); 
  };
 
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-[25px] mt-5">
        <div className="bg-[#377CF6] text-white p-3">Add Payment Methods</div>
        <div className="px-10 py-7 bg-white">
          <div className="font-semibold text-lg mb-5">
            Select your payment method:
          </div>
          <div className="flex items-center">
            <div
              className={`w-[11rem] cursor-pointer relative ${paymentType === "button1" ? "active-image" : ""}`}
              onClick={() => handlePaymentTypeClick("button1")}
            >
              <img src={master} alt="MasterCard" className="w-full" />
            </div>
            <div
              className={`w-[11rem] cursor-pointer relative ${paymentType === "button2" ? "active-image" : ""}`}
              onClick={() => handlePaymentTypeClick("button2")}
            >
              <img src={visa} alt="Visa" className="w-full" />
            </div>
            <div
              className={`w-[11rem] cursor-pointer relative ${paymentType === "button3" ? "active-image" : ""}`}
              onClick={() => handlePaymentTypeClick("button3")}
            >
              <img src={easypa} alt="EasyPaisa" className="w-full" />
            </div>
            <div
              className={`w-[11rem] cursor-pointer relative ${paymentType === "button4" ? "active-image" : ""}`}
              onClick={() => handlePaymentTypeClick("button4")}
            >
              <img src={jazz} alt="JazzCash" className="w-full" />
            </div>
            <div
              className={`w-[11rem] cursor-pointer relative ${paymentType === "button5" ? "active-image" : ""}`}
              onClick={() => handlePaymentTypeClick("button5")}
            >
              <img src={debit} alt="Debit Card" className="w-full" />
            </div>
          </div>
          <div>
            {paymentType === "button1" && (
              <div>
                <MasterVisaCard />
              </div>
            )}
            {paymentType === "button2" && (
              <div>
                <MasterVisaCard />
              </div>
            )}
            {paymentType === "button3" && (
              <div>
                <JazzEasypaisa />
              </div>
            )}
            {paymentType === "button4" && (
              <div>
                <JazzEasypaisa />
              </div>
            )}
            {paymentType === "button5" && (
              <div>
                <DebitCard />
              </div>
            )}
          </div>
        </div>
      </div>
      <Buttons button1="Cancel" button2="Save" />
    </>
  );
}
