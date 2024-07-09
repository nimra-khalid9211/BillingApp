import { useState } from "react";
import { MyBillHeading } from "./index";
import { MyBillList } from "../../data/tables";
import { Button, Switch } from "antd";
import { FiDownload } from "react-icons/fi";
import { IoMdEye } from "react-icons/io";
import { FaShareNodes } from "react-icons/fa6";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";
import { Link, useNavigate } from "react-router-dom";
import { ViewReceiptModal } from "../Modals";
import { PDFTemplate } from "../PDFTemplate";
import { isOverdue } from "../../Hooks";


const dashedBorderRight = "border-r border-dashed border-[#4653D72B]";


export const SelectableBills = ({ type, from }) => {
  const navigate = useNavigate();

  const { setBills } = _BillingCondition();

  const [selectedBills, setSelectedBills] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState();

  // console.log(id, "from selectable bills")

  const filteredBills =
    type === "all"
      ? MyBillList
      : MyBillList.filter((bill) => bill.type === type);

  const handleSelectAllChange = (e) => {
    if (e.target.checked) {
      const unpaidBills = filteredBills.filter((x) => 
      {
          const {payable} = isOverdue(x.dueDate);
          return x.status === "unpaid" && payable
      })

      setSelectedBills(unpaidBills);

    } else {
      setSelectedBills([]);
    }
  };

  const handleCheckboxChange = (bill) => {
    setSelectedBills((prevSelectedBills) => {
      if (prevSelectedBills.includes(bill)) {
        return prevSelectedBills.filter(
          (selectedBill) => selectedBill !== bill
        );
      } else {
        return [...prevSelectedBills, bill];
      }
    });
  };

  const totalAmount = selectedBills.reduce((total, bill) => {
    const amountString =
      bill.status === "unpaid" && isOverdue(bill.dueDate)
        ? bill.afterDueAmount
        : bill.amount;
    const amount = parseFloat(amountString.replace(/,/g, ""));
    return Math.round((total + amount) * 100) / 100;
  }, 0);

  const SetModalAndID = (id) => {
    setId(id);
    setOpenModal(true);
  };

  const unpaidBills = from === "dashboard" ? filteredBills.filter((x)=>x.status === "unpaid").slice(0,6).map((x,index)=>x) : filteredBills;

  // console.log(unpaidBills);

  return (
    <>

       
      <div className="bg-[#377CF6] text-white p-3 px-8 text-xl flex justify-between items-center rounded-tl-3xl rounded-tr-3xl mt-5">
        <span>{from === "dashboard" ? "Due Bills" : "All Bills"}</span>
      { from === "dashboard" ? <Link to={"/bill-management"} className="text-sm underline">View All</Link> : <span className="text-sm">This Month</span>}
      </div>

      <div className={`overflow-x-auto bg-white rounded-bl-3xl rounded-br-3xl mt-2 ${from === "dashboard" && 'h-[433px]'}`}>

      <table className="w-full text-sm">
        <thead className="text-[11px] text-[#377CF6] text-center bg-[#DBF0FF]">
          <tr>
            <th
              scope="col"
              className="w-4 p-4 border-dashed border-r border-[#4653D72B]"
            >

              <div className="flex items-center ">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  onChange={handleSelectAllChange}
                  checked={selectedBills.length}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-r border-dashed border-[#dd2424] rounded focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 "
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
              
            </th>
            
            {MyBillHeading.map((x, index) => {
              if (
                (x.title === "Auto Debit" && from === "dashboard") ||
                (x.title === "Pay Preference" && from === "dashboard") ||
                // (x.title === "Amount Due" && from !== "dashboard")
                (x.title === "Download Bill" && from !== "overview")
              ) {
                return null;
              }

              return (
                <th
                  scope="col"
                  key={index}
                  className={`px-6 py-2 border-dashed  ${
                    index < MyBillHeading.length - 1 ? "border-r border-[#4653D72B]" : ""
                  } ${index === 0 ? "text-left" : "text-center"}`}
                >
                  {x.title}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {unpaidBills.map((x, index) =>{
          const {payable, overdue} = isOverdue(x.dueDate);
            // console.log(payable)
           return (
            <tr key={index}
              className="bg-white border-dashed hover:bg-[#F7F8F9] border-b border-[#4653D72B] text-center h-16 text-black font-semibold">

              <td className="w-4 p-4 border-dashed border-r border-[#4653D72B]">

                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    onChange={() => handleCheckboxChange(x)}
                    disabled={ !payable || x.status === "paid"  ? true : false}
                    checked={selectedBills.includes(x)}
                    className="w-4 h-4 text-blue-600 rounded "
                  />

                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>

              </td>

              <td
                scope="row"
                className={`px-6 py-2 text-left ${dashedBorderRight}`}
              >
                {x.billname}
              </td>

              <td className={`px-6 py-2 ${dashedBorderRight}`}>
                {x.consumerID}
              </td>

              <td className={`px-6 py-2 ${dashedBorderRight}`}>
                {x.consumerName}
              </td>

              <td className={`px-6 py-2 ${dashedBorderRight}`}>
                {x.billCompany}
              </td>

              <td className={`px-6 py-2 ${dashedBorderRight}`}>{x.dueDate}</td>

              <td className={`px-6 py-2 ${dashedBorderRight}`}>
                {overdue && x.status === "unpaid"
                  ? x.afterDueAmount
                  : x.amount}
              </td>
           
                 {from !== "dashboard" && <td className={`px-6 py-2 ${dashedBorderRight}`}>
                    <Switch defaultChecked={x.autoDebit} />
                  </td>}

              { from !== "dashboard" &&  <td className={`px-6 py-2 ${dashedBorderRight}`}>
                    {x.payPreference}
                  </td>}

                  {/* <td className={`px-6 py-2 ${dashedBorderRight}`}>
                    <Button className="px-1">
                      {" "}
                      <FiDownload size={20} color="#329DFF" />{" "}
                    </Button>
                  </td> */}
                
                <td className={`px-6 py-2`}>
              {x.status === "unpaid" ? (
                <div className="flex flex-col justify-center items-center">
                  {payable ? (
                    <>
                      <div>
                        <a
                          href="#"
                          className="font-medium text-[#24A959] border border-[#24A959] rounded-xl py-1 px-3 text-xs"
                        >
                          Pay Now
                        </a>
                      </div>
                      {overdue ? (
                        <span className="text-[#F1416C] pt-1 text-xs">
                          Overdue
                        </span>
                      ) : null}
                    </>
                  ) : (
                    <span className="text-[#F1416C] pt-1 text-xs">
                      Not Payable
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-evenly px-6 py-2">
                  <Button className="p-2 bg-[#DBF0FF] rounded-lg">
                    <IoMdEye size={20} onClick={() => SetModalAndID(x.id)} />
                  </Button>
                  <Button className="p-2 bg-[#DBF0FF] rounded-lg">
                    <FiDownload size={20} onClick={PDFTemplate} />
                  </Button>
                </div>
              )}
            </td>
             
            </tr>
          )})}
        </tbody>
      </table>

     </div>


      {selectedBills.length > 0 && (
        <div className="bg-[#E8E7EC] border-2 border-[#377CF6] mt-10 h-[58px] px-10 rounded-[18px] flex justify-between items-center">
          <div>
            <span className="text-[#377CF6] font-medium text-lg ">
              {selectedBills.length} Bill{selectedBills.length >=2 ? "s" : ""} Selected
            </span>

            <span className="ml-20 text-base font-medium">
              Total Amount = {totalAmount.toLocaleString()}{" "}
            </span>
          </div>

          <div>
            <Button
              type="primary"
              style={{ padding: "0 30px" }}
              shape="round"
              onClick={() => {
                navigate("/bill-management/selected-bills");
                setBills(selectedBills);
              }}
            >
              Pay All
            </Button>
          </div>
        </div>
      )}

      {id && (
        <ViewReceiptModal
          setOpenModal={setOpenModal}
          openModal={openModal}
          id={id}
          from={"paymentReceipt"}
        />
      )}
    </>
  );
};
