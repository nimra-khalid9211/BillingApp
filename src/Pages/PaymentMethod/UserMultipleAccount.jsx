import { RiDeleteBin5Line } from "react-icons/ri";
import { maskCardNumber } from "../../Hooks";
import { accounts } from "../../data/tables";
import { useState } from "react";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { PaymentSuccessfullModal } from "../../Components/Modals";

export default function UserMultipleAccount() {
 const [verifyPopup, setVerifyPopup] = useState(false);
 const { setPaymentType , setCheckShown} = _BillingCondition()

 const navigate = useNavigate()
 
 const handleVerifyPopup = () => {
  setVerifyPopup(true);
};
const handleModalClose = () => {
  setVerifyPopup(false);
};
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-[25px] mt-5">
      <div className="bg-[#377CF6] text-white p-3">Payment Methods</div>

      <div className="pb-10 pt-5 px-5">
        {accounts.map((account, index) => (
          <div
            key={index}
            className="grid grid-cols-6 gap-4 rounded-lg mt-5 bg-white p-5"
          >
            <div className="flex items-center border-r-2">
              <div className="flex items-center ml-5">
                <div className="border">
                  <img src={account.cardImg} alt="card icon" />
                </div>
                <div className="ml-3 font-semibold text-lg">
                  {account.userName}
                </div>
              </div>
            </div>
            <div className="border-r-2 text-center font-semibold text-lg">
              {maskCardNumber(account.cardNumber)}
            </div>
            <div className="border-r-2 text-center">
              Expiry: {account.expiry}
            </div>
            <button
              className={`border-r-2 text-center ${
                account.verify === "verified" ? "text-[#24A959]" : "text-black"
              }`} onClick={handleVerifyPopup}
            >
              {account.verify}
            </button>
            <div
              className={`border-r-2 flex items-center justify-center ${
                account.status === "Default" ? "text-[#329DFF]" : "text-black"
              }`}
            >
              {account.status}
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="p-2 rounded-lg bg-[#DBF0FF] text-center">
                <FaEdit size={20} color="#006AB2" />
              </div>

              <div className="p-2 rounded-lg bg-[#FFD5DF] text-center">
                <RiDeleteBin5Line size={20} color="#F1416C" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <PaymentSuccessfullModal
        receiptModal={verifyPopup}
        setReceiptModal={handleModalClose}
        title="Verify Your Bank Account"
        debitTextOne="We will send you 2 small deposits (each between Rs 1.01 and Rs 1.50) to your Usman Fazal Bank Account for the verification."
        debitTextTwo="Please enter the amounts to verify you own the account."
        buttonText="Verify Account"
        from="debitAccountVerified"
        onButtonClick={()=>{
            localStorage.setItem("paymentType", "button5");
            navigate("/payment-methods/add-payment");
            setPaymentType("button5");setCheckShown(false)
        }
        }

      />
    </div>
  );
}
