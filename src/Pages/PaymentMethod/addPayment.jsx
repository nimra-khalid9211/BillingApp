import { bank, bitmap, debit, easypa, easyPaisa, jazz, jazzcash, master, visa, visaCard } from "../../assets/image";
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

          <div className="medium text-lg mb-5 text-[#176ba3]">
            Select Payment Method:
          </div>
          
          <div className="flex items-center gap-5">

            <div
              className={`w-[6rem] h-[3rem] flex justify-center items-center
               ${paymentType === "button1" ? "active-image" : "inactive-image" }
                `} 
               
              onClick={() => handlePaymentTypeClick("button1")}
            >
              <img src={bitmap} alt="MasterCard" width={41} />
            </div>

            <div
              className={`w-[6rem] h-[3rem] flex justify-center items-center
               ${paymentType === "button2" ? "active-image" : "inactive-image" }
                `} 
               
              onClick={() => handlePaymentTypeClick("button2")}
            >
              <img src={visaCard} alt="MasterCard" width={53} />
            </div>

            <div
              className={`w-[6rem] h-[3rem] flex justify-center items-center
               ${paymentType === "button3" ? "active-image" : "inactive-image" }
                `} 
               
              onClick={() => handlePaymentTypeClick("button3")}
            >
              <img src={easyPaisa} alt="MasterCard"  width={32} />
            </div>

            <div
              className={`w-[6rem] h-[3rem] flex justify-center items-center
               ${paymentType === "button4" ? "active-image" : "inactive-image" }
                `} 
               
              onClick={() => handlePaymentTypeClick("button4")}
            >
              <img src={jazzcash} alt="MasterCard" width={36} />
            </div>

            <div
              className={`w-[6rem] h-[3rem] flex justify-center items-center
               ${paymentType === "button5" ? "active-image" : "inactive-image" }
                `} 
               
              onClick={() => handlePaymentTypeClick("button5")}
            >
              <img src={bank} alt="MasterCard" width={29} />
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
