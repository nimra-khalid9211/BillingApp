import React, { useState } from "react";
import { MyBillList } from "../../data/tables";
import { Button, Switch } from "antd";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

export const MyBillHeading = [
  { title: "Bill Name" },
  { title: "Consumer ID" },
  { title: "Consumer Name" },
  { title: "Billing Company" },
  { title: "Due Date" },
  { title: "Amount Due" },
  { title: "Auto Debit" },
  { title: "Pay Preference" },
  { title: "Download Bill" },
  { title: "Actions" },
];

const dashedBorderRight = "border-dashed border-r border-[#eff0fb]";

export const MyBills = ({ from }) => {
  return (
    <>
      {/* {JSON.stringify(MyBillList)} */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-[25px] mt-5">
        <div className="bg-[#377CF6] text-white p-3">
          {from === "BMB" ? "My Bills" : "Due Bills List"}
        </div>
        <table className="w-full text-sm">
          <thead className="text-xs bg-[#DBF0FF] text-[#377CF6]">
            <tr>
              {MyBillHeading.map((x, index) => {
                // Conditionally render "Auto Debit" column only when from === 'BMB'
                if (
                  (x.title === "Auto Debit" && from !== "BMB") ||
                  (x.title === "Pay Preference" && from !== "BMB") ||
                  (x.title === "Amount Due" && from !== "dashboard") ||
                  (x.title === "Download Bill" && from !== "overview")
                ) {
                  return null; // Skip rendering this column
                }
                return (
                  <th key={index} scope="col" className="px-6 py-3 text-center">
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
                className="bg-white text-black font-bold  text-center  border-b "
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-semibold text-[#329DFF] whitespace-nowrap dark:text-white"
                >
                  {x.billname}
                </th>
                <td className="px-6 py-4 text-center">{x.consumerID}</td>
                <td className="px-6 py-4 text-center">{x.consumerName}</td>
                <td className="px-6 py-4 text-center">{x.billCompany}</td>
                <td className="px-6 py-4 text-center">{x.dueDate}</td>
                
                {from === "BMB" && (
                  <td className="px-6 py-4 text-center">
                    <Switch defaultChecked={x.autoDebit} />
                  </td>
                )}

                {from === "dashboard" && (
                  <td className="px-6 py-4 text-center">{x.amount}</td>
                )}

                {from === "BMB" && (
                  <td className="px-6 py-4 text-center">{x.payPreference}</td>
                )}

                <td className="px-6 py-4 text-center">
                  {from === "dashboard" && (
                    <div className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-[#24A959] border border-[#24A959] rounded-lg py-1 px-2 text-xs"
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
      </div>
    </>
  );
};
