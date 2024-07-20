import { Card } from "antd";
import { FaCheckDouble } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { notification } from "../../../data/notification";

export default function Notification() {
  return (
    <div className="absolute top-[4rem] right-[10rem] border border-[#176BA3] rounded-3xl bg-white">
      <Card className="rounded-3xl overflow-y-scroll h-[29rem] w-[26rem] border-[var(--blue)] border">
        <div className="flex items-center rounded-tl-3xl rounded-tr-3xl bg-white py-5 px-6 justify-between">
          <span className="font-semibold">Notification</span>
          <Link to={"/payment-methods/add-payment"}>
            <div className="flex items-center text-[#176BA3] ">
              <span className="">
                <FaCheckDouble size={10} />
              </span>
              <div className="ml-1 cursor-pointer text-xs underline">
                Mark All as Read
              </div>
            </div>
          </Link>
        </div>
        {notification.map((x) => (
            <div key={x.id} className="px-5 py-3 flex items-center justify-between border-b hover:bg-[#F6F6F8]">
            <div className="flex items-center">
              <div>{x.icon}</div>
              <div className="ml-5 text-xs">
                <span className="text-[#176BA3] font-semibold">{x.billName} </span>
                <span>{x.title}</span>
              </div>
            </div>
            <div className="text-xs">Just now</div>
          </div>
        ))
        }
        <Link to="/notification" className="text-center bg-[#DBF0FF] text-[#176BA3] py-3 absolute bottom-0 w-full underline">View All</Link>
      </Card>
    </div>
  );
}
