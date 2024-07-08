import Electric from "../../../assets/image/plug-cable.svg";
import WaterBill from "../../../assets/image/waterbill.svg";
import Gas from "../../../assets/image/fire-burner.svg";
import { transaction } from "../../../assets/image";

const data = [
  {
    icon: <img src={Electric} />,
    title: "Electricity Bill",
    date: "29 APR,2024",
    total: "33,548",
    percent: "69",
  },
  {
    icon: <img src={Gas} />,
    title: "Electricity Bill",
    date: "29 APR,2024",
    total: "33,548",
    percent: "69",
  },
  {
    icon: <img src={WaterBill} />,
    title: "Electricity Bill",
    date: "29 APR,2024",
    total: "33,548",
    percent: "69%",
  },
];

export default function TransactionsHistory() {
  return (
    <>
      <div className="drop-shadow-lg bg-white rounded-[2rem] h-[42rem]">
      <div className="font-semibold  mt-10 w-full drop-shadow-xl bg-white p-4 rounded-t-[2rem]">Recent Transactions</div>
        <div className="flex justify-between items-center">
          {/* {
          data.length > 0 &&(
            <div className="underline text-[#377CF6] w-20">View All</div>
          )
        } */}
        </div>
        {data.length > 0 ? (
          data.map((data, index) => (
            <div key={index} className="flex items-center justify-between mt-5 px-5 pb-5">
              <div className="flex items-center">
                <div className="bg-[#EDF1FF] rounded-full h-[3rem] w-[3rem] flex justify-center items-center">
                  {data.icon}
                </div>
                <div className="ml-5">
                  <div className="font-semibold">{data.title}</div>
                  <div className="text-xs font-semibold mt-1">{data.date}</div>
                </div>
              </div>
              <div>
                <div className="font-semibold">{data.total}</div>
                <div className="mt-1 border rounded-[1rem] border-[#DA2B26] text-center text-[#DA2B26]">
                  {data.percent}
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="flex items-center justify-center my-10">
              <img src={transaction} alt="" className="w-36 h-52" />
            </div>
            <div className="font-bold text-center">No Record Found</div>
          </>
        )}
      </div>
    </>
  );
}
