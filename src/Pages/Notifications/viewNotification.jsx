import { notification } from "../../data/notification";

export default function ViewNotification() {
  return (
    <div>
      {notification.map((x) => (
        <div
          key={x.id}
          className="px-5 py-1 flex items-center drop-shadow-md justify-between border rounded-2xl my-2 hover:bg-[#F6F6F8]"
        >
          <div className="flex items-center">
            <div>{x.icon}</div>
            <div className="ml-5 text-xs">
              <span className="text-[#176BA3] font-semibold">
                {x.billName} &nbsp;
              </span>
              <span>{x.title}</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-xs text-[#b8b8ba] mr-10">{x.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
