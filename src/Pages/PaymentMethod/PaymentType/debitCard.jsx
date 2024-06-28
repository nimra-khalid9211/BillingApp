import { TextField } from "@mui/material";
import { PaymentSuccessfullModal } from "../../../Components/Modals";
import { useState } from "react";
import { paymentPopup } from "../../../assets/image";
import Buttons from "../../../Components/SaveCancelButton/buttons";

export default function DebitCard() {
  const [verified, setVerified] = useState(true);
  const [popUp, setPopup] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [verifyPopup, setVerifyPopup] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(false);

  const handlePopupClick = () => {
    setPopup(true);
  };
  const handleVerifyPopup = () => {
    setVerifyPopup(true);
  };
  const handleModalClose = () => {
    setPopup(false);
    setVerifyPopup(false);
  };
  const handleGotItClick = () => {
    setVerified(false);
    setPopup(false);
    setShowButtons(true);
  };
  const handleDefaultSet = () => {
    setShowButtons(false);
    setShowCheckbox(true);
    setVerifyPopup(false);
  };

  return (
    <div>
      <div className="border-b pb-2 font-bold mt-10">
        Bank Direct Debit Details
      </div>
      <div className="w-1/2">
        <div className="grid grid-cols-2 gap-4 mt-5">
          <TextField
            id="outlined-basic"
            label="Account Title"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Bank Name "
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Branch Number"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="IBAN#" variant="outlined" />
        </div>
       
        {verified && (
          <>
           <div className="my-5">
           <input type="checkbox" />
           <label htmlFor="" className="ml-3">
             I agree to the{" "}
             <span className="text-[#329DFF]"> "Terms & Conditions"</span> and{" "}
             <span className="text-[#329DFF]">"Privacy Policy"</span>
           </label>
         </div>
          <button
            className="text-[#329DFF] underline font-semibold"
            onClick={handlePopupClick}
          >
            Verify Account
          </button>
          </>
        )}
      </div>
      <PaymentSuccessfullModal
        width={500}
        receiptModal={popUp}
        setReceiptModal={handleModalClose}
        img={paymentPopup}
        title="Verify My Account"
        firstHeading="We will send you 2 small deposits (each between Rs 1.01 and Rs 1.50) to your Usman Fazal Bank Account for the verification."
        secondHeading="Once you received the deposits (usually takes 4-6 days) please enter the amounts to verify you own the account."
        buttonText="Got it"
        from="payment"
        onButtonClick={handleGotItClick}
      />
      {!verified && showButtons && (
        <Buttons
          button1="Cancel Verification"
          button2="Verify Now"
          onButton2Click={handleVerifyPopup}
        />
      )}
      {showCheckbox && (
        <div className="mt-5">
          <input type="checkbox" />
          <label htmlFor="" className="ml-3">
            Set as Default
          </label>
        </div>
      )}
      <PaymentSuccessfullModal
        receiptModal={verifyPopup}
        setReceiptModal={handleModalClose}
        title="Verify Your Bank Account"
        debitTextOne="We will send you 2 small deposits (each between Rs 1.01 and Rs 1.50) to your Usman Fazal Bank Account for the verification."
        debitTextTwo="Please enter the amounts to verify you own the account."
        buttonText="Verify Account"
        from="debitAccount"
        onButtonClick={handleDefaultSet}
      />
    </div>
  );
}
