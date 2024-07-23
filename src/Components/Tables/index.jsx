import React, { useEffect, useState } from "react";
import { MyBillList } from "../../data/tables";
import { Button, Card, Switch } from "antd";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { dueBills } from "../../assets/image";
import { LargeButtons } from "../../UI/Buttons";
import { PaymentSuccessfullModal } from "../Modals";
import { RxCross2 } from "react-icons/rx";
import { GoCheck } from "react-icons/go";
import { AddBillDrawer } from "../Drawers";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";

const MyBillHeading = [
  { title: "Bill Name" },
  { title: "Consumer ID" },
  { title: "Consumer Name" },
  { title: "Billing Company" },
  { title: "Date Added" },
  { title: "Amount Due" },
  { title: "Auto Debit" },
  { title: "Payment Method" },
  { title: "Status" },
  { title: "Actions" },
];



export const MyBills = ({ from }) => {

  const [cencelVerification, setCancelVerification] = useState(false);

  const { addBill, setAddBill, from: froms , setFrom: setFroms, editData, setEditData } = _BillingCondition();
  
  const [bills, setBills] = useState(MyBillList); // State to manage bills array

  const [id, setId] = useState()

    const handleDeleteBill = () => {

     const updatedBills =bills.filter((x)=> x.id !== id) // Remove the bill at the specified index
      // console.log(updatedBills, "clicked")
      
      setBills(updatedBills);
      setCancelVerification(false)
    };
 
  useEffect(()=>{handleDeleteBill},[id])
  // console.log(id,"id clivked")
  // console.log(bills,"ni")

  // const handleModalClose = () => {
  //   setCancelVerification(true);
    
  // };

  return (
    <>
      {/* {JSON.stringify(MyBillList)} */}

      <div className="overflow-x-auto rounded-3xl mt-5 mb-8 bg-[#ffffff]">
        <div className="font-medium pl-7 w-full text-lg drop-shadow-xl text-[var(--blue)] bg-white p-4 rounded-t-3xl">
          {from === "BMB" ? "My Bills" : "Due Bills List"}
        </div>

        {/* <div className="bg-[#377CF6] text-white p-3 mb-2">
          {from === "BMB" ? "My Bills" : "Due Bills List"}
        </div> */}

        {MyBillList.length > 0 ? (
          <table className="w-full text-xs rounded-3xl mt-2">
            
            <thead className="font-medium text-sm bg-[#DBF0FF] text-[var(--blue)]">
              <tr className="grid grid-cols-8 gap4">
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
                      className={`px-6 py-3 ${
                        index === 0 ? "text-left pl-12" : "text-center"
                      }`}
                    >
                      {x.title}
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="w-full">
              {bills.map((x, index) => (
                <tr
                  key={index}
                  className="text-black font-medium shadow-for-all shadow-md rounded-xl"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(8, 1fr)",
                    alignItems: "center",
                    padding: "12px",
                    margin: "16px",
                    backgroundColor: "white",
                    borderRadius: "16px",
                  }}
                >

                  <th
                    scope="row"
                    className="w-40 truncate px-6  text-left font-semibold whitespace-nowrap"
                    style={{
                      gridColumn: "span 1",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {x.billname}
                  </th>

                  <td
                    className="w-40 truncate px-6 0 text-center"
                    style={{ gridColumn: "span 1" }}
                  >
                    {x.consumerID}
                  </td>

                  <td
                    className="w-40 truncate px-6 0 text-center"
                    style={{ gridColumn: "span 1" }}
                  >
                    {x.consumerName}
                  </td>

                  <td
                    className="px-6 0 text-center"
                    style={{ gridColumn: "span 1" }}
                  >
                    {x.billCompany}
                  </td>

                  <td
                    className="px-6 0 text-center"
                    style={{ gridColumn: "span 1" }}
                  >
                    {x.dueDate}
                  </td>

                  {from === "BMB" && (
                    <td
                      className="px-6 0 text-center"
                      style={{ gridColumn: "span 1" }}
                    >
                      <Switch className="drop-shadow-xl" checkedChildren={<GoCheck size={15}/>} unCheckedChildren={<RxCross2 size={14}/>} defaultChecked={x.autoDebit} size="small"/>
                    </td>
                  )}

                  {from === "dashboard" && (
                    <td
                      className="px-6 0 text-center"
                      style={{ gridColumn: "span 1" }}
                    >
                      {x.amount}
                    </td>
                  )}

                  {from === "BMB" && (
                    <td
                      className="px-6 0 text-center"
                      style={{ gridColumn: "span 1" }}
                    >
                      {x.payPreference}
                    </td>
                  )}

                  <td
                    className="px-6 0 text-center"
                    style={{
                      gridColumn: "span 1",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {from === "dashboard" && (
                      <a
                        href="#"
                        className="font-medium text-[#24A959] border border-[#24A959] rounded-2xl py-1 px-3 text-xs"
                      >
                        Pay Now
                      </a>
                    )}

                    {from === "BMB" && (

                        <div className="flex ml-12 gap-3">

                        <div className="p-2 rounded-lg bg-[#DBF0FF]">
                          <FaEdit size={15} color="#006AB2" role="button" onClick={()=>{setAddBill(true); setFroms("editBill"); setEditData(x);}}/>
                        </div>

                        <div className=" p-2 rounded-lg bg-[#FFD5DF]">
                          <RiDeleteBin5Line size={15} color="#F1416C" role="button" onClick={()=>{setCancelVerification(true); setId(x.id)}}/>
                        </div>

                      </div>

                    )}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="w-[50%] mx-auto flex justify-center items-center flex-col py-5 mb-6">
            <img src={dueBills} className="w-80 h-48" />

            <div className="my-10">
              <LargeButtons title={"Add New Bill"} />
            </div>
          </div>
        )}
      </div>

      <PaymentSuccessfullModal
        receiptModal={cencelVerification}
        setReceiptModal={setCancelVerification}
        width={400}
        cancelTitle="Delete Bill"
        cancelText="Are you sure you want to delete the bill for 'PTCL Home'?"
        from="debitAccountCancelled"
        delArray={handleDeleteBill}
      />

      <AddBillDrawer from={froms} addBill={addBill} setAddBill={setAddBill}/>

    </>
  );
};
