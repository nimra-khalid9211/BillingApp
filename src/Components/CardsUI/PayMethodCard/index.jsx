import React, { useState } from "react";
import { Card } from "antd";
import { bitmap } from "../../../assets/image";
import { FaAngleRight,FaAngleDown } from "react-icons/fa";
import ChangeAccount from "../ChangeAccount/changeAccount";

const PayMethodCard = ({ from }) => {
  const [changeAccount, setChangeAccount] = useState(false);

  const handleClick = () => {
    setChangeAccount(!changeAccount);
  };

  return (
    <>
      <Card className="rounded-3xl drop-shadow-md">
        <div className="grid grid-cols-8 py-7 content-center">
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
        </div>
      </Card>
      <div className="grid grid-cols-2 gap-4 my-7">
      {changeAccount && <ChangeAccount />}
      </div>
    </>
  );
};

export default PayMethodCard;
