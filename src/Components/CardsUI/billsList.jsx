export default function BillsList(){
    return(
        

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
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Electricity Bill
                </th>
                <td className="px-6 py-4 text-center">
                    Silver
                </td>
                <td className="px-6 py-4 text-center">
                    Laptop
                </td>
                <td className="px-6 py-4 text-center">
                    $2999
                </td>
                <td className="px-6 py-4 text-center">
                    $999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-[#24A959] border border-[#24A959] rounded-[1rem] py-1 px-2 text-xs">Pay Now</a>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Gas Bill
                </th>
                <td className="px-6 py-4 text-center">
                    White
                </td>
                <td className="px-6 py-4 text-center">
                    Laptop PC
                </td>
                <td className="px-6 py-4 text-center">
                    $1999
                </td>
                <td className="px-6 py-4 text-center">
                    $999
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-[#24A959] border border-[#24A959] rounded-[1rem] p-2 py-1 px-2 text-xs">Pay Now</a></td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    PTCL Bill
                </th>
                <td className="px-6 py-4 text-center">
                    Black
                </td>
                <td className="px-6 py-4 text-center">
                    Accessories
                </td>
                <td className="px-6 py-4 text-center">
                    $99
                </td>
                <td className="px-6 py-4 text-center">
                    $999
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-[#24A959] border border-[#24A959] rounded-[1rem] p-2 py-1 px-2 text-xs">Pay Now</a></td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Water Bill
                </th>
                <td className="px-6 py-4 text-center">
                    Gray
                </td>
                <td className="px-6 py-4 text-center">
                    Phone
                </td>
                <td className="px-6 py-4 text-center">
                    $799
                </td>
                <td className="px-6 py-4 text-center">
                    $999
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-[#24A959] border border-[#24A959] rounded-[1rem] p-2 py-1 px-2 text-xs">Pay Now</a>                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    School Bill
                </th>
                <td className="px-6 py-4 text-center">
                    Red
                </td>
                <td className="px-6 py-4 text-center">
                    Wearabl
                </td>
                <td className="px-6 py-4 text-center">
                    $999
                </td>
                <td className="px-6 py-4 text-center">
                    $999
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-[#24A959] border border-[#24A959] rounded-[1rem] p-2 py-1 px-2 text-xs">Pay Now</a>                </td>
            </tr>
        </tbody>
    </table>
</div>

    )
}