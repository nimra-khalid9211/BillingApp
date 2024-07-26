export default function Buttons({
  button1,
  button2,
  onButton1Click,
  onButton2Click,
}) {
  return (
    <div className="mt-10">
      <button
        className="border border-[#6C7293] text-[#6C7293] rounded-[2rem] px-10 py-3"
        onClick={onButton1Click}
      >
        {button1}
      </button>
      <button
        className="bg-[#377CF6] text-white rounded-[2rem] px-10 py-3 medium ml-3"
        onClick={onButton2Click}
      >
        {button2}
      </button>
    </div>
  );
}
