import { MobileTopUpList } from "../../data/tables";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function MobileTopUpTable(){
    
    const MobileTopUpTitles = [
        { title: "Name" },
        { title: "Mobile Operator" },
        { title: "Mobile Nmuber" },
        { title: "" },
        { title: "Actions" }
      ];
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-[25px] mt-5">
          <div className="bg-[#377CF6] text-white p-3">Mobile Top Up</div>
          <table className="w-full text-sm">
            <thead className="text-xs bg-[#DBF0FF] text-[#377CF6]">
              <tr>
                {MobileTopUpTitles.map((x, index) => {
                  return (
                    <th key={index} scope="col" className="px-6 py-3 text-center">
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
                } text-black font-bold text-center border-b`}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-[#329DFF] whitespace-nowrap dark:text-white"
                  >
                    {x.name}
                  </th>
                  <td className="px-6 py-4 text-center">{x.mobileOperator}</td>
                  <td className="px-6 py-4 text-center">{x.mobileNumber}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-[#377CF6] border-2 border-[##6C7293] rounded-lg py-1 px-3 text-xs"
                    >
                      Recharge Now
                    </a>
                  </td>
                  <td>
                  <div className="flex justify-center items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#DBF0FF] text-center">
                        <FaEdit size={20} color="#006AB2" />
                      </div>

                      <div className="p-2 rounded-lg bg-[#FFD5DF] text-center">
                        <RiDeleteBin5Line size={20} color="#F1416C" />
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