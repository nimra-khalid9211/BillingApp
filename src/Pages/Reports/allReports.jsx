 import { useState } from "react";
import { ReportModels } from "../../Components/Modals";
import { ReportsCard } from "../../data/cardData";

export default function AllReports() {
    const [report , setReport] = useState(false);

    const handleReport=()=>{
        setReport(true)
    }
  return (
    <div className="relative overflow-x-auto shadow-md bg-white rounded-3xl mt-5">
      
      <div className="drop-shadow-xl text-[var(--blue)] rounded-t-3xl bg-white p-3">Reports</div>
      
      <div className="w-9/12 mx-auto">
      
        <div className="grid grid-cols-3 gap-y-8 place-items-center py-20">
       
        {ReportsCard.map((report,idex) => (
      
      <div
          key={idex}
          className="bg-[#DBF0FF] border border-[#B8DEF9] rounded-[2rem] p-5 text-center w-[22rem] shadow-xl"
        >
      
          <div className="text-lg medium mt-5">{report.title}</div>
        
          <p className="text-sm my-5">{report.description}</p>
        
          <button className="bg-[#377CF6] text-white py-2 px-7 rounded-lg my-2" onClick={handleReport}>
            View Report
          </button>
       
        </div>
      ))}

      <ReportModels
      report = {report}
      setReport={setReport}
      title="Top Up Reports"
      />
      
        </div>
      </div>
    </div>
  );
}
