export default function ChangedPassword() {
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
                Password Reset Successfully
              </h1>
              <p className="text-[#6C7293] my-5">
                Your password has been successfully reset. Click below to log in
                now
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
    </section>
  );
}
