import { TbDeviceMobileUp,TbReportSearch } from "react-icons/tb";
import { MdDashboardCustomize,MdOutlinePayment , MdContactSupport  } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { RiGovernmentFill,RiLogoutBoxLine  } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";

const menuList = [
  {
    name: "",
    lists: [
      {
        title: "Dashboard",
        icon: <MdDashboardCustomize size={25} />,
        link:"/dashboard",
      },
      {
        title: "Bill Management",
        icon: <FaMoneyBills  size={25} />,
        link:"/bill-management",
      },
      {
        title: "Govt Payments",
        icon: <RiGovernmentFill  size={25} />,
        link:"/govt-payments",
      },
      {
        title: "Mobile Top Up",
        icon: <TbDeviceMobileUp size={25} />,
        link:"/mobile-top-up",
      },
      {
        title: "Payment Methods",
        icon: <MdOutlinePayment  size={25} />        ,
        link:"/payment-methods",
      },
      {
        title: "Transactions",
        icon: <GrTransaction size={25} />        ,
        link:"/transactions",
      },
      {
        title: "Reports",
        icon: <TbReportSearch size={25} />        ,
        link:"/reports",
      },
    ],
  },
  {
    name: "",
    lists: [
      {
        title: "Settings",
        icon: <CiSettings size={25}/>,
        link: "/settings"
        ,
      },
      {
        title: "Help",
        icon: <MdContactSupport size={25}/>,
        link: "/help"
        ,
      },
      {
        classses: "mt-16 border-solid border border-[#E8E7EC] rounded-lg",
        title: "Logout",
        icon: <RiLogoutBoxLine size={25}/>,
      },
    ],
  },
];

export default menuList;
