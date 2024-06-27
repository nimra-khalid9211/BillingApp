import React from 'react'
import { MyBillHeading } from "./index";


const BillsList = () => {
  return (
    <table className="w-full text-sm">

    <thead className="text-xs text-[#377CF6] text-center bg-[#DBF0FF]">
        <tr>

            {MyBillHeading.map((x,index)=>(
                <th scope="col" key={index} className={`px-6 py-3 border-dashed border-[#eff0fb] ${index !== MyBillHeading.length - 1 ? 'border-r' : ''}`}>
                {x.title}

            </th>
        ))}

        </tr>

    </thead>
    
    <tbody>
   
      {filteredBills.map((x, index)=>( 
         <tr key={index} className="bg-white border-dashed border-b border-[#eff0fb] text-center h-16 text-black font-medium">
            
            <td className="w-4 p-4 border-dashed border-r border-[#eff0fb]"> 
               
                <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox"  
                    onChange={() => handleCheckboxChange(x)} disabled={x.status === "paid" ? true : false }
                    checked={selectedBills.includes(x)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                   
                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
            </td>

            <th scope="row" className={`px-6 py-2 text-[#329DFF]  ${dashedBorderRight}`}>
                {x.billname}
            </th>

            <td className={`px-6 py-2 ${dashedBorderRight}`}>
                {x.consumerID}
            </td>

            <td className={`px-6 py-2 ${dashedBorderRight}`}>
                {x.consumerName}
            </td>

            <td className={`px-6 py-2 ${dashedBorderRight}`}>
                {x.billCompany}
            </td>

            <td className={`px-6 py-2 ${dashedBorderRight}`}>
                {x.dueDate}
            </td>

            <td className={`px-6 py-2 ${dashedBorderRight}`}>
                {isOverdue(x.dueDate)  && x.status === "unpaid" ? x.afterDueAmount : x.amount}
            </td>

            <td className={`px-6 py-2 ${dashedBorderRight}`}>
            <Switch defaultChecked={x.autoDebit} />
            </td>

            <td className={`px-6 py-2 ${dashedBorderRight}`}>
                {x.payPreference}
            </td>

            <td className={`px-6 py-2 ${dashedBorderRight}`}>
          <Button className='px-1'>  <FiDownload size={20} color='#329DFF'/> </Button>  
            </td>

            <td className={`px-6 py-2 ${dashedBorderRight}`}>
              
              {x.status === "unpaid" ? 

              <div className='flex flex-col justify-center items-center'>

                <div>
                <a href="#" className="font-medium text-[#24A959] border border-[#24A959] rounded-lg py-1 px-2 text-xs">Pay Now</a>  
                </div>


            </div>
                    :
            <div className='flex items-center justify-evenly px-6 py-2 '>
            
                <Button className='p-2 bg-[#DBF0FF] rounded-lg'><IoMdEye size={20} onClick={()=>SetModalAndID(x.id)}/></Button>
                
                <Button className='p-2 bg-[#DBF0FF] rounded-lg'><FaShareNodes size={20}/></Button>

            </div>
            }

            </td>
        </tr>
    ))}
       
    </tbody>

</table>
  )
}

export default BillsList