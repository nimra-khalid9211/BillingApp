import Electric from "../../../assets/image/plug-cable.svg";
import WaterBill from "../../../assets/image/waterbill.svg";
import Gas from "../../../assets/image/fire-burner.svg";
import { transaction } from "../../../assets/image";
import { formatAmount } from "../../../Hooks";

const data = [
  {
    icon: <img src={Electric} />,
    title: "Electricity Bill",
    date: "29 Apr,2024",
    total: 3354.28,
  },
  {
    icon: <img src={Gas} />,
    title: "Electricity Bill",
    date: "29 Apr,2024",
    total: 335.48,
  },
  {
    icon: <img src={WaterBill} />,
    title: "Electricity Bill",
    date: "29 Apr,2024",
    total: 335.48,
  },
  {
    icon: <img src={WaterBill} />,
    title: "Electricity Bill",
    date: "29 Apr,2024",
    total: 3354.08,
  },
  {
    icon: <img src={WaterBill} />,
    title: "Electricity Bill",
    date: "29 Apr,2024",
    total: 3354.18,
  },
  {
    icon: <img src={WaterBill} />,
    title: "Electricity Bill",
    date: "29 Apr,2024",
    total: 335.77,
  },
];

export default function TransactionsHistory() {
  return (
    <>
      <div className="drop-shadow-lg bg-white rounded-[2rem] mt-5">
        <div className="font-semibold w-full drop-shadow-lg bg-white py-4 px-6 rounded-t-[2rem]">
          Recent Transactions
        </div>

        <div className="flex justify-between items-center">
          {/* {
          data.length > 0 &&(
            <div className="underline text-[#377CF6] w-20">View All</div>
          )
        } */}
        </div>
        {data.length > 0 ? (
          data.map((data, index) => {
            const { integerPart, decimalPart } = formatAmount(data.total);

            return (
              <div
                key={index}
                className="flex items-center justify-between mt-5 px-5 pb-3 border-b"
              >
                <div className="flex items-center">
                  <div className="bg-[#EDF1FF] rounded-full h-[3rem] w-[3rem] flex justify-center items-center">
                    {data.icon}
                  </div>
                  <div className="ml-5 mt-4">
                    <div className="font-semibold">{data.title}</div>
                    <div className="text-[10px] mt-1">{data.date}</div>
                  </div>
                </div>
                <div>
                  <div className="relative font-semibold pr-7">
                    <div>
                      <span className="text-[#6C7293] text-sm mr-1">Rs</span>
                      <span className="text-lg">{integerPart}</span>
                      <span className="absolute text-sm">.{decimalPart}</span>
                    </div>
                  </div>
                  {/* <div className="mt-1 border rounded-[1rem] border-[#DA2B26] text-center text-[#DA2B26]">
                  {data.percent}
                </div> */}
                </div>
              </div>
            );
          })
        ) : (
          <>
            <div className="flex items-center justify-center my-10">
              <img src={transaction} alt="" className="w-36 h-52" />
            </div>
            <div className="font-bold text-center">No Record Found</div>
          </>
        )}
        <div className="underline text-[#377cf6] cursor-pointer text-center py-3">
          <a href=""> View All</a>
        </div>
      </div>
    </>
  );
}
