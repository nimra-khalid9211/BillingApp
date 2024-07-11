import { formatAmount } from "../../../Hooks";


export default function PaymentStatus({ bgColor, status, amount, borderColor,icon }) {

  
  const { integerPart, decimalPart } = formatAmount(amount);
  
  return (
    <div
      className="flex justify-between items-center rounded-[2rem] py-6 px-5 font-semibold text-sm drop-shadow-xl"
      style={{ backgroundColor: bgColor, borderColor: borderColor, borderWidth: '1px', borderStyle: 'solid' }}
    >
      <div className="flex items-center">

        <div className="mr-3 w-11 h-11">
          <img className="h-full w-full" src={icon} alt="" />
          </div>
          
        <div className="text-lg font-bold">{status}</div>
      </div>
      <div className="relative pr-4">
          <span className="text-[#6C7293] text-sm mr-1">Rs</span> <span className='text-xl'>{integerPart}</span>
          <span className="text-sm align-super absolute top-0 ml-1">.{decimalPart}</span>
        </div>
    </div>
  );
}
