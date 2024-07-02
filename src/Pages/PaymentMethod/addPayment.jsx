import { Button, Tabs } from "antd";
import { debit, easypa, jazz, master, visa } from "../../assets/image";
import MasterVisaCard from "./PaymentType/MasterVisaCards";
import Buttons from "../../Components/SaveCancelButton/buttons";
import JazzEasypaisa from "./PaymentType/jazzEasypaisa";
import DebitCard from "./PaymentType/debitCard";
import { BlueButton, WhiteButton } from "../../UI/Buttons";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../../UI/BreadCrumbs";
import { MdOutlinePayment } from "react-icons/md";

export default function AddPayment(){
  const navigate = useNavigate();


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

        <BreadCrumbs icon={<MdOutlinePayment />} menu={"Payment Method"} subMenu={"Add Payment"}
        btnTitle2={"Back"} btnIcon2={<IoChevronBack />} btnEvent2={()=>navigate("/payment-methods")}
        />

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-[25px] mt-5">
        <div className="bg-[#377CF6] flex justify-between items-center text-white p-3">
          Add Payment Methods
          
         
          </div>
        <div className="px-10 py-7 bg-white">
        <div className="font-semibold text-lg mb-5">Select your payment method:</div>

        <Tabs defaultActiveKey="1" items={items} onChange={onChange} type="card" />
        </div>
      </div>

      <div className="mt-10">
        <WhiteButton title={"Cancel"} clickEvent={()=>navigate("/payment-methods")}/>

          <BlueButton title={"Save"} />
        </div>

        </>
    )
}
