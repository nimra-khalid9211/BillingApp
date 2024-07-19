
import { bitmap, visaCard, easyPaisa,  jazzcash, bank } from "../assets/image";

export const CardData = [
  
  {
    icon: <img src={bitmap} alt="" className="w-10" />,
    title: "Mastercard", 
    cardNumber: "5210",
    userName: "Nimra Khalid",
    default: true,
    expiry: "9/24",
    verify: true,
    cvv: 757,
    autoDebit: true
  },
  
  {
    icon: <img src={bank} alt="" className="w-10" />,
    title: "Bank", 
    cardNumber: "5210",
    userName: "Usman Fazal",
    default: false,
    expiry: "Bank",
    verify: false,
  },

  {
    icon: <img src={visaCard} alt="" className="w-10"/>,
    title: "Visa", 
    cardNumber: "5210",
    default: false,
    userName: "Usman Fazal",
    expiry: "9/23",
    verify: true,
    cvv: 757
  },

  {
    icon: <img src={easyPaisa} alt="" className="w-10" />,
    title: "Easypaisa", 
    cardNumber: "5210",
    userName: "Usman Fazal",
    default: false,
    expiry: "JazzCash",
    verify: true,
  },
  {
    icon: <img src={jazzcash} alt="" className="w-10" />,
    title: "JazzCash", 
    cardNumber: "5210",
    userName: "Usman Fazal",
    default: false,
    expiry: "Easypaisa",
    verify: true,
  },



];


export const ReportsCard = [
  {
    title: "Transaction Reports",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
  },
  {
    title: "Bills Reports",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
  },
  {
    title: "Top Up Reports",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
  },
  {
    title: "Govt Payments Reports",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
  },
  {
    title: "Payment Methods Reports",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
  },
];
