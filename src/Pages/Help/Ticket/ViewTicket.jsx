import React from 'react'

const ViewTicket = () => {
  return (
    <div className='mx-7 my-10'>

    <div className='border-2 border-[var(--blue)] p-8 rounded-3xl flex justify-between items-center'>
      
        <div className='flex flex-col w-1/2'>

        <div className='flex items-center justify-between '>
            <span className='text-2xl medium'>Bill Management Module UI and Technical Issues.</span>
            <span className='px-6 py-1 border border-[#6C7293] medium rounded-md text-[#6C7293]'>Closed</span>
        </div>

        <div className='flex justify-between items-center w-1/3 mt-10'>
            <span>Technical Support</span>
            <span style={{
                height: "8px", width: "8px", backgroundColor: "#6C7293", borderRadius: "50%", display: "inline-block"
            }}></span>

            <span className='text-[var(--blue)] medium'>#321-01</span>
        </div>

        </div>

            <div className='py-2 px-4 border border-[#F1416C] text-[#F1416C] rounded'>
            <span className='medium'>Still having Issues?</span>
        </div>

    </div>

    <div className='grid grid-cols-5 my-10'>

            <div className='col-span-4 relative '>

            <div className='absolute right-0 top-7'>
                
            <div className="triangle-right"></div>

            </div>

            <div className='bg-[#DBF0FF] text-[#4C6580] mt-7 p-5 px-10' style={{width: "95%"}}>

            <p className='text-xl '>05 Days - 3 Hours (Friday, 6 June 2022, 6:25 AM)</p>
            
           <div className='text-base my-8'>
            <p className='mb-8'>Hey Team, </p>

            <p>There are employees who turn in late timesheets and this can be a challenging 
                problem for employers as well. Sadly, it is then obligation of the employer 
                to pay employees on the agreed payday even without a submitted timesheet. </p>

            <p className='my-8'>There is no law that allows an employer to withhold payment due to missing timesheets.   
                
            <p>A practical way to manage this issue is to have defined policies and procedures for
               reporting hours worked.</p></p> 

            <p>Educating your employees on the expectancy for completing the timesheets on time is key
               to ensuring that you are abiding by wage payment requirements. </p>
                          
            <p className='my-8'>You should treat this policy as a disciplinary measure if the behavior continues. 
               Withholding the paycheck to gain compliance may subject the firm to potential claims
               for unpaid wages.</p>          

            <p>To prevent this issue, you can upgrade your timekeeping to an automated time 
               tracking system.</p>  
               </div>

               </div>

            </div>

            <div className='col-span-1 pt-10 self-center justify-self-center'>
                    <div className='size-48 flex justify-center items-center text-6xl text-white rounded-full custom-gradient-box'>
                        NA
                    </div>

                    <div className='mt-4 text-xl text-center flex justify-center text-[#6C7293]'>
                      <span className='w-12'> Naeem Afzal </span> 
                        </div>
            </div>

            <div className='col-span-1 pt-10 self-center justify-self-center'>
        <div className='size-48 flex justify-center items-center text-6xl text-white rounded-full custom-gradient-box2'>
            NA
        </div>

        <div className='mt-4 text-xl text-center flex justify-center text-[#6C7293]'>
          <span className='w-12'> Naeem Afzal </span> 
            </div>
            </div>

      <div className='col-span-4 relative'>

        <div className='absolute left-0 top-7'>
            <div className='triangle-right2'></div>
        </div>

        <div className='flex justify-end'>

        <div className='bg-[#feeef2] text-[#4C6580] mt-7 p-5 px-10' style={{width: "95%"}}>

            <p className='text-xl '>05 Days - 3 Hours (Friday, 6 June 2022, 6:25 AM)</p>
            
           <div className='text-base my-8'>
            <p className='mb-8'>Hey Team, </p>

            <p>There are employees who turn in late timesheets and this can be a challenging 
                problem for employers as well. Sadly, it is then obligation of the employer 
                to pay employees on the agreed payday even without a submitted timesheet. </p>

            <p className='my-8'>There is no law that allows an employer to withhold payment due to missing timesheets.   
                
            <p>A practical way to manage this issue is to have defined policies and procedures for
               reporting hours worked.</p></p> 

            <p>Educating your employees on the expectancy for completing the timesheets on time is key
               to ensuring that you are abiding by wage payment requirements. </p>
                          
            <p className='my-8'>You should treat this policy as a disciplinary measure if the behavior continues. 
               Withholding the paycheck to gain compliance may subject the firm to potential claims
               for unpaid wages.</p>          

            <p>To prevent this issue, you can upgrade your timekeeping to an automated time 
               tracking system.</p>  
               </div>

               </div>

        </div>

      </div>

    </div>

    </div>
  )
}

export default ViewTicket