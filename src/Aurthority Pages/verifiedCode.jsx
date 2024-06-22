export default function VerifiedCode() {
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
    </section>
  );
}
