import { GovtPaymentList } from "../../data/tables";
import { IoMdEye } from "react-icons/io";
import { FaShareNodes } from "react-icons/fa6";

export default function GovtPaymentTable() {
  const GovtPayment = [
    { title: "PSID No" },
    { title: "Violation" },
    { title: "Place of Violation" },
    { title: "Offense Time" },
    { title: "Penalty" },
    { title: "Due Date" },
    { title: "Owner" },
    { title: "Vehicles Details" },
    { title: "Status" },
    { title: "Actions" },
  ];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-[25px] mt-5">
      <div className="bg-[#377CF6] text-white p-3">Govt Payment</div>
      <table className="w-full text-sm">
        <thead className="text-xs bg-[#DBF0FF] text-[#377CF6]">
          <tr>
            {GovtPayment.map((x, index) => {
              return (
                <th key={index} scope="col" className="px-6 py-3 text-center">
                  {x.title}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {GovtPaymentList.map((x, index) => (
            <tr
              key={index}
              className="bg-white text-black font-bold  text-center  border-b "
            >
              <th
                scope="row"
                className="px-6 py-4 font-semibold text-[#329DFF] whitespace-nowrap dark:text-white"
              >
                {x.psid}
              </th>
              <td className="px-6 py-4 text-center">{x.violationType}</td>
              <td className="px-6 py-4 text-center">{x.placeOfViolation}</td>
              <td className="px-6 py-4 text-center">{x.offenseTime}</td>
              <td className="px-6 py-4 text-center">{x.penalty}</td>
              <td className="px-6 py-4 text-center">{x.dueDate}</td>
              <td className="px-6 py-4 text-center">{x.owner}</td>
              <td className="px-6 py-4 text-center">{x.vehicleDetails}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-[#24A959] border border-[#24A959] rounded-lg py-1 px-2 text-xs"
                >
                  Pay Now
                </a>
              </td>
              <td>
                <div className="flex justify-center items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#DBF0FF] text-center">
                    <IoMdEye size={20} color="#006AB2" />
                  </div>

                  <div className="p-2 rounded-lg bg-[#DBF0FF] text-center">
                    <FaShareNodes size={20} color="#006AB2" />
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
