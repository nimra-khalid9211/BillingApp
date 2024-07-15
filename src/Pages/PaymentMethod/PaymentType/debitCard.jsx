import { TextField } from "@mui/material";
import { PaymentSuccessfullModal } from "../../../Components/Modals";
import {useEffect, useState} from "react";
import { info } from "../../../assets/image";
import { _BillingCondition } from "../../../actions/Context/BillingOverviewConditions";
import { WhiteButton, BlueButton } from "../../../UI/Buttons";
import { InputCustom } from "../../../UI/Inputs";

export default function DebitCard(type) {
  const [verified, setVerified] = useState(false);
  // const { checkShown } = _BillingCondition();
  const [cencelVerification, setCancelVerification] = useState(false);
  const [checkShown, setCheckShown] = useState(true);

  useEffect(() => {
    if(localStorage.getItem("paymentType") === "button5"){
      setCheckShown(false);
    } else {
        setCheckShown(true);
    }
  }, []);
  const handleVerfied = () => {
    setVerified(!verified);
  };
  const handleModalClose = () => {
    setCancelVerification(false);
  };
  const handleCancelVerification = () => {
    setCancelVerification(true);
  };

  return (
    <div>
      <div className="border-b pb-2 font-bold mt-10">
        Bank Direct Debit Details
      </div>
      <div className="grid grid-cols-2 gap-4 place-content-between mt-5">
        <div className="">
          <div className="grid grid-cols-2 gap-4">

          <InputCustom label={"Account Title"} />

            {/* <TextField
              id="outlined-basic"
              label="Account Title"
              variant="outlined"
              size="small"
            /> */}

            <InputCustom label={"Bank Name"} />

            {/* <TextField
              id="outlined-basic"
              label="Bank Name "
              variant="outlined"
              size="small"
            /> */}

            <InputCustom label={"Branch Number"} />

            {/* <TextField
              id="outlined-basic"
              label="Branch Number"
              variant="outlined"
              size="small"
            /> */}

            <InputCustom label={"IBAN #"} />

            {/* <TextField
              id="outlined-basic"
              label="IBAN#"
              variant="outlined"
              size="small"
            /> */}
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
            <div className="mt-5">
              <WhiteButton
                title="Cancel Verification"
                clickEvent={handleCancelVerification}
                customClass='cancel-btn' customStyle={"11rem"}
              />
              <BlueButton title="Verify Now"
              customClass='hover-color' customStyle={"11rem"} />
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
    </div>
  );
}
