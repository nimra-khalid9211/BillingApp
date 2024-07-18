import React from 'react'
import { debit, easypa, jazz, master, visa } from '../../assets/image'
import { _BillingCondition } from '../../actions/Context/BillingOverviewConditions';
import MasterVisaCard from '../../Pages/PaymentMethod/PaymentType/MasterVisaCards';
import JazzEasypaisa from '../../Pages/PaymentMethod/PaymentType/jazzEasypaisa';
import DebitCard from '../../Pages/PaymentMethod/PaymentType/debitCard';
import { BlueButton, WhiteButton } from '../../UI/Buttons';

const AddPayment = () => {
   
  const { paymentType, setPaymentType } = _BillingCondition();`
  `
  return (
    <div className="px-10 py-7 bg-white">
          
          <div className="flex items-center">

            <div
              className={`w-[9rem] cursor-pointer relative ${
                paymentType === "button1" ? "active-image" : ""
              }`}
              onClick={() => setPaymentType("button1")}
            >
              <img src={master} alt="MasterCard" className="w-full" />

            </div>

            <div
              className={`w-[9rem] cursor-pointer relative ${
                paymentType === "button2" ? "active-image" : ""
              }`}
              onClick={() => setPaymentType("button2")}
            >
              <img src={visa} alt="Visa" className="w-full" />

            </div>

            <div
              className={`w-[9rem] cursor-pointer relative ${
                paymentType === "button3" ? "active-image" : ""
              }`}
              onClick={() => setPaymentType("button3")}
            >
              <img src={easypa} alt="EasyPaisa" className="w-full" />

            </div>

            <div
              className={`w-[9rem] cursor-pointer relative ${
                paymentType === "button4" ? "active-image" : ""
              }`}
              onClick={() => setPaymentType("button4")}
            >
              <img src={jazz} alt="JazzCash" className="w-full" />

            </div>

            <div
              className={`w-[9rem] cursor-pointer relative ${
                paymentType === "button5" ? "active-image" : ""
              }`}
              onClick={() => setPaymentType("button5")}
            >
              <img src={debit} alt="Debit Card" className="w-full" />
              
            </div>
            
          </div>

          <div>

          <div>

{paymentType === "button1" && (
  <div>
    <MasterVisaCard width={"w-full"}/>
  </div>
)}

{paymentType === "button2" && (
  <div>
    <MasterVisaCard width={"w-full"}/>
  </div>
)}

{paymentType === "button3" && (
  <div>
    <JazzEasypaisa width={"w-full"}/>
  </div>
)}

{paymentType === "button4" && (
  <div>
    <JazzEasypaisa width={"w-full"}/>
  </div>
)}

{paymentType === "button5" && (
  <div>
    <DebitCard width={"w-full"}/>
  </div>
)}

</div>

          </div>

          
  
          
        </div>
  )
}

export default AddPayment