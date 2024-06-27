import AuthLogo from "../assets/image/authlogo.png"
export default function SetPassword(){
    return(
        <section className="verification-bg auth-bg">
        <div className="content">
          <div className="flex flex-col w-full  justify-center mx-auto h-screen">
            <div className="w-full bg-white rounded-[3rem] py-20 px-10">
            <div className="flex items-center justify-center mt-5">
            <img
                className="w-44 h-16"
                src={AuthLogo}
              />
            </div>
            <div className="text-[#176BA3] text-center underline text-sm font-semibold">Simplify Your Bills with BPay</div>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="text-center">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-[#176BA3]">
                  Set New Password
                </h1>
                <p className="text-[#6C7293] mt-1">Please choose your new password</p>
              </div>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                   New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Comfirm Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#176BA3] text-white p-3 text-sm font-semibold"
                >
                  Reset Password
                </button>
              </form>
            </div>
            </div>
          </div>
        </div>
      </section>
    )
}