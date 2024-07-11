import { whiteDashboard,whiteBill,whiteGovt,whiteHelp,whiteLogout,whiteMobile,whitePayment,whiteSetting,whiteTransaction,whiteReport,grayReport
  ,grayDashboard,grayBill,grayGovt,grayHelp,grayLogout,grayMobile,grayPayment,graySetting,grayTransaction
} from "../../assets/image/index";

const menuList = [
  {
    name: "",
    lists: [
      {
        id: 1,
        title: "Dashboard",
        icon: <img src={grayDashboard} alt="" className="w-5 h-5" />,
        icon1: <img src={whiteDashboard} alt="" className="w-5 h-5" />,
        link: "/dashboard",
      },
      {
        id: 2,
        title: "Bill Manager",
        icon: <img src={grayBill} alt="" className="w-5 h-5" />,
        icon1: <img src={whiteBill} alt="" className="w-5 h-5" />,
        link: "/bill-manager",
      },
      {
        id: 3,
        title: "Transactions",
        icon: <img src={grayTransaction} alt="" className="w-4 h-4" />,
        icon1: <img src={whiteTransaction} alt="" className="w-4 h-4" />,
        link: "/transactions",
      },
      {
        id: 4,
        title: "Mobile Top Up",
        icon: <img src={grayMobile} alt="" className="w-5 h-5" />,
        icon1: <img src={whiteMobile} alt="" className="w-5 h-5" />,
        link: "/mobile-top-up",
      },
      {
        id: 5,
        title: "Payment Methods",
        icon: <img src={grayPayment} alt="" className="w-3 h-5" />,
        icon1: <img src={whitePayment} alt="" className="w-3 h-5" />,
        link: "/payment-methods",
      },
      // {
      //   id: 6,
      //   title: "Govt Payments",
      //   icon: <img src={easypa} alt="" className="w-5 h-5" />,
      //   icon1: <img src={debit} alt="" className="w-5 h-5" />,
      //   link: "/govt-payments",
      // },
    ],
  },
  {
    name: "",
    lists: [
      {
        id: 7,
        classses : "mt-[12rem]",
        title: "Help",
        icon: <img src={grayHelp} alt="" className="w-5 h-5" />,
        icon1: <img src={whiteHelp} alt="" className="w-5 h-5" />,
        link: "/help",
      },
      {
        id: 8,
        title: "Reports",
        icon: <img src={grayReport} alt="" className="w-5 h-5" />,
        icon1: <img src={whiteReport} alt="" className="w-5 h-5" />,
        link: "/reports",
      },
      {
        id: 9,
        title: "Settings",
        icon: <img src={graySetting} alt="" className="w-5 h-5" />,
        icon1: <img src={whiteSetting} alt="" className="w-5 h-5" />,
        link: "/settings",
      },
      {
        id: 10,
        classses: "fixed bottom-10 border-solid border border-[#E8E7EC] rounded-xl",
        title: "Logout",
        icon: <img src={grayLogout} alt="" className="w-5 h-5" />,
        icon1: <img src={whiteLogout} alt="" className="w-5 h-5" />,
      },
    ],
  },
];

export default menuList;
