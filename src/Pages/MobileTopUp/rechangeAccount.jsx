import { IoChevronBack } from "react-icons/io5";
import { BlueButton } from "../../UI/Buttons";
import { smallArrow, TikCheck } from "../../assets/icon/index";
import Card from "../../assets/image/Bitmap.svg";
import { useNavigate } from "react-router-dom";
import { SiTicktick } from "react-icons/si";
import BreadCrumbs from "../../UI/BreadCrumbs";
import ChangeAccount from "../../Components/CardsUI/ChangeAccount/changeAccount";
import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";


export default function RechangeAccount() {
  const navigate = useNavigate();
  const [changeAccount, setChangeAccount] = useState(false);

  const handleClick = () => {
    setChangeAccount(!changeAccount);
  };


  return (
    <>
        <BreadCrumbs
        link={"/mobile-top-up"}
        menu={"Mobile TopUp"} 
        btnIcon2={<IoChevronBack size={18} />}
        subMenu={'Recharge Now'}
        btnTitle2={"Back"}
        customClass2="back-btn"
        btnEvent2={() => { navigate("/mobile-top-up")}}
      />

    <div className="overflow-x-auto shadow-md sm:rounded-lg rounded-[25px] mt-5">
      
    <div className="drop-shadow-xl text-[var(--blue)] rounded-t-3xl text-lg pl-7 bg-white p-3">
       Mobile Top Up
      </div>

      <div className="py-10 px-5 bg-white">
        <div className="font-medium text-base text-[#F58021]">Default Payment</div>
        <div className="grid grid-cols-5 gap-4 rounded-2xl mt-5 bg-white p-5 drop-shadow-lg">
          <div className="flex items-center border-r-2">
            <div className="">
                 <SiTicktick size={20} color="#189D0E" />
            </div>
            <div className="flex items-center ml-7">
              <div className="border">
                <img src={Card} alt="icon" />
              </div>
              <div className="ml-5 font-semibold text-lg">User Name</div>
            </div>
          </div>
          <div className="border-r-2 text-center font-semibold text-lg">**** **** **** 2413</div>
          <div className="border-r-2 text-center">Expiry: 10/26</div>
          <div className="border-r-2 flex items-center justify-center text-[#377CF6]">
            <div className="bg-[var(--secondary-color)] rounded-3xl w-[7rem] py-2 text-center">Default</div>
          </div>
          <div className="flex items-center justify-center cursor-pointer"  onClick={handleClick}>
            <div className="text-[#377CF6] underline">Change Account</div>
            {
                changeAccount ?  <FaAngleDown size={15}  color="#377CF6"/> :  <FaAngleRight size={15} color="#377CF6"/>
              }
          </div>
        </div>
      </div>
      {changeAccount &&
        <div className="grid grid-cols-4 px-5 pb-5 gap-4 bg-white">
        <ChangeAccount/>
      </div>}
    
      
    </div>
    </>
  );
}
