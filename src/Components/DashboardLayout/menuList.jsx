import { AiOutlineAppstore } from "react-icons/ai";
import { Bills, Govt , Creditcard,Help,Mobile,Settings,Transaction,ArrowLeft } from "../../assets/icon";


const menuList = [
  {
    name: "MAIN MENU",
    lists: [
      {
        title: "Dashboard",
        icon: <AiOutlineAppstore size={18}/>,
        link:"/",
      },
      {
        title: "Bill Management",
        icon: <img src={Bills} alt="" />,
        link:"/bill-management",
      },
      {
        title: "Govt Payments",
        icon: <img src={Govt} alt="" />,
        link:"/govt-payments",
      },
      {
        title: "Mobile Top Up",
        icon: <img src={Mobile} alt="" />,
        link:"/mobile-top-up",
      },
      {
        title: "Payment Methods",
        icon: <img src={Creditcard} alt="" />,
        link:"/payment-methods",
      },
      {
        title: "Transactions",
        icon: <img src={Transaction} alt="" />,
        link:"/transactions",
      },
    ],
  },
  {
    name: "GENERAL",
    lists: [
      {
        title: "Settings",
        icon: <img src={Settings} alt="" />,
      },
      {
        title: "Help & Support",
        icon: <img src={Help} alt="" />,
      },
      {
        classses: "mt-16 border-solid border border-[#E8E7EC] rounded-lg",
        title: "Logout",
        icon: <img src={ArrowLeft} alt="" />,
      },
    ],
  },
];

export default menuList;
