export default function GovtList() {
  return (
    <div className="rounded-[3rem] border">
      <div className="bg-[#377CF6] text-white p-3 mb-10 rounded-t-lg">
        Govt Payments
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-[25px] mt-5">
        <div className="bg-[#377CF6] text-white p-3">Due Bills List</div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs  uppercase bg-[#DBF0FF] text-[#377CF6]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Bill name
              </th>
              <th scope="col" className="px-6 py-3">
                Bill Campany
              </th>
              <th scope="col" className="px-6 py-3">
                Consumer Number
              </th>
              <th scope="col" className="px-6 py-3">
                Due Date
              </th>
              <th scope="col" className="px-6 py-3">
                Amount Due
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Electricity Bill
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-[#24A959] border border-[#24A959] rounded-[1rem] py-1 px-2 text-xs"
                >
                  Pay Now
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
