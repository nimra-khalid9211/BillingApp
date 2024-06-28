import { Button, Tabs } from "antd";
import { debit, easypa, jazz, master, visa } from "../../assets/image";
import MasterVisaCard from "./PaymentType/MasterVisaCards";
import Buttons from "../../Components/SaveCancelButton/buttons";
import JazzEasypaisa from "./PaymentType/jazzEasypaisa";
import DebitCard from "./PaymentType/debitCard";

export default function AddPayment(){
    const onChange = (key) => {
        console.log(key);
      };
      const items = [
        {
          key: '1',
          label: <div className="w-[11rem]"><img src={master} alt="" className="" /></div>,
          children: <MasterVisaCard/>,
        },
        {
          key: '2',
          label: <div className="w-[11rem]"><img src={visa} alt="" /></div>,
          children: <MasterVisaCard/>,
        },
        {
          key: '3',
          label: <div className="w-[11rem]"><img src={easypa} alt="" /></div>,
          children: <JazzEasypaisa/>,
        },
        {
            key: '4',
            label: <div className="w-[11rem]"><img src={jazz} alt="" /></div>,
            children: <JazzEasypaisa/>,
          },
          {
            key: '5',
            label: <div className="w-[11rem]"><img src={debit} alt="" /></div>,
            children: <DebitCard/>,
          },
      ];
    return(
        <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-[25px] mt-5">
        <div className="bg-[#377CF6] text-white p-3">Add Payment Methods</div>
        <div className="px-10 py-7 bg-white">
        <div className="font-semibold text-lg mb-5">Select your payment method:</div>

        <Tabs defaultActiveKey="1" items={items} onChange={onChange} type="card" />
        </div>
      </div>
        <Buttons button1="Cancel" button2="Save"/>
        </>
    )
}
