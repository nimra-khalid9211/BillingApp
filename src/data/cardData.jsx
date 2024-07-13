
import { bitmap, visaCard, easyPaisa, jazz, jazzc, jazzcash } from "../assets/image";

export const CardData = [

  {
    icon: <img src={bitmap} alt="" />,
    title: "Mastercard", 
    cardNumber: "5210",
    userName: "Usman Fazal",
    default: true,
    expiry: "9/23",
    verify: false,
  },

  {
    icon: <img src={visaCard} alt=""/>,
    title: "Visa", 
    cardNumber: "5210",
    default: false,
    userName: "Usman Fazal",
    expiry: "9/23",
    verify: true,
  },

  {
    icon: <img src={easyPaisa} alt="" />,
    title: "Easypaisa", 
    cardNumber: "5210",
    userName: "Usman Fazal",
    default: false,
    expiry: "9/23",
    verify: true,
  },

  {
    icon: <img src={jazzcash} alt="" />,
    title: "JazzCash", 
    cardNumber: "5210",
    userName: "Usman Fazal",
    default: false,
    expiry: "9/23",
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
