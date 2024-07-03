import { TextField } from "@mui/material";
import { PaymentSuccessfullModal } from "../../../Components/Modals";
import { useState } from "react";
import { paymentPopup, verify, info } from "../../../assets/image";
import Buttons from "../../../Components/SaveCancelButton/buttons";
import { _BillingCondition } from "../../../actions/Context/BillingOverviewConditions";
import { WhiteButton, BlueButton } from "../../../UI/Buttons";

export default function DebitCard(type) {
  const [verified, setVerified] = useState(false);
  const { checkShown } = _BillingCondition();

  // const [popUp, setPopup] = useState(false);
  // const [showButtons, setShowButtons] = useState(false);
  // const [verifyPopup, setVerifyPopup] = useState(false);
  // const [showCheckbox, setShowCheckbox] = useState(false);
  const [cencelVerification, setCancelVerification] = useState(false);

  const handleVerfied = () => {
    setVerified(!verified);
  };

  // const handlePopupClick = () => {
  //   setPopup(true);
  // };
  // const handleVerifyPopup = () => {
  //   setVerifyPopup(true);
  // };
  const handleModalClose = () => {
    setCancelVerification(false);
    // setPopup(false);
    // setVerifyPopup(false);
    // setCancelVerification(false)
  };
  // const handleGotItClick = () => {
  //   // setVerified(false);
  //   setPopup(false);
  //   setShowButtons(true);
  // };
  // const handleDefaultSet = () => {
  //   setShowButtons(false);
  //   setShowCheckbox(true);
  //   setVerifyPopup(false);
  //   setCancelVerification(false);
  // };
  const handleCancelVerification = () => {
    setCancelVerification(true);
  };
  // const handleCancelClick = () => {
  //   setCancelVerification(false);
  // };

  return (
    <div>
      <div className="border-b pb-2 font-bold mt-10">
        Bank Direct Debit Details
      </div>
      <div className="grid grid-cols-2 gap-4 place-content-between mt-5">
        <div className="">
          <div className="grid grid-cols-2 gap-4">
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

          {checkShown ? (
            <div className="my-5">
              <input type="checkbox" onClick={handleVerfied} />
              <label htmlFor="" className="ml-3">
                I agree to the
                <span className="text-[#329DFF]"> "Terms & Conditions"</span>
                and
                <span className="text-[#329DFF]">"Privacy Policy"</span>
              </label>
            </div>
          ) : (
            // <Buttons
            //   button1="Cancel Verification"
            //   button2="Verify Now"
            //   onButton1Click={handleCancelVerification}

            // />
            <div className="mt-5">
              <WhiteButton
                title="Cancel Verification"
                clickEvent={handleCancelVerification}
              />
              <BlueButton title="Verify Now" />
            </div>
          )}
        </div>
        {verified && (
          <div className="flex justify-center">
            <div className="border border-[#FF9402] rounded-lg p-4 w-[23rem] h-[8rem]">
              <div className="flex items-start">
                <img className="w-5 h-5 mt-1" src={info} alt="icon" />
                <div className="ml-2 leading-6">
                  In 1-3 business days, we'll send 2 small deposits (each
                  between Rs 1.01 and Rs 1.50). After you get them, come back
                  and confirm your bank.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <PaymentSuccessfullModal
        receiptModal={cencelVerification}
        setReceiptModal={handleModalClose}
        cancelTitle="Cancel Verification"
        cancelSecondHeading="Sorry to see you go :("
        cancelFirstHeading="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used."
        from="debitAccountCancelled"
      />
      {/* 
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
          onButton1Click={handleCancelVerification}
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
        from="debitAccountVerified"
        onButtonClick={handleDefaultSet}
      />

      */}
    </div>
  );
}
