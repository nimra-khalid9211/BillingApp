import { RiDeleteBin5Line } from "react-icons/ri";
import { bitmap } from "../assets/image";

export const notification = [
    {
        id: 1,
        icon: <img src={bitmap} alt="" className="w-10" />,
        title: "New Bill Added Successfully", 
        billName : "Apex Office",
        time: "Just Now",
        delNoti : <RiDeleteBin5Line size={20} color="#F1416C" />
    },
    {
        id: 2,
        icon: <img src={bitmap} alt="" className="w-10" />,
        title: "New Bill  Added Successfully", 
        billName: "Apex Office",
        time: "10 mins ago",
        delNoti : <RiDeleteBin5Line size={20} color="#F1416C" />
    },
    {
        id: 3,
        icon: <img src={bitmap} alt="" className="w-10" />,
        title: " Bill Deleted Successfully", 
        billName: "Apex Office",
        time: "18 mins ago",
        delNoti : <RiDeleteBin5Line size={20} color="#F1416C" />

    },
    {
        id: 4,
        icon: <img src={bitmap} alt="" className="w-10" />,
        title: " Bill Deleted Successfully", 
        billName: "Apex Office",
        time: "20 mins ago",
        delNoti : <RiDeleteBin5Line size={20} color="#F1416C" />
    },
]

