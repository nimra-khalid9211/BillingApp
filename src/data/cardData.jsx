import { Descriptions } from "antd";
import { bitmap, visaCard, easyPaisa, jazz, jazzc, jazzcash } from "../assets/image";

export const CardData = [
  {
    icon: <img src={bitmap} alt="" />,
    title: "MasterCard", 
    cardNumber: "5210",
    default: true,
  },
  {
<<<<<<< HEAD
    icon: <img src={visaCard} alt=""/>,
=======
    icon: <img src={visaCard} alt="" />,
>>>>>>> origin/authUpdates
    title: "Visa", 
    cardNumber: "5210",
    default: false,
  },
  {
    icon: <img src={easyPaisa} alt="" />,
    title: "Easypaisa", 
    cardNumber: "5210",
    default: false,
  },
  {
<<<<<<< HEAD
    icon: <img src={jazzcash} alt="" />,
=======
    icon: <img src={easyPaisa} alt="" />,
>>>>>>> origin/authUpdates
    title: "JazzCash", 
    cardNumber: "5210",
    default: false,
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
