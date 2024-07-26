import { LuDownload } from "react-icons/lu";
import { bitmap } from "../../../assets/image";
import { maskCardNumber } from "../../../Hooks";
import { Button } from "antd";
import { PDFTemplate } from "../../PDFTemplate";

export default function PaymentReciept({ bill, from }) {
  return (
    <div className="">
      <div className="w-full bg-white text-base p-6">
        
        <div className="flex justify-between py-3 border-dashed border-b border-[#eff0fb]">
          <span className="text-[#6C7293] font-medium">Transaction ID</span>
          <span className="medium text-black">123456789</span>
        </div>

        {from === "paymentReceipt" && (
          <div className="flex justify-between py-3 border-dashed border-b border-[#eff0fb]">
            <span className="text-[#6C7293] font-medium">Bill Name</span>
            <span className="medium text-black">biling</span>
          </div>
        )}
        {from === "Receipt" && (
          <div className="flex justify-between py-3 border-dashed border-b border-[#eff0fb]">
            <span className="text-[#6C7293] font-medium">Top Up Name</span>
            <span className="medium text-black">{bill.topUpName}</span>
          </div>
        )}
        {from === "Receipt" && (
          <div className="flex justify-between py-3 border-dashed border-b border-[#eff0fb]">
            <span className="text-[#6C7293] font-medium">Mobile Operator</span>
            <span className="medium text-black">
              {bill.mobileOperator}
            </span>
          </div>
        )}
        {from === "Receipt" && (
          <div className="flex justify-between py-3 border-dashed border-b border-[#eff0fb]">
            <span className="text-[#6C7293] font-medium">Mobile Number</span>
            <span className="medium text-black">
              {bill.mobileNumber}
            </span>
          </div>
        )}
        {from === "paymentReceipt" && (
          <div className="flex justify-between py-3 border-dashed border-b border-[#eff0fb]">
            <span className="text-[#6C7293] font-medium">Consumer ID</span>
            <span className="medium text-black">123456789</span>
          </div>
        )}

        {from === "paymentReceipt" && (
          <div className="flex justify-between py-3 border-dashed border-b border-[#eff0fb]">
            <span className="text-[#6C7293] font-medium">Company Code</span>
            <span className="medium text-black">GEPCO</span>
          </div>
        )}

        <div className="flex justify-between py-3 border-dashed border-b border-[#eff0fb]">
          <span className="text-[#6C7293] font-medium">Pay Date</span>
          <span className="medium text-black">10 June 2024</span>
        </div>

        <div className="flex justify-between py-3 border-dashed border-b border-[#eff0fb]">
          <span className="text-[#6C7293] font-medium">Pay Time</span>
          <span className="medium text-black">10: 12 AM</span>
        </div>

        <div className="flex justify-between py-3 border-dashed border-b border-[#eff0fb]">
          <span className="text-lg text-[#377CF6] font-medium">
            Amount Paid
          </span>
          <span className="text-2xl text-[#377CF6] medium">
            23,000
          </span>
        </div>

        <div className="py-3 border-dashed border-b border-[#eff0fb]">
          <span className="text-[#6C7293] font-medium text-start block">
            Payment Method
          </span>
          <div className="flex justify-between items-center text-sm text-[#6C7293] font-normal mt-3">
            <div className="flex items-center">
              <img
                src={bitmap}
                alt=""
                className="border border-1 px-2 rounded-lg"
              />
              <span className="pl-8">Usman Afzal</span>
            </div>
            <span>{maskCardNumber(1234567891234567)}</span>
          </div>
        </div>
        
      </div>
      <div className="flex justify-center items-center gap-4 py-3 bg-[#E8E7EC] rounded-b-[3rem]">
            <Button shape="round"
              className="border-[#4371D1] text-[#4371D1]"
              icon={<LuDownload />}
              onClick={PDFTemplate}
            >
              Download
            </Button>
            {/* <Button
          shape="round"
          icon={<FaShareNodes />}
          className="bg-[#4371D1] text-white"
        >
          Share
        </Button> */}
          </div>
    </div>
  );
}
