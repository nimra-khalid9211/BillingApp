import { notification } from "../../data/notification";

export default function ViewNotification() {
  return (
    <div>
      {notification.map((x) => (
        <div
          key={x.id}
          className="pl-5 pr-10 py-3 flex items-center justify-between border rounded-2xl my-3 hover:bg-[#F6F6F8]"
        >
          <div className="flex items-center">
            <div>{x.icon}</div>
            <div className="ml-5 text-xs">
              <span className="text-[#176BA3] font-semibold">
                {x.billName}{" "}
              </span>
              <span>{x.title}</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-xs mr-10">Just now</div>
            <div className="p-2 rounded-lg bg-[#FFD5DF]">{x.delNoti}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
