import React, { useState } from 'react'
import { transactionData } from '../../data/transactionData';
import { Collapse } from 'antd';
import { bitmap, easyPaisa, jazzcash, visaCard } from '../../assets/image';
import { IoMdEye } from 'react-icons/io';
import { MdOutlineFileDownload } from 'react-icons/md';


const {Panel} = Collapse;

const billHeading = [
    {title: "Payment Details"},
    {title: "Reference ID"},
    {title: "Account"},
    {title: "Amount"},
    {title: "Pay Date"},
    {title: "Status"},
    {title: "Actions"},
];

const center = "flex justify-center items-center text-center border-r py-3 border-dashed";

const TransactionRecord = () => {
    const [activeKey, setActiveKey] = useState(null);
    const [active, setActive] = useState(false);

    // console.log(activeKey)

    const handleAccordionChange = (key) => {
        setActiveKey(key); // Update the activeKey state when accordion panel changes
        setActive(!active)
      };

    //   const CustomExpandIcon = () => (
    //     <FaChevronDown style={{ transform: !active ? 'none' : 'rotate(90deg)' }} />
    //   );

  return (
    
          <>
      
            <div className="overflow-x-auto shadow-md sm:rounded-lg rounded-[25px] mt-5">

              <div className="bg-[#377CF6] font-medium text-lg text-white p-3">
               All Transactions
              </div> 
                    
              <div className='grid grid-cols-8 mt-2 bg-[#DBF0FF]'>
              

                {billHeading.map((x, index)=>(

                    <div key={index} className={`${x.title === "Account" && "col-span-2"} text-center px-5 w-full py-3 border-r border-[#eff0fb] border-dashed
                      justify-self-center text-sm font-semibold text-[#377CF6]`}>

                        {x.title}

                        </div>
               
                ))}
                    </div> 


                <Collapse accordion activeKey={activeKey} onChange={handleAccordionChange}
                // expandIcon={CustomExpandIcon}
                style={{backgroundColor:"white"}}>
                    {transactionData.map((x, index)=>(
                        <Panel key={index} header={x.title} className={`text-base font-bold text-green`}>
                            
                                {x.transaction.map((x, index)=>(
                                    <div key={index} className='grid grid-cols-8 h-16 border-b odd:bg-white even:bg-[#F7F8F9] border-dashed text-xs font-semibold'>

                                    <div className={`${center}`}>{x.billName}</div> 

                                   <div className={`${center}`}>{x.cosumerID}</div> 

                                   <div className={`${center} col-span-2`}>

                                   <span>{x.cardType === "master" ? <img src={bitmap}/> : x.cardType === "visa" ? <img src={visaCard}/> :
                                     x.cardType === "easypaisa" ? <img src={easyPaisa}/> : x.cardType === "jazzcash" ? <img src={jazzcash}/> : ""} 
                                     </span> &nbsp;

                                     <span>{x.cardHolderName}</span> - 
                                      <span className='font-[10px]'>ending </span> &nbsp; {String(x.cardNumber).slice(-4)}
                                     
                                    </div> 

                                   <div className={`${center}`}>{x.amount.toLocaleString()}</div>

                                   <div className={`${center}`}>{x.payDate}</div>

                                   <div className={`${center}`}>
                                    <span className='px-3 py-1 rounded-full bg-[#E8FFF3] text-[#24A959]'>{x.status}</span>
                                    </div> 

                                   <div className='flex items-center justify-center gap-2'>
                                    
                                    <div className='p-2 bg-[#DBF0FF] hover:bg-[#acd7f6] rounded-xl'>
                                    <IoMdEye size={20} color='#377CF6'/>
                                    </div>

                                    <div className='p-2 bg-[#DBF0FF] hover:bg-[#acd7f6] rounded-xl'>
                                    <MdOutlineFileDownload size={20} color='#377CF6'/>
                                    </div>

                                    </div> 
                                   </div>
                                ))}
                        </Panel>
                    ))}
                </Collapse>     
                    


                </div>
          </>

  )
}

export default TransactionRecord
