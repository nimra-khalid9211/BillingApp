import { transactionReport } from "../../data/tables";
import { GrDownload } from "react-icons/gr";
import { IoPrint } from "react-icons/io5";

export default function TransactionReportTable() {
  const titles = [
    "",
    "Consumer ID",
    "Consumer Name",
    "Company Name",
    "Account",
    "Issue Date",
    "Amount Due",
    "Pay Date",
    "Amount Paid",
  ];

  // const totalAmountPaid = transactionReport.reduce((acc, curr) => acc + parseFloat(curr.amountPaid.replace, 0));

  return (
    <div className="container mx-auto bg-white shadow-md rounded-lg mt-10">
      <div className="flex justify-between items-center mb-4 px-20">
        <div></div>
        <h2 className="text-xl font-bold">Transaction Reports</h2>
        <div className="medium flex">
          <div className="flex items-center mr-3">
            <GrDownload color="#377CF6" />
            <button className="text-blue-500 mr-4 ml-2">Download</button>
          </div>
          <div className="flex items-center">
            <IoPrint color="#377CF6" size={20} />
            <button className="text-blue-500 ml-2">Print</button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between my-20 px-[8rem]">
          <div>
            Account:
            <span className="font-bold">
              Mastercard Usman Fazal - ending 9528
            </span>
          </div>
          <div>
            Selected Bills: <span className="font-bold">All Bills</span>
          </div>
          <div>
            Report Period:
            <span className="font-bold">
              01 Mar 2023 - 01 Apr 2024 (12 Months)
            </span>
          </div>
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-[#E8E7EC]">
              {titles.map((title, index) => (
                <th key={index} className="text-left py-3 px-4">
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactionReport.map((monthData, monthIndex) => (
              <>
                {monthData.data.map((transaction, index) => (
                  <tr key={`${monthIndex}-${index}`} className="border-t">
                    {index === 0 && (
                      <td
                        rowSpan={monthData.data.length}
                        className="py-3 px-4 text-[#377CF6] font-bold"
                      >
                        {monthData.month}
                      </td>
                    )}
                    <td className="py-3 px-4">{transaction.consumerID}</td>
                    <td className="py-3 px-4">{transaction.consumerName}</td>
                    <td className="py-3 px-4">{transaction.campanyName}</td>
                    <td className="py-3 px-4">{transaction.account}</td>
                    <td className="py-3 px-4">{transaction.issueDate}</td>
                    <td className="py-3 px-4">{transaction.amountDue}</td>
                    <td className="py-3 px-4">{transaction.payDate}</td>
                    <td className="py-3 px-4">{transaction.amountPaid}</td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t bg-[#E8E7EC]">
              <td colSpan={8} className="text-right py-3 px-4 medium">
                Total Amount Paid:
              </td>
              <td className="py-3 px-4 medium">8798</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
