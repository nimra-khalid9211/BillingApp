import { TextField } from "@mui/material";
import { PaymentSuccessfullModal } from "../../../Components/Modals";
import {useEffect, useState} from "react";
import { info } from "../../../assets/image";
import { _BillingCondition } from "../../../actions/Context/BillingOverviewConditions";
import { WhiteButton, BlueButton } from "../../../UI/Buttons";
import { InputCustom } from "../../../UI/Inputs";

export default function DebitCard({type, width}) {
  const [verified, setVerified] = useState(false);
  // const { checkShown } = _BillingCondition();
  const [cencelVerification, setCancelVerification] = useState(false);
  const [checkShown, setCheckShown] = useState(true);

  // useEffect(() => {
  //   if(localStorage.getItem("paymentType") === "button5"){
  //     setCheckShown(false);
  //   } else {
  //       setCheckShown(true);
  //   }
  // }, []);
  const handleVerfied = () => {
    setCheckShown(!checkShown);

  };
  const handleModalClose = () => {
    setCancelVerification(false);
  };
  // const handleCancelVerification = () => {
  //   setCancelVerification(true);
  // };

  return (
    <div>
      <div className="border-b pb-2 font-bold mt-10">
        Bank Direct Debit Details
      </div>
      <div className={`${width ? "" :"grid grid-cols-2 gap-4 place-content-between"} mt-5`}>
      
      
        <div className={`${width ? width : "w-1/2"}`}>
          
          <div className={`grid ${width ? "grid-cols-5" : 'grid-cols-2'} gap-4`}>
            
            <div className="col-span-2">
            <InputCustom label={"Account Title"} />
            </div>

            <div className="col-span-2">
            <InputCustom label={"Bank Name"} />
            </div>

            <div className="col-span-2">
            <InputCustom label={"Branch Number"} />  
            </div>   

            <div className="col-span-2">
            <InputCustom label={"IBAN #"} />
            </div>

          </div>
        
            <div className="my-5">
              <input type="checkbox" onClick={handleVerfied} />
              <label htmlFor="" className="ml-3">
                I agree to the
                <span className="text-[#329DFF]"> "Terms & Conditions"</span>
                and
                <span className="text-[#329DFF]">"Privacy Policy"</span>
              </label>
            </div>

        </div>

        {/* {!checkShown && (
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
        )} */}

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
