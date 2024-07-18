import React, { useState } from "react";
import { Card } from "antd";
import { bitmap, emptyCard } from "../../../assets/image";
import { FaAngleRight,FaAngleDown } from "react-icons/fa";
import ChangeAccount from "../ChangeAccount/changeAccount";
import { LargeButtons } from "../../../UI/Buttons";
import SecondDrawer from "../../Drawers/SecondDrawer";
import { CardData } from "../../../data/cardData";
import { DefaultAccount } from "../../../Pages/MobileTopUp/rechangeAccount";

const PayMethodCard = ({ from, secondDrawer, setSecondDrawer }) => {
  const [changeAccount, setChangeAccount] = useState(false);

  const handleClick = () => {
    setChangeAccount(!changeAccount);
  };

  return (
    <>
     {CardData.length > 0 ? 
        CardData.filter((x)=> x.default === true).map((y)=>(
        <Card>
          
          <div className="grid grid-cols-5">

            <div>
              {y.icon}
              <span>{y.userName}</span>
            </div>

          </div>

        </Card>
        ))
        
        :
      <Card className="rounded-3xl bg-[#F3F3F3] drop-shadow-xl px-5 py-3">

        {/* <div className="grid grid-cols-8 py-7 content-center">

          <div className="col-span-2 border-r ">
            
            <div className="flex justify-around items-center">
              <img src={bitmap} alt="" />
              <span className="pr-5">Usman Afzal</span>
            </div>

          </div>

          <div className="col-span-2 border-r flex items-center justify-center">
            <span className="text-xs text-[#6C7293]">ending</span>
            <span className="">5216</span>
          </div>

          <div className="col-span-2 border-r flex items-center justify-center">
            <span className=" text-[#377CF6] bg-[#DBF0FF] px-6 py-2 rounded-lg font-medium">
              Default
            </span>
          </div>

          <div
            className="col-span-2 flex items-center justify-center"
            onClick={handleClick}
          >
            <a className=" text-[#377CF6] underline rounded-lg font-medium pr-1">
              Change Account
            </a>
            <span className="text-[#377CF6] bg-[#E8E7EC] rounded-full">
              {
                changeAccount ?  <FaAngleDown size={15} /> :  <FaAngleRight size={15}/>
              }
            </span>
          </div>

        </div> */}

       

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
