import { AiOutlineAppstore } from "react-icons/ai";

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
        icon: <AiOutlineAppstore size={18} />,
        link:"/bill-management",
      },
      {
        title: "Govt Payments",
        icon: <AiOutlineAppstore  size={18}/>,
        link:"/govt-payments",
      },
      {
        title: "Mobile Top Up",
        icon: <AiOutlineAppstore size={18} />,
        link:"/mobile-top-up",
      },
      {
        title: "Payment Methods",
        icon: <AiOutlineAppstore size={18} />,
        link:"/payment-methods",
      },
      {
        title: "Transactions",
        icon: <AiOutlineAppstore  size={18}/>,
        link:"/transactions",
      },
    ],
  },
  {
    name: "GENERAL",
    lists: [
      {
        title: "Settings",
        icon: <AiOutlineAppstore  size={18}/>,
      },
      {
        title: "Help & Support",
        icon: <AiOutlineAppstore size={18} />,
      },
      {
        classses: "mt-16 border-solid border border-[#E8E7EC] rounded-lg",
        title: "Logout",
        icon: <AiOutlineAppstore  size={18}/>,
      },
    ],
  },
];

export default menuList;
