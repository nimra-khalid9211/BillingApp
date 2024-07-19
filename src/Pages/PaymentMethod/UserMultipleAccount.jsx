import { RiDeleteBin5Line } from "react-icons/ri";
import { CardData as initialCardData } from "../../data/cardData";
import { useEffect, useState } from "react";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { PaymentSuccessfullModal } from "../../Components/Modals";

export default function UserMultipleAccount() {
  const [cardData, setCardData] = useState(initialCardData);
  const [verifyPopup, setVerifyPopup] = useState(false);
  const { setPaymentType, setCheckShown } = _BillingCondition();

  const navigate = useNavigate();

  const handleVerifyPopup = () => {
    setVerifyPopup(true);
  };

  const handleModalClose = () => {
    setVerifyPopup(false);
  };
  const isCardExpired = (expiry) => {
    const keywords = ["JazzCash", "Easypaisa", "Bank"];
    if (keywords.includes(expiry)) {
      return false;
    }
    const [month, year] = expiry.split("/").map(Number);
    const now = new Date();
    const expDate = new Date(year + 2000, month - 1);
  
    return now > expDate;
  };
  
  const handleSetAsDefault = (index) => {
    const selectedCard = cardData[index];
  
    // Check if the selected card is expired
    if (isCardExpired(selectedCard.expiry)) {
      return; // Do nothing if the card is expired
    }
  
    const updatedCards = [...cardData];
    updatedCards.forEach((card) => {
      card.default = false; // Reset default status for all cards
    });
    updatedCards[index].default = true; // Set the selected card as default
  
    // Move the selected card to the top of the list
    const [movedCard] = updatedCards.splice(index, 1);
    updatedCards.unshift(movedCard);
  
    setCardData(updatedCards);
  };
  
  

  const handleNavigate = (account) => {
    const { id, userName, cardNumber, expiry, verify, default: isDefault, title,cvv } = account;
    const simpleAccount = {
      id,
      userName,
      cardNumber,
      expiry,
      verify,
      cvv,
      default: isDefault,
    };

    // Determine buttonType based on account title
    let buttonType;
    switch (title.toLowerCase()) {
      case "mastercard":
        buttonType = "button1";
        break;
      case "visa":
        buttonType = "button2";
        break;
      default:
        buttonType = "buttonDefault"; 
        break;
    }

    // localStorage.setItem("paymentType", buttonType);
    setPaymentType(buttonType);
    setCheckShown(false);
    navigate('/payment-methods/add-payment', { state: { account: simpleAccount } });
  };

  const deleteItem = (indexToDelete) => {
    const updatedItems = cardData.filter((item, index) => index !== indexToDelete);
    setCardData(updatedItems);
    console.log("clicked")
  };
  console.log(cardData, "nimra")

  return (
    <div className="relative bg-white shadow-md rounded-3xl mt-5">
      
      <div className="drop-shadow-xl text-[var(--blue)] rounded-t-3xl text-lg pl-7 bg-white p-3">
        Payment Methods
      </div>

      <div className="pb-10 pt-5 px-5">
        {cardData.map((x, index) => (
          <div
            key={index}
            className={`grid grid-cols-6 gap-4 rounded-xl mt-5 py-7 px-4 shadow-lg ${isCardExpired(x.expiry) ? 'border border-[#E92F39]' : 'bg-white'}`} // Conditional class application
          >
            <div className="flex items-center border-r-2">
              <div className="flex items-center ml-5">
                <div className="w-8 h-6 flex items-center justify-center">
                  {x.icon}
                </div>
                <div className="ml-3 font-medium text-lg">
                  {x.userName}
                </div>
              </div>
            </div>
            <div className="border-r-2 text-center font-medium text-lg">
              <span className="text-xs text-[#9095ae]">
                ending
                <span className="text-base font-medium text-black">
                  {x.cardNumber}
                </span>
              </span>
            </div>
            <div className="border-r-2 text-center">
              {["JazzCash", "Easypaisa", "Bank"].includes(x.expiry) ? (
                <div className="">{x.expiry}</div>
              ) : (
                <>
                  {!isCardExpired(x.expiry) ? (

                    <div>
                      <span className="text-[#6C7293]">Expiry: </span>
                      {x.expiry}
                    </div>
                  ) : (
                    <>

                      <div className="">
                        <span className="text-[#6C7293]">Expiry: </span>
                        {x.expiry}
                      </div>

                      <div className="mt-1 text-[#F1416C] border border-[#F1416C] rounded-3xl bg-[#FFD5DF] w-20 mx-auto">
                        expired
                      </div>

                    </>
                  )}
                </>
              )}
            </div>
            <button className={`border-r-2 text-center cursor-default`}>
              {x.verify ? (
                <div className="text-[#24A959]">Verified</div>
              ) : (
                <div
                  className="flex justify-center"
                  onClick={() => handleVerifyPopup()}
                >
                  <span className="px-4 py-1 border-2 bg-[var(--blue)] text-white opacity-80 rounded-full border-[var(--blue)] cursor-pointer">
                    Verify Now
                  </span>
                </div>
              )}
            </button>
            <div
              className={`border-r-2 flex items-center justify-center ${
                x.default && !isCardExpired(x.expiry) ? "text-black cursor-pointer" : !x.verify ? "text-gray-400 cursor-default" : isCardExpired(x.expiry) ? "text-gray-400" : "cursor-pointer"
              }`}
              onClick={x.verify ? () => handleSetAsDefault(index) : ""}
            >
              {x.default ? "Default" : "Set as Default"}
            </div>

            {isCardExpired(x.expiry) ? (
              
              <span className="text-[#329DFF] underline flex items-center justify-center cursor-pointer" 
              onClick={() => handleNavigate(x)}>
                Update Now
              </span>
            ) : (
              <div className="flex justify-center items-center gap-3 cursor-pointer" onClick={() => deleteItem(index)}
>
                <div className="p-2 rounded-lg bg-[#FFD5DF]">
                  <RiDeleteBin5Line size={15} color="#F1416C" />
                </div>
              </div>
            )}
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
        onButtonClick={() => {
          // localStorage.setItem("paymentType", "button5");
          navigate("/payment-methods");
          // setPaymentType("button5");
          setCheckShown(false);
        }}
      />
    </div>
  );
}
