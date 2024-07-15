import { MobileTopUpList } from "../../data/tables";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { WhiteButton } from "../../UI/Buttons";

export default function MobileTopUpTable() {
  const navigate = useNavigate();

  // const handleClick = (name, mobileOperator, mobileNumber) => {
  //   navigate("/mobile-top-up/changing-account", {
  //     state: {
  //       componentName: name,
  //       componentOperator: mobileOperator,
  //       componentNumber: mobileNumber,
  //     },
  //   });
  //   console.log(name);
  // };



  const MobileTopUpTitles = [
    { title: "Name" },
    { title: "Mobile Operator" },
    { title: "Mobile Nmuber" },
    { title: "" },
    { title: "Actions" },
  ];

  return (
    <div className="relative overflow-x-auto  rounded-3xl shadow-md  mt-5 bg-white">
      <div className="drop-shadow-xl pl-7 rounded-t-3xl text-[var(--blue)] bg-white font-medium text-lg p-3">
        Mobile Top Up
      </div>

      <table className="w-full text-sm mt-2 bg-white rounded-b-3xl">
        <thead className="text-xs bg-[#DBF0FF] text-[var(--blue)]">
          <tr className="">
            {MobileTopUpTitles.map((x, index) => {
              return (
                <th
                  key={index}
                  scope="col"
                  className={`px-10 border-r-2 border-dashed py-3 ${
                    (index > 0 && index < 4) || index === 4
                      ? "text-center"
                      : "text-start"
                  }`}
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
              className={`text-black font-medium border-b border-dashed border-[#4653D72B]`} >

              <th
                scope="row"
                className="px-10 py-4 font-medium  whitespace-nowrap  text-start border-r border-dashed border-[#4653D72B]"
              >
                {x.name}
              </th>

              <td className="px-10 py-4 border-r border-dashed border-[#4653D72B] text-center">{x.mobileOperator}</td>
              
              <td className="px-10 py-4 border-r border-dashed border-[#4653D72B text-center">{x.mobileNumber}</td>
             
              <td className="px-10 py-4 border-r border-dashed border-[#4653D72B] text-center">

              <WhiteButton customClass={"first-btn"} title={"Recharge Now"} clickEvent={() => navigate('/mobile-top-up/changing-account', { state: { x } })}/> 
              
               </td>

              <td className="px-10 py-4 flex justify-center items-center gap-3">

                  <div className="p-2 rounded-lg bg-[#DBF0FF]">
                    <FaEdit size={15} color="#377CF6" />
                  </div>

                  <div className="p-2 rounded-lg bg-[#FFD5DF]">
                    <RiDeleteBin5Line size={15} color="#F1416C" />
                  </div>

              </td>

            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
}
