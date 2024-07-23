import { debit, easypa, jazz, master, visa } from "../../assets/image";
import MasterVisaCard from "./PaymentType/MasterVisaCards";
import Buttons from "../../Components/SaveCancelButton/buttons";
import JazzEasypaisa from "./PaymentType/jazzEasypaisa";
import DebitCard from "./PaymentType/debitCard";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";
import { BlueButton, WhiteButton } from "../../UI/Buttons";
import { IoChevronBack } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import BreadCrumbs from "../../UI/BreadCrumbs";
import { MdOutlinePayment } from "react-icons/md";
import {useEffect, useState} from "react";

export default function AddPayment() {
  const navigate = useNavigate();
 
  const { paymentType, setPaymentType } = _BillingCondition();

  const handlePaymentTypeClick = (type) => {
    setPaymentType(type);
    // console.log(type,"type")
  };

  return (
    <>
      <BreadCrumbs
        icon={<MdOutlinePayment />}
        link={"/payment-methods/add-payment"}
        menu={"Payment Method"} 
        customClass2={"back-btn"}
        subMenu={"Add Payment"}
        btnTitle2={"Back"}
        btnIcon2={<IoChevronBack />}
        btnEvent2={() => navigate("/payment-methods")}
      />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-[25px] mt-5">
        
      <div className="drop-shadow-xl pl-7 rounded-t-3xl text-[var(--blue)] bg-white font-medium text-lg p-3">
        Add Payment
      </div>
        
        <div className="px-10 py-7 bg-white">

          <div className="font-semibold text-lg mb-5 text-[#176ba3]">
            Select Payment Method:
          </div>
          
          <div className="flex items-center">

            <div
              className={`w-[8rem] cursor-pointer relative ${
                paymentType === "button1" ? "active-image" : ""
              }`}
              onClick={() => handlePaymentTypeClick("button1")}
            >
              <img src={master} alt="MasterCard" className="w-full" />
            </div>

            <div
              className={`w-[8rem] cursor-pointer relative ${
                paymentType === "button2" ? "active-image" : ""
              }`}
              onClick={() => handlePaymentTypeClick("button2")}
            >
              <img src={visa} alt="Visa" className="w-full" />
            </div>

            <div
              className={`w-[8rem] cursor-pointer relative ${
                paymentType === "button3" ? "active-image" : ""
              }`}
              onClick={() => handlePaymentTypeClick("button3")}
            >
              <img src={easypa} alt="EasyPaisa" className="w-full" />
            </div>

            <div
              className={`w-[8rem] cursor-pointer relative ${
                paymentType === "button4" ? "active-image" : ""
              }`}
              onClick={() => handlePaymentTypeClick("button4")}
            >
              <img src={jazz} alt="JazzCash" className="w-full" />
            </div>

            <div
              className={`w-[8rem] cursor-pointer relative ${
                paymentType === "button5" ? "active-image" : ""
              }`}
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
        <div className="fixed bottom-20">
          <WhiteButton customClass={"cancel-btn"}
            title={"Cancel"} marginRight={"1rem"}
            clickEvent={() => navigate("/payment-methods")}
          />

          <BlueButton customClass={"hover-color"} title={"Save"} clickEvent={() => navigate("/payment-methods")}/>
        </div>
    </>
  );
}
