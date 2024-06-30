import AuthLogo from "../assets/image/authlogo.png"
export default function SignInForm() {
  return (
    <div className="auth-bg sign-page">
      <section className="content">
        <div className="flex flex-col w-full  justify-center mx-auto h-screen">
          <div className="w-full bg-white rounded-[3rem] py-20 px-10">
            <div className="flex items-center justify-center mt-5">
              <img
                className="w-44 h-16"
                src={AuthLogo}
              />
            </div>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="text-center">
                <h1 className="text-2xl font-bold leading-tight tracking-tight text-[#176BA3] mb-2">
                  Sign in to your account
                </h1>
                <p className="text-[#6C7293] text-base">
                  Enter your email and password to login
                </p>
              </div>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
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
                <div className="flex items-center justify-between">
                  <div className="r h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                    <label htmlFor="terms" className="font-semibold ml-2">
                      Remember Me
                    </label>
                  </div>
                  <div className="text-[#F1416C] underline ">
                    Forgot Password?
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#176BA3] text-white p-3 text-sm font-semibold"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-center text-[#6C7293] pb-10">
                  Don't have an account?
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline text-[#329DFF]"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
