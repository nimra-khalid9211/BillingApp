import { MobileTopUpList } from "../../data/tables";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function MobileTopUpTable() {

  const MobileTopUpTitles = [
    { title: "Name" },
    { title: "Mobile Operator" },
    { title: "Mobile Nmuber" },
    { title: "" },
    { title: "Actions" }
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-3xl mt-5">
      <div className="drop-shadow-xl text-[#377CF6] rounded-t-3xl p-4 text-lg font-medium bg-white ">Mobile Top Up</div>
      <table className="w-full text-sm mt-2">
        <thead className="text-xs bg-[#DBF0FF] text-[#377CF6]">
          <tr className="">
            {MobileTopUpTitles.map((x, index) => {
              return (
                <th 
                  key={index} 
                  scope="col" 
                  className={`px-10 py-3 ${index > 0 && index < 4 || index === 4 ? 'text-center' : 'text-start'}`}
                >
                  {x.title}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {MobileTopUpList.map((x, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
              } text-black font-bold border-b border-dashed border-[#4653D72B]`}
            >
              <th
                scope="row"
                className="px-10 py-4 font-semibold text-[#329DFF] whitespace-nowrap dark:text-white text-start border-r border-dashed border-[#4653D72B]"
              >
                {x.name}
              </th>
              <td className="px-10 py-4 border-r border-dashed border-[#4653D72B] text-center">{x.mobileOperator}</td>
              <td className="px-10 py-4 border-r border-dashed border-[#4653D72B text-center">{x.mobileNumber}</td>
              <td className="px-10 py-4 border-r border-dashed border-[#4653D72B] text-center">
              <Link to= "changing-account"
                      href="#"
                      className="font-medium text-[#377CF6] border-2 border-[##6C7293] rounded-lg py-1 px-3 text-xs"
                    >
                      Recharge Now
                    </Link>
              </td>
              <td className="px-10 py-4 flex justify-center">
                <div className="flex justify-start items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#DBF0FF]">
                    <FaEdit size={15} color="#377CF6" />
                  </div>

                  <div className="p-2 rounded-lg bg-[#FFD5DF]">
                    <RiDeleteBin5Line size={15} color="#F1416C" />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
