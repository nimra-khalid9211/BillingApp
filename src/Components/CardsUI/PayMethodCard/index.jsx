import React, { useState } from "react";
import { Card, Switch } from "antd";
import { bitmap, emptyCard } from "../../../assets/image";
import { FaAngleRight,FaAngleDown } from "react-icons/fa";
import ChangeAccount from "../ChangeAccount/changeAccount";
import { LargeButtons } from "../../../UI/Buttons";
import SecondDrawer from "../../Drawers/SecondDrawer";
import { CardData } from "../../../data/cardData";
import { RxCross2 } from "react-icons/rx";
import { GoCheck } from "react-icons/go";

const PayMethodCard = ({ from, secondDrawer, setSecondDrawer }) => {
  const [changeAccount, setChangeAccount] = useState(false);

  const handleClick = () => {
    setChangeAccount(!changeAccount);
  };

  return (
    <>
     {CardData.length > 0 ? 
        CardData.filter((x)=> x.default === true).map((y)=>(
        <Card className="rounded-3xl drop-shadow-xl">
          
          <div className={`${CardData.length === 1 ? "flex justify-between  items-center" : "grid grid-cols-5"} p-5 text-sm font-semibold`}>

{/* ${CardData.length > 0 && "col-span-2"} */}
            <div className={`flex items-center text-center gap-2 ${CardData.length === 1 && "w-1/4"} border-r`}>
              <span>{y.icon}</span>
              <span>{y.userName}</span>
            </div>

            <div className={`flex justify-center text-center items-center  gap-1 border-r ${CardData.length === 1 && "w-1/4"}`}>
              <span className="text-xs text-[#9095ae]">ending</span>
              <span className="">{y.cardNumber}</span>
            </div>

            <div className={`flex justify-center items-center gap-1 border-r ${CardData.length === 1 && "w-1/4"}`}>
              <span>{y.default ? "Default" : ""}</span> 
            </div>

            <div className={`flex justify-center items-center gap-2 ${CardData.length > 1 ? "border-r": "w-1/4"}`}>
            <span>Auto Debit</span>
            <Switch className="drop-shadow-xl" checkedChildren={<GoCheck size={15}/>} unCheckedChildren={<RxCross2 size={14}/>} defaultChecked={y.autoDebit} size="small"/>
            </div>

            {CardData.length > 1 && 
            <div className={`flex justify-center cursor-pointer text-[#377CF6] items-center ${CardData.length === 1 && "w-1/4"}`}>
              <span className="underline">Change Account </span> 
              <span className="p-[1px] rounded-full bg-[#E8E7EC] ml-1"><FaAngleRight/></span>
            </div>}

          </div>

        </Card>
        ))
        
        :
      <Card className="rounded-3xl bg-[#F3F3F3] drop-shadow-xl px-5 py-3">

          <div className="flex items-center">

        <div className="ml-10">
          <img src={emptyCard} style={{height:"90px"}} alt="" />
        </div>

        <div className="ml-24">
          <LargeButtons title={"Add Payment Method"} clickEvent={()=>setSecondDrawer(true)}/>
        </div>

        </div>
        
      </Card>

        }


      <SecondDrawer setSecondDrawer={setSecondDrawer} secondDrawer={secondDrawer}/>

      <div className="grid grid-cols-2 gap-4 my-7">
      {changeAccount && <ChangeAccount />}
      </div>
    </>
  );
};

export default PayMethodCard;
