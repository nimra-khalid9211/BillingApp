import Cheque from "../../assets/image/Cheque.svg"


export default function IssuedBill() {
  return (
    <div className="p-5 border rounded-[25px] font-semibold drop-shadow-xl">
      <div className="flex justify-center items-center bg-[#EDF1FF] rounded-full h-[3rem] w-[3rem]">
        <img src={Cheque} alt="My SVG" className="" />
      </div>
      <div className="mt-10">
        <div className="text-lg">Issued Bill Amount</div>
        <div className="text-lg font-bold">Rs 46000</div>
      </div>
    </div>
  );
}


