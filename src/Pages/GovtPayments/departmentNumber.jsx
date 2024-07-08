import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BlueButton } from '../../UI/Buttons';
import { IoChevronBack } from 'react-icons/io5';
import BreadCrumbs from '../../UI/BreadCrumbs';
import { RiGovernmentFill } from 'react-icons/ri';

export default function DepartmentNumber() {
  const navigate = useNavigate();
  const location = useLocation().state;
  // const componentName = location.state?.componentName || 'Default Component Name';
  // const componentIcon = location.state?.componentIcon || 'default icon'
  // console.log(location)

  // console.log(componentName)


  return (
<>
<BreadCrumbs icon={<RiGovernmentFill />} menu={"Govt Payments"} btnTitle2={"Back"} btnIcon2={<IoChevronBack />} btnEvent2={()=>navigate("/govt-payments")}/>

    <div className="rounded-[3rem] border bg-white">
      <div className="bg-[#377CF6] flex justify-between items-center text-white p-3 mb-10 rounded-t-lg">
      {location.componentName}

    
      </div>
      <div className="w-[60%] mx-auto text-center font-semibold py-20 flex items-center justify-center flex-col">
        <div className='w-24 h-24'>
          <img src={location.componentIcon} alt="" className='w-full h-full' />
        </div>
        <div className="text-lg mt-5">{location.componentName}</div>
        <p className="text-sm mt-3 font-semibold">Please enter your 17 digits PSID to view your E-Challan</p>
        <div className="w-[22rem] mx-auto mt-10">
          <input
            type="number"
            placeholder="Enter PSID Number"
            className=" border text-sm rounded-lg p-2.5 outline-none w-full"
            required
          />
        </div>
        <Link to= 'search-no'>
        <button className="bg-[#377CF6] text-white rounded-2xl py-3 px-[10rem] text-sm mt-5">Search</button>
        </Link>
      </div>
    </div>
    </>

  );
}
