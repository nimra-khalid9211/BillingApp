import AuthLogo from "../assets/image/authlogo.png";
export default function VerifiedCode() {
  return (
    <section className="verification-bg auth-bg">
      <div className="content">
        <div className="flex flex-col w-full  justify-center mx-auto h-screen">
          <div className="w-full bg-white rounded-[3rem] py-20 px-10">
            <div className="flex items-center justify-center mt-5">
              <img className="w-44 h-16" src={AuthLogo} />
            </div>
            <div className="text-[#176BA3] text-center underline text-sm font-semibold">
              Simplify Your Bills with BPay
            </div>

            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="text-center">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-[#176BA3]">
                  Enter Verification Code{" "}
                </h1>
                <p className="text-[#6C7293] my-5">
                  We've sent a code to imranali09@gmail.com
                </p>
              </div>
              <div>
                <div className="flex justify-center space-x-2">
                  {Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <input
                        key={index}
                        id={`input-${index}`}
                        type="number"
                        maxLength="1"
                        className="w-12 h-12 border border-[#176BA3] text-center text-2xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#176BA3]"
                      />
                    ))}
                </div>
              </div>
              <p className="text-sm font-light text-center text-[#6C7293]">
                Didn't get a code?
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline text-[#329DFF]"
                >
                  Click to resend{" "}
                </a>
              </p>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#176BA3] text-white p-3 text-sm font-semibold"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
