import LeftArrow from '../assets/image/leftarrow.svg'
export default function ForgotPassword() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col  justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-center mt-5">
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
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
                <div><img src={LeftArrow} alt="" /></div>
                <button className='ml-2'>Back to Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
