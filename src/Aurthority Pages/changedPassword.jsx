import AuthLogo from "../assets/image/authlogo.png";
export default function ChangedPassword() {
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
                  Password Reset Successfully
                </h1>
                <p className="text-[#6C7293] my-5 mx-auto w-[21rem]">
                  Your password has been successfully reset. Click below to log
                  in now
                </p>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#176BA3] text-white p-3 text-sm font-semibold"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
