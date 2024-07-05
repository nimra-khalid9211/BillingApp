import { useState } from "react";
import { MyBillHeading } from "./index";
import { MyBillList } from "../../data/tables";
import { Button, Switch } from "antd";
import { FiDownload } from "react-icons/fi";
import { IoMdEye } from "react-icons/io";
import { FaShareNodes } from "react-icons/fa6";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";
import { useNavigate } from "react-router-dom";
import { ViewReceiptModal } from "../Modals";
import { PDFTemplate } from "../PDFTemplate";

const dashedBorderRight = "border-dashed border-r border-[#eff0fb]";

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
      const unpaidBills = filteredBills.filter((x) => x.status !== "paid");

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

  const isOverdue = (dueDate) => {
    const due = new Date(dueDate);
    const today = new Date();
    const differenceInTime = today.getTime() - due.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays > 5;
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

  return (
    <>
      <div className="bg-[#377CF6] text-white p-3 px-8 text-xl flex justify-between items-center rounded-tl-xl rounded-tr-xl mt-10">
        <span>All Bills</span>
        <span className="text-sm">This Month</span>
      </div>

      <table className="w-full text-sm rounded-bl-xl rounded-br-xl">
        <thead className="text-xs text-[#377CF6] text-center bg-[#DBF0FF]">
          <tr>
            <th
              scope="col"
              className="p-4 border-dashed border-r border-[#eff0fb]"
            >
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  onChange={handleSelectAllChange}
                  checked={selectedBills.length}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 "
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            {MyBillHeading.map((x, index) => {
              if (
                (x.title === "Auto Debit" && from !== "BMB") ||
                (x.title === "Pay Preference" && from !== "BMB") ||
                (x.title === "Amount Due" && from !== "dashboard") ||
                (x.title === "Download Bill" && from !== "overview")
              ) {
                return null;
              }

              return (
                <th
                  scope="col"
                  key={index}
                  className={`px-6 py-3 border-dashed border-[#eff0fb] text-start ${
                    index !== MyBillHeading.length - 1 ? "border-r" : ""
                  }`}
                >
                  {x.title}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {filteredBills.map((x, index) => (
            <tr
              key={index}
              className="bg-white border-dashed border-b border-[#eff0fb] text-center h-16 text-black font-medium"
            >
              <td className="w-4 p-4 border-dashed border-r border-[#eff0fb]">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    onChange={() => handleCheckboxChange(x)}
                    disabled={x.status === "paid" ? true : false}
                    checked={selectedBills.includes(x)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>

              <th
                scope="row"
                className={`px-6 py-2 text-[#329DFF] text-start ${dashedBorderRight}`}
              >
                {x.billname}
              </th>

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
                {isOverdue(x.dueDate) && x.status === "unpaid"
                  ? x.afterDueAmount
                  : x.amount}
              </td>

              {!from === "dashboard" && (
                <>
                  <td className={`px-6 py-2 ${dashedBorderRight}`}>
                    <Switch defaultChecked={x.autoDebit} />
                  </td>

                  <td className={`px-6 py-2 ${dashedBorderRight}`}>
                    {x.payPreference}
                  </td>

                  <td className={`px-6 py-2 ${dashedBorderRight}`}>
                    <Button className="px-1">
                      {" "}
                      <FiDownload size={20} color="#329DFF" />{" "}
                    </Button>
                  </td>
                </>
              )}
              {!from === "dashboard" && (
                <td className={`px-6 py-2 ${dashedBorderRight}`}>
                  {x.status === "unpaid" ? (
                    <div className="flex flex-col justify-center items-center">
                      <div>
                        <a
                          href="#"
                          className="font-medium text-[#24A959] border border-[#24A959] rounded-lg py-1 px-2 text-xs"
                        >
                          Pay Now
                        </a>
                      </div>

                      {isOverdue(x.dueDate) ? (
                        <span className="text-[#F1416C] pt-1 text-xs">
                          Overdue
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-evenly px-6 py-2 ">
                      <Button className="p-2 bg-[#DBF0FF] rounded-lg">
                        <IoMdEye
                          size={20}
                          onClick={() => SetModalAndID(x.id)}
                        />
                      </Button>

                      <Button className="p-2 bg-[#DBF0FF] rounded-lg">
                        <FiDownload size={20} onClick={PDFTemplate} />
                      </Button>
                    </div>
                  )}
                </td>
              )}

              {from === "dashboard" && (
                <td className={`px-6 py-2 ${dashedBorderRight}`}>
                  {x.status === "unpaid" ? (
                    <div className="flex flex-col justify-center items-center">
                      {isOverdue(x.dueDate) ? (
                        <span className="text-[#F1416C] pt-1 text-xs">
                          Overdue
                        </span>
                      ) : (
                        <a
                          href="#"
                          className="font-medium text-[#24A959] border border-[#24A959] rounded-lg py-1 px-2 text-xs"
                        >
                          Pay Now
                        </a>
                      )}
                    </div>
                  ) : null}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {selectedBills.length > 0 && (
        <div className="bg-[#E8E7EC] mt-10 py-4 px-10 rounded-2xl flex justify-between items-center">
          <div>
            <span className="text-[#377CF6] text-lg ">
              {selectedBills.length} Bills Selected
            </span>

            <span className="ml-20 text-base">
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
