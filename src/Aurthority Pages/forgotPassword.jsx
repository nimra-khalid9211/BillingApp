import LeftArrow from '../assets/image/arrow-left.png'
import AuthLogo from "../assets/image/authlogo.png";
export default function ForgotPassword() {
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
               Forgot Password?
              </h1>
              <p className="text-[#6C7293] mt-2">
                No worries, We'll send you resety instruction.
              </p>
            </div>
            <form className="space-y-4 md:space-y-6 mt-5" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#176BA3] text-white p-3 text-sm font-semibold"
              >
                Reset Password
              </button>
              <div className='text-[#6C7293] flex items-center justify-center'>
                <div><img src={LeftArrow} className='h-5 w-6' /></div>
                <button className='ml-2'>Back to Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
