export default function PaymentStatus({ bgColor, status, amount, borderColor,icon }) {
  return (
    <div
      className="flex justify-between items-center rounded-[2rem] py-6 px-5 font-semibold text-sm"
      style={{ backgroundColor: bgColor, borderColor: borderColor, borderWidth: '1px', borderStyle: 'solid' }}
    >
      <div className="flex items-center">

        <div className="mr-3 w-11 h-11">
          <img className="h-full w-full" src={icon} alt="" />
          </div>
          
        <div className="text-lg font-bold">{status}</div>
      </div>
      <div className="text-lg font-bold">{amount}</div>
    </div>
  );
}
