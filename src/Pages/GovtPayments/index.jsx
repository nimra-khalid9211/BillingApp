import { useState } from "react";
import DepartmentNumber from "./departmentNumber";
import GovtDepartments from "./govtDepartments";
import GovtList from "./govtList";



export default function GovtPayments() {
  const [isActive, setIsActive] = useState(false);
  
  const handleFocus = () => {
    setIsActive(true);
  };
  const handleBlur = (e) => {
    if (e.target.value === '') {
      setIsActive(false);
    }
  };
  return (
    <>
      <GovtDepartments />
      {/* <GovtList/> */}
      <div className="relative mt-10">
      <input
        type="text"
        placeholder=" "
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-3 px-4 outline-none transition-all duration-300 ${
          isActive ? 'pt-7 pb-3 border-b-0' : ''
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required
      />
      <label
        className={`absolute left-4 ${
          isActive ? 'top-0 -mt-2 text-xs text-gray-500' : 'top-3 text-sm text-gray-400'
        } transition-all duration-300 pointer-events-none select-none`}
      >
        Enter Name
      </label>
    </div>
    </>
  );
}









