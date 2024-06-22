<<<<<<< HEAD
export default function PaymentStatus({ bgColor, status, amount,borderColor }) {
  return (
    <div
    className="flex justify-between items-center border-1 rounded-[25px] py-6 px-5 font-semibold text-sm"
    style={{ backgroundColor: bgColor, borderColor: borderColor }}
  >      <div className="flex items-center">
=======
export default function PaymentStatus({ bgColor, status, amount, borderColor }) {
  return (
    <div
      className="flex justify-between items-center rounded-[25px] py-6 px-5 font-semibold text-sm"
      style={{ backgroundColor: bgColor, borderColor: borderColor, borderWidth: '1px', borderStyle: 'solid' }}
    >
      <div className="flex items-center">
>>>>>>> billingManagement
        <div className="mr-2">icon</div>
        <div>{status}</div>
      </div>
      <div>{amount}</div>
    </div>
  );
}
