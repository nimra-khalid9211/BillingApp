import React, { useState } from 'react'
import { transactionData } from '../../data/transactionData';
import { Collapse } from 'antd';
import { bitmap, easyPaisa, jazzc, visaCard } from '../../assets/image';
import { IoMdEye } from 'react-icons/io';
import { MdOutlineFileDownload } from 'react-icons/md';
import ViewReceiptModal from '../Modals';
import { MyBillList } from '../../data/tables';

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

const center = "flex justify-center items-center text-center border-r py-3 border-dashed";

const TransactionRecord = ({type, from}) => {
    const [activeKey, setActiveKey] = useState(null);
    const [active, setActive] = useState(false);

    const [ openModal, setOpenModal ] = useState(false)

    const handleAccordionChange = (key) => {
        setActiveKey(key);
        setActive(!active)
      };

        const filteredBills = transactionData.map(bill=>{
        const filteredTransaction = type === "all" ? bill.transaction :
        bill.transaction.filter(trans => from === "billingOverview" ? trans.type === type : trans.cardType === type)
         return{
              ...bill, transaction: filteredTransaction
        };
      }).filter(bill => bill.transaction.length > 0);

  return (
    
          <>
      
            <div className="overflow-x-auto rounded-[25px] mt-5">

            {(from === "billingOverview" || type === "all") && 

             <div className="bg-[#377CF6] font-medium text-lg text-white p-3">

               {type === "all" ? "All Transactions" : 
               type === "electricity" ? "Electricity" : 
               type === "gas" ? "Gas" : 
               type === "water" ? "Water" :
                type === "internet" ? "Internet" :
                 ""}

              </div> 
              } 
                    
              <div className={`grid ${from === "transactions" ? 'grid-cols-6 rounded-tl-lg rounded-tr-lg' : 'grid-cols-8'} mt-2 bg-[#DBF0FF]`}>              

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
                  
                    <div key={index} className={`${x.title === "Account" && "col-span-2"} text-center px-5 w-full py-3 border-r border-[#eff0fb] border-dashed
                      justify-self-center text-sm font-semibold text-[#377CF6]`}>

                        {x.title}

                        </div>);
               
})}
                    </div> 

                <Collapse accordion activeKey={activeKey} onChange={handleAccordionChange}

                style={{backgroundColor:"white"}}>
                    {filteredBills.map((x, index)=>(
                        <Panel key={index} header={x.title} className={`text-base font-bold text-green`}>
                            
                                {x.transaction.map((x, index)=>(
                                    <div key={index} className={`grid ${from === "transactions" ? 'grid-cols-6' : 'grid-cols-8'} h-16 border-b odd:bg-white even:bg-[#F7F8F9] border-dashed text-xs font-semibold`}>

                                    <div className={`${center}`}>{x.billName}</div> 

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
                                   
                                   {/* <div className={`${center}`}>{x.payDate}</div> */}

                                   <div className={`${center}`}>{x.amount.toLocaleString()}</div>

                                   <div className={`${center}`}>{x.payDate}</div>

                                { from === "transactions" || type === "all" ?  <div className={`${center}`}>
                                    <span className='px-3 py-1 rounded-full bg-[#E8FFF3] text-[#24A959]'>{x.status}</span>
                                    </div> : ""}

                                   <div className='flex items-center justify-center gap-2'>
                                    
                                    <div className='p-2 bg-[#DBF0FF] hover:bg-[#acd7f6] rounded-xl'>
                                    <IoMdEye size={20} color='#377CF6' role='button' onClick={()=>setOpenModal(true)}/>
                                    </div>

                                    <div className='p-2 bg-[#DBF0FF] hover:bg-[#acd7f6] rounded-xl'>
                                    <MdOutlineFileDownload size={20} role='button' color='#377CF6'/>
                                    </div>

                                    </div> 
                                   </div>
                                ))}
                        </Panel>
                    ))}
                </Collapse>     
                    
      <ViewReceiptModal from={"paymentReceipt"} setOpenModal={setOpenModal} openModal={openModal}/>

                </div>
          </>

  )
}

export default TransactionRecord
