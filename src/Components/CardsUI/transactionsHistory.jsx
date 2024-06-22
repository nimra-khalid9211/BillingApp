import Electric from "../../assets/image/plug-cable.svg"
import WaterBill from "../../assets/image/waterbill.svg"
import Gas from "../../assets/image/fire-burner.svg"

export default function TransactionsHistory() {
  return (
    <div className="mt-5 mb-2 drop-shadow-xl bg-white p-8 rounded-[2rem]">
      <div className="flex justify-between items-center">
        <div className="font-semibold">Recent Transactions</div>
        <div className="underline text-[#377CF6]">View All</div>
      </div>
      <div className="flex items-center justify-between mt-5 border-b pb-5">
        <div className="flex items-center">
          <div className="bg-[#EDF1FF] rounded-full h-[3rem] w-[3rem] flex justify-center items-center">
            <img src={Electric} alt="" />
          </div>
          <div className="ml-5">
            <div className="font-semibold">Electricity Bill</div>
            <div className="text-xs font-semibold mt-1">29 APR,2024</div>
          </div>
        </div>
        <div>
          <div className="font-semibold">33,548</div>
          <div className="mt-1 border rounded-[1rem] border-[#DA2B26] text-center text-[#DA2B26]">69%</div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5 border-b pb-5">
        <div className="flex items-center">
          <div className="bg-[#EDF1FF] rounded-full h-[3rem] w-[3rem] flex justify-center items-center">
            <img src={Electric} alt="" />
          </div>
          <div className="ml-5">
            <div className="font-semibold">School Bill Payment</div>
            <div className="text-xs font-semibold mt-1">29 APR,2024</div>
          </div>
        </div>
        <div>
          <div className="font-semibold">33,548</div>
          <div className="mt-1 border rounded-[1rem] border-[#DA2B26] text-center text-[#DA2B26]">69%</div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5 border-b pb-5">
        <div className="flex items-center">
          <div className="bg-[#EDF1FF] rounded-full h-[3rem] w-[3rem] flex justify-center items-center">
            <img src={WaterBill} alt="" />
          </div>
          <div className="ml-5">
            <div className="font-semibold">Water Bill  Payment</div>
            <div className="text-xs font-semibold mt-1">29 APR,2024</div>
          </div>
        </div>
        <div>
          <div className="font-semibold">33,548</div>
          <div className="mt-1 border rounded-[1rem] border-[#DA2B26] text-center text-[#DA2B26]">69%</div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5 border-b pb-5">
        <div className="flex items-center">
          <div className="bg-[#EDF1FF] rounded-full h-[3rem] w-[3rem] flex justify-center items-center">
            <img src={Gas} alt="" />
          </div>
          <div className="ml-5">
            <div className="font-semibold">Gas Bill Payment</div>
            <div className="text-xs font-semibold mt-1">29 APR,2024</div>
          </div>
        </div>
        <div>
          <div className="font-semibold">33,548</div>
          <div className="mt-1 border rounded-[1rem] border-[#DA2B26] text-center text-[#DA2B26]">69%</div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center">
          <div className="bg-[#EDF1FF] rounded-full h-[3rem] w-[3rem] flex justify-center items-center">
            <img src={Electric} alt="" />
          </div>
          <div className="ml-5">
            <div className="font-semibold">Electricity Bill Pyament</div>
            <div className="text-xs font-semibold mt-1">29 APR,2024</div>
          </div>
        </div>
        <div>
          <div className="font-semibold">33,548</div>
          <div className="mt-1 border rounded-[1rem] border-[#DA2B26] text-center text-[#DA2B26]">69%</div>
        </div>
      </div>
     
    </div>
  );
}
