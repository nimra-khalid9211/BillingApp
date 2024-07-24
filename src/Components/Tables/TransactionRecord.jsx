import React, { useState } from 'react'
import { transactionData } from '../../data/transactionData';
import { Collapse } from 'antd';
import { bitmap, easyPaisa, jazzc, visaCard } from '../../assets/image';
import { IoMdEye } from 'react-icons/io';
import { MdOutlineFileDownload } from 'react-icons/md';
import {ViewReceiptModal} from '../Modals';
import { PDFTemplate } from '../PDFTemplate';

const {Panel} = Collapse;

const billHeading = [
    {title: "Bill Name"},
    {title: "Consumer ID"},
    {title: "Consumer Name"},
    {title: "Company Code"},
    {title: "Bill Month"},
    {title: "Account"},
    {title: "Amount"},
    {title: "Pay Date"},
    {title: "Status"},
    {title: "Actions"},
];

const center = "border-r py-4 border-dashed";

const TransactionRecord = ({type, from, heading}) => {
    const [activeKey, setActiveKey] = useState(null);
    const [active, setActive] = useState(false);

    const [ openModal, setOpenModal ] = useState(false)

    const handleAccordionChange = (key) => {
        setActiveKey(key);
        setActive(!active)
      };

    const filteredBills = transactionData.filter((x) => {
        return type === "all" || x.type === type || x.cardType === type;
      });

  return (    
          <>
      
            <div className="rounded-3xl mt-5 drop-shadow-lg mb-7 bg-[#ffffff]">

            {(from === "billingOverview" || type === "all") && 

             <div className="drop-shadow-xl text-[var(--blue)] flex justify-between items-center rounded-t-3xl bg-white px-7 font-medium text-lg p-3">

               {type === "all" ? "All Transactions" : 
               type === "electricity" ? "Electricity" : 
               type === "gas" ? "Gas" : 
               type === "water" ? "Water" :
                type === "internet" ? "Internet" :
                 ""}

                {from === "billingOverview" && <span className='text-sm'>This Month</span>}

              </div> 
              } 

           <table className='w-full mt-2'>

                  <thead className='bg-[#DBF0FF]'>

                  <tr>

                   {heading.map((x, index)=>( 

                    <th className={`py-3 text-sm text-[var(--blue)] ${index === 0 ? "text-left pl-6": "text-center"}
                     ${index === heading.length -1 ? "" : "border-r border-dashed border-[#4653D72B]"} `}>
                      {x.title}
                      </th>
                    ))}

                  </tr>

                  </thead>

                  <tbody>

                      {filteredBills.map((x, index)=>(

                        <tr key={index} className={`text-xs ${index === filteredBills.length - 1 ? '' :'border-b border-dashed'}`}>

                            <td className={`w-60 truncate ${from === "transactions" ? "pl-1 text-center" : "pl-6"} ${center}`}>
                             

                              { from === "transactions" ?
                                  
                                  <div className={`flex justify-start pl-6 items-center`}>

                                   <span>{x.cardType === "master" ? <img src={bitmap}/> : x.cardType === "visa" ? <img src={visaCard}/> :
                                     x.cardType === "easyPaisa" ? <img src={easyPaisa}/> : x.cardType === "jazzCash" ? <img src={jazzc} width={28}/> : ""} 
                                     </span> &nbsp;

                                     <span>{x.cardHolderName}</span> - 
                                      <span className='font-[8px]'>ending </span> &nbsp; {String(x.cardNumber).slice(-4)}
                                     
                                    </div> :  x.billName }

                              </td>
                            
                            <td className={`w-40 text-center ${center}`}>{x.cosumerID}</td>
                            
                            <td className={`w-40 truncate text-center px-4 ${center}`}>{x.consumerName}</td>
                            
                            <td className={`w-32 text-center ${center}`}>{x.companyCode}</td>
                            
                            {from === "billingOverview" && <td className={`w-32 text-center ${center}`}>{x.billMonth}</td>}
                            
                            <td className={`w-32 text-center ${center}`}>{x.payDate}</td>
                            
                            <td className={`w-32 text-center ${center}`}>{x.amount.toLocaleString()}</td>
                            
                            <td className={`w-32 text-center ${center}`}>

                            <span className=' bg-[#E8FFF3] px-4 py-1 rounded-xl text-[#24A959]'>  {x.status}</span>

                              </td>

                            <td className={`w-32 text-center py-4`}>
                            <div className='flex items-center justify-center gap-2'>
                                    
                                    <div className='p-2 bg-[#DBF0FF] hover:bg-[#acd7f6] rounded-lg'>
                                    <IoMdEye size={20} color='#377CF6' role='button' onClick={()=>setOpenModal(true)}/>
                                    </div>

                                    <div className='p-2 bg-[#DBF0FF] hover:bg-[#acd7f6] rounded-lg'>
                                    <MdOutlineFileDownload size={20} role='button' color='#377CF6'  onClick={PDFTemplate}/>
                                    </div>

                                    </div> 
                            </td>

                        </tr>

                      ))}

                  </tbody>

                </table>
                    
      <ViewReceiptModal from={"paymentReceipt"} setOpenModal={setOpenModal} openModal={openModal}/>

                </div>
          </>

  )
}

export default TransactionRecord
