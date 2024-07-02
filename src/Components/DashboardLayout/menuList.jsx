import { TbDeviceMobileUp } from "react-icons/tb";
import { MdDashboardCustomize,MdOutlinePayment , MdContactSupport  } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { RiGovernmentFill,RiLogoutBoxLine  } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";

const menuList = [
  {
    name: "MAIN MENU",
    lists: [
      {
        title: "Dashboard",
        icon: <MdDashboardCustomize />,
        link:"/dashboard",
      },
      {
        title: "Bill Management",
        icon: <FaMoneyBills />,
        link:"/bill-management",
      },
      {
        title: "Govt Payments",
        icon: <RiGovernmentFill />,
        link:"/govt-payments",
      },
      {
        title: "Mobile Top Up",
        icon: <TbDeviceMobileUp/>,
        link:"/mobile-top-up",
      },
      {
        title: "Payment Methods",
        icon: <MdOutlinePayment />        ,
        link:"/payment-methods",
      },
      {
        title: "Transactions",
        icon: <GrTransaction />        ,
        link:"/transactions",
      },
    ],
  },
  {
    name: "GENERAL",
    lists: [
      {
        title: "Settings",
        icon: <CiSettings />,
        link: "/settings"
        ,
      },
      {
        title: "Help",
        icon: <MdContactSupport />,
        link: "/help"
        ,
      },
      {
        classses: "mt-16 border-solid border border-[#E8E7EC] rounded-lg",
        title: "Logout",
        icon: <RiLogoutBoxLine />,
      },
    ],
  },
];

export default menuList;
