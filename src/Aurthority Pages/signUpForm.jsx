import React from "react";
import AuthLogo from "../assets/image/authlogo.png"

export default function SignUpForm() {
  return (
   <div className="auth-bg sign-page">
     <section className="content">
      <div className="flex flex-col w-full  justify-center mx-auto h-screen">
        <div className="w-full bg-white py-10 px-10 rounded-[3rem]">
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
                Sign up to your account
              </h1>
              <p className="text-[#6C7293]">
              Create your free account today
              </p>
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mobile Number
                </label>
                <input
                  name=""
                  placeholder="Enter your number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
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
              <div className="r h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required
                />
                <label htmlFor="terms" className="font-semibold ml-2">
                  I Accept the <span className="text-[#329DFF]">Terms & Conditions</span>
                </label>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#176BA3] text-white p-3 text-sm font-semibold"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-center text-[#6C7293]">
                Already have an account?
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline text-[#329DFF]"
                >
                  Sign in
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
