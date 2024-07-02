import { IoChevronBack } from "react-icons/io5";
import { BlueButton } from "../../UI/Buttons";
import { smallArrow, TikCheck } from "../../assets/icon/index";
import Card from "../../assets/image/Bitmap.svg";
import { useNavigate } from "react-router-dom";


export default function RechangeAccount() {
  const navigate = useNavigate();


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-[25px] mt-5">
      <div className="bg-[#377CF6] flex justify-between items-center text-white p-3">

        <span>Mobile Top Up</span>

        <BlueButton clickEvent={()=>navigate("/mobile-top-up")} title={"Back"} icon={<IoChevronBack size={18} />}/>

        
        </div>
      <div className="py-10 px-5">
        <div className="font-bold bold text-lg">Your Account Details</div>
        <div className="grid grid-cols-5 gap-4 rounded-lg mt-5 bg-white p-5">
          <div className="flex items-center border-r-2">
            <div className="">
              <img src={TikCheck} alt="icon" />
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
            <div className="bg-[#DBF0FF] rounded-2xl w-[10rem] p-2 text-center">Default</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-[#377CF6] underline">Change Account</div>
            <div className="ml-2">
              <img src={smallArrow} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
