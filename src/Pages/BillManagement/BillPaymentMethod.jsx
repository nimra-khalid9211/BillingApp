import { Button, Card, Collapse } from "antd";
import React, { useState } from "react";
import { CardData } from "../../data/cardData";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";
import { IoChevronBack, IoChevronDownCircleOutline } from "react-icons/io5";
import { isOverdue } from "../../Hooks";
import { useNavigate } from "react-router-dom";
import { PaymentSuccessfullModal } from "../../Components/Modals";
import { paymentSuccessfull } from "../../assets/image";
import BreadCrumbs from "../../UI/BreadCrumbs";
import { FaMoneyBills } from "react-icons/fa6";
import { BlueButton, WhiteButton } from "../../UI/Buttons";

const BillPaymentMethod = () => {
  const { bills } = _BillingCondition();
  const navigate = useNavigate();

  const [receiptModal, setReceiptModal] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1); // State to track selected card index

  const totalAmount = bills?.reduce((total, bill) => {
    const amountString = isOverdue(bill.dueDate)
      ? bill.afterDueAmount
      : bill.amount;

    const amount = parseFloat(amountString.replace(/,/g, ""));

    return Math.round((total + amount) * 100) / 100;
  }, 0);

  const handleCardSelection = (index) => {
    setSelectedCardIndex(index); // Update state with selected card index
  };

  return (
    <>
      <BreadCrumbs
        link={"/bill-manager"}
        menu={"Bill Management"}
        icon={<FaMoneyBills />}
        subMenu={"Selected Bills"}
        thirdMenu={"Proceed Payment"}
        btnIcon2={<IoChevronBack />}
        btnTitle2={"Back"}
        btnEvent2={() => {
          navigate("/bill-manager/selected-bills");
        }}
      />

      <Card className="mt-3 rounded-3xl" bordered={false}>
        <div className="grid grid-cols-12 w-full ">
          <div className="col-span-8 px-8 bg-white pt-3 pb-10 rounded-tl-3xl rounded-bl-3xl">
            <span className="text-xl font-medium">Payment Method</span>
            <div className="border-b mt-2 border-1"></div>

            <div className="mt-6">
              <span className="text-base font-medium">
                Choose the Card you want to use for this Payment
              </span>

              <div className="grid grid-cols-5 gap-2 mt-5">
                {CardData.map((x, index) => (
                  <div
                    key={index}
                    className={`col-span-2 flex justify-between mt-1 items-start py-4 px-5 rounded-2xl border ${index === selectedCardIndex ? "activeRadio" : ""}`}
                  >
                    <div className="flex">
                      {x.icon}

                      <div className="pl-3">
                        <div className="font-semibold w-[160px] text-medium text-base">
                          {x.title}
                        </div>
                        <div className="text-xs  text-[#377CF6]">
                          {x.default ? "Default" : "Set as Default"}
                        </div>
                      </div>
                    </div>

                    <input
                      type="radio"
                      checked={index === selectedCardIndex} // Check based on state
                      onChange={() => handleCardSelection(index)} // Handle selection
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-4 px-8 py-3 bg-[#F8F9FD] rounded-tr-3xl rounded-br-3xl">
            <span className="text-xl font-medium"> Payment Details</span>

            <div className="border-b mt-2 border-1"></div>

            <div className="mt-6">
              <div className="flex justify-between items-center text-base font-medium px-1">
                <div className="flex items-center gap-2">
                  <IoChevronDownCircleOutline size={20} color="#6C7293" />

                  <span>Total Payable Amount</span>
                </div>

                <span>{bills && bills.length}</span>
              </div>

              <div className="border-b mt-2 border-1"></div>

              {bills &&
                bills.map((x, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-[#EBF7FF] rounded-xl border-[#DBF0FF] mt-2 py-2 px-4"
                  >
                    <span className="text-sm font-semibold">{x.billname}</span>

                    <span className="text-lg font-semibold">
                      {isOverdue(x.dueDate) ? x.afterDueAmount : x.amount}
                    </span>
                  </div>
                ))}

              <div className="flex items-center justify-between mt-3 p-4 rounded-xl border-[#377CF6] border-2 text-[#377CF6]">
                <span className="text-base font-medium">
                  Total Payable Amount
                </span>

                <span className="text-2xl font-medium">
                  {totalAmount?.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <PaymentSuccessfullModal
          receiptModal={receiptModal}
          setReceiptModal={setReceiptModal}
          from={"payment"}
          img={paymentSuccessfull}
          title={"Payment Successful"}
          bills={bills}
          width={450}
          firstHeading={`We are pleased to inform you that the payment for ${bills?.length} bills have been successfully processed.`}
          buttonText={"Billing Overview"}
          onButtonClick={() => navigate("/bill-manager")}
        />
      </Card>
      <div className="fixed bottom-20 gap-3">
        <WhiteButton
          title={"Cancel"}
          clickEvent={() => {
            navigate("/bill-manager/selected-bills");
          }}
        />

        <BlueButton
          title={`Pay Rs. ${totalAmount ? totalAmount?.toLocaleString() : ""}`}
          clickEvent={() => setReceiptModal(true)}
        />
      </div>
    </>
  );
};

export default BillPaymentMethod;

