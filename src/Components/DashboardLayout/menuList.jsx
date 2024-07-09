import { TbDeviceMobileUp, TbReportSearch } from "react-icons/tb";
import {
  MdDashboardCustomize,
  MdOutlinePayment,
  MdContactSupport,
} from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { RiGovernmentFill, RiLogoutBoxLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { debit, easypa } from "../../assets/image/index";

const menuList = [
  {
    name: "",
    lists: [
      {
        id: 1,
        title: "Dashboard",
        icon: <img src={easypa} alt="" className="w-12" />,
        icon1: <img src={debit} alt="" className="w-12" />,
        link: "/dashboard",
      },
      {
        id: 2,
        title: "Bill Manager",
        icon: <img src={easypa} alt="" className="w-12" />,
        icon1: <img src={debit} alt="" className="w-12" />,
        link: "/bill-management",
      },
      {
        id: 3,
        title: "Transactions",
        icon: <img src={easypa} alt="" className="w-12" />,
        icon1: <img src={debit} alt="" className="w-12" />,
        link: "/transactions",
      },
      {
        id: 4,
        title: "Mobile Top Up",
        icon: <img src={easypa} alt="" className="w-12" />,
        icon1: <img src={debit} alt="" className="w-12" />,
        link: "/mobile-top-up",
      },
      {
        id: 5,
        title: "Payment Methods",
        icon: <img src={easypa} alt="" className="w-12" />,
        icon1: <img src={debit} alt="" className="w-12" />,
        link: "/payment-methods",
      },
      // {
      //   id: 6,
      //   title: "Govt Payments",
      //   icon: <img src={easypa} alt="" className="w-12" />,
      //   icon1: <img src={debit} alt="" className="w-12" />,
      //   link: "/govt-payments",
      // },
    ],
  },
  {
    name: "",
    lists: [
      {
        id: 7,
        title: "Help",
        icon: <img src={easypa} alt="" className="w-12" />,
        icon1: <img src={debit} alt="" className="w-12" />,
        link: "/help",
      },
      {
        id: 8,
        title: "Reports",
        icon: <img src={easypa} alt="" className="w-12" />,
        icon1: <img src={debit} alt="" className="w-12" />,
        link: "/reports",
      },
      {
        id: 9,
        title: "Settings",
        icon: <img src={easypa} alt="" className="w-12" />,
        icon1: <img src={debit} alt="" className="w-12" />,
        link: "/settings",
      },
      {
        id: 10,
        classses: "mt-16 border-solid border border-[#E8E7EC] rounded-xl",
        title: "Logout",
        icon: <img src={easypa} alt="" className="w-12" />,
      },
    ],
  },
];

export default menuList;
