import React, { useState } from "react";
import { MyBillList } from "../../data/tables";
import { Button, Switch } from "antd";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { dueBills } from "../../assets/image";
import { LargeButtons } from "../../UI/Buttons";

export const MyBillHeading = [
  { title: "Bill Name" },
  { title: "Consumer ID" },
  { title: "Consumer Name" },
  { title: "Billing Company" },
  { title: "Due Date" },
  { title: "Amount Due" },
  { title: "Auto Debit" },
  { title: "Payment Method" },
  { title: "Status" },
  { title: "Actions" },
];

const dashedBorderRight = "border-r border-dashed border-[#4653D72B]";

export const  MyBills = ({ from }) => {
  return (
    <>
      {/* {JSON.stringify(MyBillList)} */}

      <div className="overflow-x-auto rounded-3xl mt-5 bg-[#ffffff]">

      <div className="font-medium pl-7 w-full text-lg drop-shadow-xl text-[var(--blue)] bg-white p-4 rounded-t-3xl">
       {from === "BMB" ? "My Bills" : "Due Bills List"}
        </div>
      


        {/* <div className="bg-[#377CF6] text-white p-3 mb-2">
          {from === "BMB" ? "My Bills" : "Due Bills List"}
        </div> */}

        {MyBillList.length > 0 ? (

          <table className="w-full table-fixed text-xs rounded-3xl mt-2">
            <thead className="text-xs bg-[#DBF0FF] text-[var(--blue)]">
              <tr>

                {MyBillHeading.map((x, index) => {
                  // Conditionally render "Auto Debit" column only when from === 'BMB'
                  if (
                    (x.title === "Auto Debit" && from !== "BMB") ||
                    (x.title === "Payment Method" && from !== "BMB") ||
                    (x.title === "Amount Due" && from !== "dashboard") ||
                    (x.title === "Status" && from === "BMB")
                  ) {
                    return null; // Skip rendering this column
                  }
                  return (
                    <th
                      key={index}
                      scope="col"
                      className={`px-6 py-3 ${index === 0 ? "text-left" : "text-center"} ${index < MyBillHeading.length - 1 ? "border-r border-dashed border-[#4653D72B]" : ""}`}
                    >
                      {x.title}
                    </th>
                  );
                })}

              </tr>
            </thead>

            <tbody>
              {MyBillList.map((x, index) => (
                <tr
                  key={index}
                  className="bg-white text-black font-medium hover:bg-[#F7F8F9]  text-center border-b border-dashed border-[#4653D72B]"
                >
                  <th
                    scope="row"
                    className={`w-12 truncate px-6 py-4 text-left font-medium whitespace-nowrap  ${dashedBorderRight}`}
                  >
                    {x.billname}
                  </th>
                  <td className={`w-12 truncate px-6 py-4 text-center ${dashedBorderRight}`}>{x.consumerID}</td>
                  <td className={`w-12 truncate px-6 py-4 text-center ${dashedBorderRight}`}>{x.consumerName}</td>
                  <td className={`w-12 truncate px-6 py-4 text-center ${dashedBorderRight}`}>{x.billCompany}</td>
                  <td className={`px-6 py-4 text-center ${dashedBorderRight}`}>{x.dueDate}</td>

                  {from === "BMB" && (
                    <td className={`px-6 py-4 text-center ${dashedBorderRight}`}>
                      <Switch defaultChecked={x.autoDebit} />
                    </td>
                  )}

                  {from === "dashboard" && (
                    <td className={`px-6 py-4 text-center ${dashedBorderRight}`}>{x.amount}</td>
                  )}

                  {from === "BMB" && (
                    <td className={`px-6 py-4 text-center ${dashedBorderRight}`}>{x.payPreference}</td>
                  )}

                  <td className="px-6 py-4 text-center">
                    {from === "dashboard" && (
                      <div className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-[#24A959] border border-[#24A959] rounded-2xl py-1 px-3 text-xs"
                        >
                          Pay Now
                        </a>
                      </div>
                    )}

                    {from === "BMB" && (
                      <div className="flex justify-center items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#DBF0FF] text-center">
                          <FaEdit size={20} color="#006AB2" />
                        </div>

                        <div className="p-2 rounded-lg bg-[#FFD5DF] text-center">
                          <RiDeleteBin5Line size={20} color="#F1416C" />
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        ) : (
          <div className="w-[50%] mx-auto flex justify-center items-center flex-col py-5">
            <img src={dueBills} className="w-80 h-48" />

            <div className="my-10">
              <LargeButtons title={"Add New Bill"} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
