import {reporttables} from "../../data/tables"

export default function ReportTables(){
    const titles = [
        "No#",
        "Bill Nick Name",
        "Consumer ID",
        "Consumer Name",
        "Company Name",
        "Date Added",
      ];
    return(
        <div className="container mx-auto bg-white shadow-md rounded-lg mt-10">
      <div className="flex justify-between items-center mb-4 px-20">
        <div></div>
        <h2 className="text-xl font-bold">Transaction Reports</h2>
        <div className="medium">
          <button className="text-blue-500 mr-4">Download</button>
          <button className="text-blue-500">Print</button>
        </div>
      </div>
      <div className="">
        <table className="min-w-full bg-white">
        <thead>
            <tr className="w-full bg-[#E8E7EC]">
              {titles.map((title, index) => (
                <th key={index} className="text-left py-3 px-4">{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {reporttables.map((x, index) => (
                <tr key={index}>
                    <td className="py-3 px-4">{x.no}</td>
                    <td className="py-3 px-4">{x.nickName}</td>
                    <td className="py-3 px-4">{x.consumerID}</td>
                    <td className="py-3 px-4">{x.consumerName}</td>
                    <td className="py-3 px-4">{x.campanyName}</td>
                    <td className="py-3 px-4">{x.dateAdded}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}