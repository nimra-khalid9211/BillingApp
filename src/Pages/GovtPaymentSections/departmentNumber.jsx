import { useLocation } from 'react-router-dom';

export default function DepartmentNumber() {
  const location = useLocation();
  const componentName = location.state?.componentName || 'Default Component Name';
  return (
    <div className="rounded-[3rem] border">
      <div className="bg-[#377CF6] text-white p-3 mb-10 rounded-t-lg">
      {componentName}
      </div>
      <div className="w-[60%] mx-auto text-center font-semibold py-20">
        <div>icon</div>
        <div className="text-lg mt-5">{componentName}</div>
        <p className="text-sm mt-3">Please enter your 17 digits PSID to view your E-Challan</p>
        <div className="w-[22rem] mx-auto mt-10">
          <input
            type="number"
            placeholder="Enter PSID Number"
            className="text-base border text-sm rounded-lg p-2.5 outline-none w-full"
            required
          />
        </div>
        <button className="bg-[#377CF6] text-white rounded-2xl py-3 px-[10rem] text-sm mt-5">Search</button>
      </div>
    </div>
  );
}
