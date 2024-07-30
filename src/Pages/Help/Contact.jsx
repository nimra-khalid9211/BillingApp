import React from 'react'
import CardLayout from '../../Components/CardLayout'
import { help } from '../../assets/image'
import { Card } from 'antd'
import { IoIosMail } from 'react-icons/io'
import { MdOutlineMail } from 'react-icons/md'
import { CiPhone } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsappSquare } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'
import { GrLocation } from 'react-icons/gr'



// support billing general query

const Contact = () => {
  return (
   <CardLayout title={"Contact"} from={"nonEdit"} height={"h-[40rem]"}>
    
    <div className='mt-10'>
    <span className='text[#176BA3] mx-12 text-2xl text-[var(--blue)]'>We'd love to hear from you!</span>
    </div>

    <div className='grid grid-cols-5 mx-12 mt-10'>

    <div className='col-span-3'>

    <div className='grid grid-cols-2 gap-4 mb-10'>
     
        <Card className='col-span-2 bg-white shadow-for-all px-6 py-3 rounded-3xl'>
           
           <div className='flex items-center'>
           <div className='p-1 rounded-full bg-[var(--blue)] text-white'>
           <MdOutlineMail size={20}/>
           </div>

           <span className='pl-3 text-base medium'>Email Address</span>
           </div>

           <div className='flex justify-start flex-col medium mt-3 text-[#192440]'>
              
               <div className='ml-10 flex items-center text-[#192440] '>
                    <span className='text-base w-32'>Support &nbsp;</span>
                   <span className='bg-[#F2F2F2] rounded-xl py-2 px-4'>support@bpay.com</span>
               </div>

               
               <div className='ml-10 flex items-center text-[#192440] mt-2'>
                    <span className='text-base w-32'>Billing &nbsp;</span>
                   <span className='bg-[#F2F2F2] rounded-xl py-2 px-4'>billing-query@bpay.com</span>
               </div>

               <div className='ml-10 flex items-center text-[#192440] mt-2'>
                    <span className='text-base w-32'>General &nbsp;</span>
                   <span className='bg-[#F2F2F2] rounded-xl py-2 px-4'>usman@bpay.com</span>
               </div>


           </div>

        </Card>

        <Card className='col-span-2 bg-white shadow-for-all px-6 py-3 rounded-3xl'>
           
            <div className='flex items-center'>
            <div className='p-1 rounded-full bg-[var(--blue)] text-white'>
            <FiPhone size={20}/>
            </div>

            <span className='pl-3 text-base medium'>Contact Number</span>
            </div>

            <div className='flex flex-col medium text-[#192440]'>

                <div className='ml-10 flex items-center mt-3 text-[#192440] '>
                    <span className='text-base w-32'>Whatsapp &nbsp;</span>
                   
                    <div className='py-2 px-4 flex items-center rounded-xl bg-[#F2F2F2]'>

                    <div className='mr-2 text-white'>
                    <ImWhatsapp  className='bg-green-500 rounded-full' size={20}/> 
                    </div>

                    <span>0302 1100888</span>
                    </div>

               </div>

               <div className='ml-10 flex items-center mt-3 text-[#192440] '>
                    <span className='text-base w-32'>Calling &nbsp;</span>
                   
                    <div className='py-2 px-4 flex items-center gap-2 rounded-xl bg-[#F2F2F2]'>

                    <FiPhone size={18}/>

                    <span>0302 1100888</span>
                    </div>

               </div>

            </div>

        </Card>


    </div>

    </div>

    <div className='col-span-2'>

        <div className='flex justify-end'>
        <img src={help} alt="" width={400}/>
        </div>

    </div>

    </div>

   </CardLayout>
  )
}

export default Contact