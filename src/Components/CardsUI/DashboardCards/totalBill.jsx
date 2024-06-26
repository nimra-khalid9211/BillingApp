import Cheque from "../../../assets/image/Cheque.svg"
export default function TotalBill() {
  return (
    <div className="flex justify-between border rounded-[25px] font-semibold drop-shadow-xl bg-white">
      <div className="p-5 text-lg">
        <div className="bg-[#EDF1FF] rounded-full h-[3rem] w-[3rem] flex justify-center items-center">
           <img src={Cheque} alt="My SVG" className="" />
        </div>
        <div className="mt-10">
          <div className="">Total Bills</div>
          <div className="">10</div>
        </div>
      </div>
      <div className="bg-[#DBF0FF]">
        <div className="p-5 grid justify-items-stretch border-b-[1px] border-[#0000001A]">
          <div className="text-sm">Issued Bill</div>
          <div className="text-base justify-self-end">01</div>
        </div>
        <div className="p-5 grid justify-items-stretch">
          <div className="text-sm">Waiting Bill</div>
          <div className="text-base justify-self-end">07</div>
        </div>
      </div>
    </div>
  );
}
