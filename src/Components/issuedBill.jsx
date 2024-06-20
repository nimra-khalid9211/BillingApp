import Cheque from "../assets/image/Cheque.svg"
export default function IssuedBill() {
  return (
    <div className="p-5 border rounded-[25px] font-semibold shadow-custom">
      <img src={Cheque} alt="My SVG" />
      <div className="mt-10">
        <div className="text-lg">Issued Bill Amount</div>
        <div className="text-lg font-bold">Rs 46000</div>
      </div>
    </div>
  );
}
