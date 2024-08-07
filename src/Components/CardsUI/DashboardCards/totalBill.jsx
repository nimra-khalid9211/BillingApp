import Cheque from "../../../assets/image/Cheque.svg"


export default function TotalBill() {

  return (

    <div className="flex border-[var(--blue)] justify-between border rounded-3xl font-semibold drop-shadow-xl bg-white">

      <div className="py-5 px-7 text-lg">

        <div className="bg-[#EDF1FF] rounded-full h-[4rem] w-[4rem] flex justify-center items-center">
 
          <img src={Cheque}  alt="My SVG" className="" />
        </div>

        <div className="mt-6 font-bold">
          <div className="">Total Bills</div>
          <div className="text-[30px]">10</div>
        </div>

      </div>

      <div className="bg-[#DBF0FF] font-medium rounded-r-3xl">

        <div className="p-5 grid justify-items-stretch border-b-[1px] border-[#0000001A]">
          <div className="text-sm font-bold justify-self-end">Issued Bills</div>
          <div className="text-2xl justify-self-end font-bold">01</div>
        </div>

        <div className="p-5 grid justify-items-stretch">
          <div className="text-sm font-bold justify-self-end">Waiting Bills</div>
          <div className="text-2xl justify-self-end font-bold">07</div>
        </div>

      </div>

    </div>
  );
}
