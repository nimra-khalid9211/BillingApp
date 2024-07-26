import Electric from "../../../assets/image/plug-cable.svg";
import WaterBill from "../../../assets/image/waterbill.svg";
import Gas from "../../../assets/image/fire-burner.svg";
import { transaction } from "../../../assets/image";
import { formatAmount } from "../../../Hooks";
import { Link } from "react-router-dom";
import { TbPlug } from "react-icons/tb";
import { IoWaterOutline } from "react-icons/io5";
import { MdOutlineLocalFireDepartment } from "react-icons/md";

const data = [
  {
    // icon: <img src={Electric} />,
    icon: <TbPlug size={20}/>,
    title: "Electricity Bill",
    date: "29 Apr,2024",
    total: 3354.28,
  },
  {
    // icon: <img src={Gas} />,
    icon: <MdOutlineLocalFireDepartment size={20}/>,
    title: "Electricity Bill",
    date: "29 Apr,2024",
    total: 335.48,
  },
  {
    // icon: <img src={WaterBill} />,
    icon: <IoWaterOutline size={20}/>,
    title: "Electricity Bill",
    date: "29 Apr,2024",
    total: 335.48,
  },
  {
    // icon: <img src={WaterBill} />,
    icon: <IoWaterOutline size={20}/>,
    title: "Electricity Bill",
    date: "29 Apr,2024",
    total: 3354.08,
  },
  {
    // icon: <img src={WaterBill} />,
    icon: <IoWaterOutline size={20}/>,
    title: "Electricity Bill",
    date: "29 Apr,2024",
    total: 3354.18,
  },
  {
    // icon: <img src={WaterBill} />,
    icon: <IoWaterOutline size={20}/>,
    title: "Electricity Bill",
    date: "29 Apr,2024",
    total: 335.77,
  },
];

export default function TransactionsHistory() {
  return (
    <>
      <div className="drop-shadow-lg bg-[#d3e8f6] rounded-3xl  mt-8">

        <div className="medium w-full drop-shadow-lg bg-white py-3 px-6 rounded-t-3xl">
          Recent Transactions
        </div>

      
        {data.length > 0 ? (
          data.map((datas, index) => {
            const { integerPart, decimalPart } = formatAmount(datas.total);

            return (
              <div
                key={index}
                className="flex bg-white items-center justify-between pt-5 px-5 pb-[1.2rem]"
                style={{borderBottom:`${index === data.length - 1 ? "" : "1px dashed #4653D72B"}`}}
              >
                <div className="flex items-center">

                  <div className="bg-[#EDF1FF] text-[var(--blue)] rounded-full h-[3rem] w-[3rem] flex justify-center items-center">
                    {datas.icon}
                  </div>
                  
                  <div className="ml-5 mt-4">
                    <div className="medium">{datas.title}</div>
                    <div className="text-[10px] mt-1">{datas.date}</div>
                  </div>

                </div>

                <div>

                  <div className="relative font-medium pr-7">

                    <div>
                      <span className="text-[#6C7293] text-sm mr-1">Rs</span>
                      <span className="text-base">{integerPart}</span>
                      <span className="absolute text-sm">.{decimalPart}</span>
                    </div>

                  </div>

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

        <div className="w-full  underline text-[var(--blue)] cursor-pointer text-center py-[17px] bg-[#d3e8f6] rounded-b-3xl">
          <Link to="/transactions"> View All</Link>
        </div>

      </div>
    </>
  );
}
