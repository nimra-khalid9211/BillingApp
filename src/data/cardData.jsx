
import { bitmap, visaCard, easyPaisa } from "../assets/image"


export const CardData =[
    {
        icon: <img src={bitmap} alt="" />,
        title: "Master card ending with  5210",
        default: true
    },
    {
        icon: <img src={visaCard} alt="" />,
        title: "Visa card ending with  5210",
        default: false
    },
    {
        icon: <img src={easyPaisa} alt="" />,
        title: "Easypaisa account ending with 1234",
        default: false
    },
]