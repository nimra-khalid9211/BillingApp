import React, { useState } from 'react'
import { transactionData } from '../../data/transactionData';
import { Collapse } from 'antd';
import { bitmap, easyPaisa, jazzc, visaCard } from '../../assets/image';
import { IoMdEye } from 'react-icons/io';
import { MdOutlineFileDownload } from 'react-icons/md';
import ViewReceiptModal from '../Modals';
import { MyBillList } from '../../data/tables';
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

      //   const filteredBills = transactionData.map(bill=>{
      //     console.log(bill)
      //   const filteredTransaction = type === "all" ? bill :
      //   bill.filter(trans => from === "billingOverview" ? trans.type === type : trans.cardType === type)
      //    return{
      //          filteredTransaction
      //   };
      // }).filter(bill => bill.transaction.length > 0);

      // const filteredBills = transactionData.filter((x)=>{
      // return type === "all" ? x : type === x.type ? x.type  : ""
      // });

      const filteredBills = transactionData.filter((x) => {
        return type === "all" || x.type === type || x.cardType === type;
      });

      console.log(from, "from filtered bills")

  return (    
          <>
      
            <div className="rounded-3xl mt-5 drop-shadow-lg  bg-[#ffffff]">

            {(from === "billingOverview" || type === "all") && 

             <div className="drop-shadow-xl text-[var(--blue)] rounded-t-3xl bg-white px-7 font-medium text-lg p-3">

               {type === "all" ? "All Transactions" : 
               type === "electricity" ? "Electricity" : 
               type === "gas" ? "Gas" : 
               type === "water" ? "Water" :
                type === "internet" ? "Internet" :
                 ""}

              </div> 
              } 
                    
              {/* <div className={`grid ${(from === "billingOverview" || type === "all") && "mt-2"} ${from === "transactions" ? 'grid-cols-6 rounded-tl-lg rounded-tr-lg' : 'grid-cols-8'} bg-[#DBF0FF]`}>              

                {billHeading.map((x, index)=>{
                  if (
                    (x.title === "Account" && type !== "all") ||
                    (x.title === "Consumer Name" && from !== "billingOverview") ||
                    (x.title === "Company Code" && from !== "billingOverview") ||
                    (x.title === "Bill Month" && from !== "billingOverview") ||
                    (x.title === "Status" && from === "billingOverview") 
                  ) {
                    return null; // Skip rendering this column
                  }
                  return (
                  
                    <div key={index} className={`${x.title === "Account" && "col-span-2"} ${index === 0 ? "text-left": "text-center"} px-5 w-full py-3 border-r border-[#cacde9] border-dashed
                      justify-self-center text-sm font-semibold text-[var(--blue)]`}>

                        {x.title}

                        </div>);
               
})}
                    </div>  */}

                {/* <Collapse accordion activeKey={activeKey} onChange={handleAccordionChange}

                style={{backgroundColor:"white", border: "0"}}>
                    {filteredBills.map((x, index)=>(
                        <Panel key={index} header={x.title} className={`text-base font-semibold text-green`}>
                            
                                {x.transaction.map((x, index)=>(
                                    <div key={index} className={`grid ${from === "transactions" ? 'grid-cols-6' : 'grid-cols-8'} h-16 border-b border-dashed text-xs font-medium`}>

                                    <div className={`flex px-5 justify-start items-center text-center border-r py-3 border-dashed`}>{x.billName}</div> 

                                   <div className={`${center}`}>{x.cosumerID}</div> 

                                  {type === "all" && from !== "billingOverview" ?
                                  
                                  <div className={`${center} col-span-2`}>

                                   <span>{x.cardType === "master" ? <img src={bitmap}/> : x.cardType === "visa" ? <img src={visaCard}/> :
                                     x.cardType === "easyPaisa" ? <img src={easyPaisa}/> : x.cardType === "jazzCash" ? <img src={jazzc} width={28}/> : ""} 
                                     </span> &nbsp;

                                     <span>{x.cardHolderName}</span> - 
                                      <span className='font-[10px]'>ending </span> &nbsp; {String(x.cardNumber).slice(-4)}
                                     
                                    </div> : "" }
                                    
                                   {from === "billingOverview" && <><div className={`${center}`}>{x.consumerName}</div>
                                   
                                   <div className={`${center}`}>{x.companyCode}</div>
                                   
                                   <div className={`${center}`}>{x.billMonth}</div></>}

                                   <div className={`${center}`}>{x.amount.toLocaleString()}</div>

                                   <div className={`${center}`}>{x.payDate}</div>

                                {from === "transactions" || type === "all" ?  <div className={`${center}`}>
                                    <span className='px-3 py-1 rounded-full bg-[#E8FFF3] text-[#24A959]'>{x.status}</span>
                                    </div> : ""}

                                   <div className='flex items-center justify-center gap-2'>
                                    
                                    <div className='p-2 bg-[#DBF0FF] hover:bg-[#acd7f6] rounded-lg'>
                                    <IoMdEye size={20} color='#377CF6' role='button' onClick={()=>setOpenModal(true)}/>
                                    </div>

                                    <div className='p-2 bg-[#DBF0FF] hover:bg-[#acd7f6] rounded-lg'>
                                    <MdOutlineFileDownload size={20} role='button' color='#377CF6'  onClick={PDFTemplate}/>
                                    </div>

                                    </div> 
                                   </div>
                                ))}
                        </Panel>
                    ))}
                </Collapse>      */}

                <table className='w-full table-fixed mt-2'>

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

                        <tr key={index} className='border-b border-dashed'>

                            <td className={`${from === "transactions" ? "pl-1 text-xs text-center" : "pl-6"} ${center}`}>
                             

                              { from === "transactions" ?
                                  
                                  <div className={`flex justify-center items-center`}>

                                   <span>{x.cardType === "master" ? <img src={bitmap}/> : x.cardType === "visa" ? <img src={visaCard}/> :
                                     x.cardType === "easyPaisa" ? <img src={easyPaisa}/> : x.cardType === "jazzCash" ? <img src={jazzc} width={28}/> : ""} 
                                     </span> &nbsp;

                                     <span>{x.cardHolderName}</span> - 
                                      <span className='font-[8px]'>ending </span> &nbsp; {String(x.cardNumber).slice(-4)}
                                     
                                    </div> :  x.billName }

                              </td>
                            
                            <td className={`text-center ${center}`}>{x.cosumerID}</td>
                            
                            <td className={`w-5 truncate text-center px-4 ${center}`}>{x.consumerName}</td>
                            
                            <td className={`text-center ${center}`}>{x.companyCode}</td>
                            
                            {from === "billingOverview" && <td className={`text-center ${center}`}>{x.billMonth}</td>}
                            
                            <td className={`text-center ${center}`}>{x.payDate}</td>
                            
                            <td className={`text-center ${center}`}>{x.amount.toLocaleString()}</td>
                            
                            <td className={`text-center ${center}`}>

                            <span className='bg-[#E8FFF3] px-4 py-1 rounded-xl text-[#24A959]'>  {x.status}</span>

                              </td>

                            <td className={`text-center ${center}`}>
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
