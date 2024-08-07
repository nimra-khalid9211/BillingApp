import { Avatar, Badge, Dropdown, Menu } from "antd";
import { CiSettings } from "react-icons/ci";
import { FaAngleDown, FaAngleUp, FaRegBell, FaRegUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { RiLogoutBoxLine, RiUserLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";
import { LuCalendarDays } from "react-icons/lu";
import { formatDate } from "../../Hooks";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useEffect, useRef, useState } from "react";

const dropdownMenus = [
  {
    title: "Profile",
    icon: <RiUserLine size={20} />,
    link: "/settings/profile",
  },
  {
    title: "Settings",
    icon: <CiSettings size={20} />,
    link: "/settings",
  },
  {
    title: "Logout",
    icon: <RiLogoutBoxLine size={20} />,
  },
];

const dropdownMenu = (
  <Menu>
    {dropdownMenus.map((x, index) => (
      <Menu.Item key={index} icon={x.icon}>
        <Link to={x.link}>{x.title}</Link>
      </Menu.Item>
    ))}
  </Menu>
);

const Header = () => {
  const navigate = useNavigate();

  const { dropdown, checkVerfication } = _BillingCondition();
  const [showDate, setShowDate] = useState(false);
  const calenderRef = useRef(null);

  const formattedDate = formatDate(new Date());

  useEffect(()=>{
    const handleClickOutside = (event) => {
      if(calenderRef.current && !calenderRef.current.contains(event.target)){
        setShowDate(false);
      }
    };

    if(showDate){
      document.addEventListener('mousedown', handleClickOutside)
    }else{
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () =>{
        document.removeEventListener('mousedown', handleClickOutside)
    };
  },[showDate])

  return (
    <div className="flex items-center justify-between mx-3">
      <b className="text-2xl">
        <span className="text-[#6C7293] font-medium text-lg">Hello! </span> 

         <span className="text-xl text-[var(--blue)] font-medium">Shaun</span>
      </b>
      <div className="flex justify-between items-center gap-3">
       

        <div className='bg-white relative py-3 px-3 rounded-full flex gap-3'>
                <LuCalendarDays size={20} color='var(--blue)' role="button" onClick={()=>setShowDate(!showDate)}/> 

                <b className='text-sm border-l border-[#6C7293] pl-2'>{formattedDate}</b>
                </div>

               {showDate && <div ref={calenderRef} className="absolute bg-white z-10 top-14 rounded-3xl right-60">

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar readOnly/>
                </LocalizationProvider>

                </div>}

        <div className="bg-white py-3 px-3 rounded-full gap-3">
          <CiSettings
            size={27}
            onClick={() => navigate(checkVerfication ? "/settings" : "#")}
            role="button"
          />
        </div>

        <div className="bg-white py-3 px-3 flex items-center rounded-full gap-3">
          <Badge dot color="var(--blue)">
           
            <FaRegBell size={22} />
          </Badge>
        </div>

        <Dropdown
          overlay={checkVerfication ? dropdownMenu : ""}
          trigger={["click"]}
          // onVisibleChange={(visible) => setDropdown(visible)}
        >
          <div
            role="button"
            className={`bg-white p-1 relative flex items-center justify-start rounded-full gap-3`}
          >
            <Avatar size={34} icon={<FaRegUser />} />

            <div className="flex flex-col">
              <b
                className="text-sm font-semibold"
                style={{ lineHeight: "0.7rem" }}
              >
                Shaun Abbott
              </b>
            </div>

            {dropdown ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </Dropdown>
        
      </div>
    </div>
  );
};

export default Header;
