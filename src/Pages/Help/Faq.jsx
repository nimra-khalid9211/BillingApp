import { Card } from 'antd'
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

const items =[
    {
        question : "What does this application do?",
        answer: "This application will help you in paying bills easily."
    },
    {
        question : "How we can use this application?",
        answer: "We can use this application by creating a credentials."
    },
    {
        question : "Is this application secure?",
        answer: "Yes, this application is secure we using security algorithms for encrypting data."
    },
]

const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleIndex = (index) =>{
        if(openIndex === index){
            setOpenIndex(null)
        }else{
            setOpenIndex(index)
        }
    }

  return (
    <Card className='rounded-3xl mt-3'>
    <div className="drop-shadow-xl pl-7 rounded-t-3xl text-[var(--blue)] bg-white font-medium text-lg p-3">
        FAQ's
      </div>

        <div className='mx-7 my-10'>
            
            <div className='flex flex-col'>
                <span className='text-lg font-medium'>Frequently Asked Questions</span>
                <span className='text-sm text-[#6C7293] mt-2'>List of questions asked by our users</span>
            </div>

          <div className='grid grid-cols-2 gap-5 mt-10'>

         {items.map((x, index)=> 
         <Card key={index} className={`p-4 mt-6 drop-shadow-lg ${openIndex === index ? "h-auto" : "h-14"}`}>

            <div key={index} className='flex flex-col'>

                <div className='flex text-sm font-medium justify-between items-center'>

                <span>{x.question}</span>

               {openIndex !== index ? <FiPlus size={20} color='#377CF6' onClick={()=>handleIndex(index)}/>
            : <IoClose size={20} color='#377CF6' onClick={()=>handleIndex(index)}/>}

                </div>

               {openIndex === index && 
               <span className='mt-5 font-medium text-[#6C7293]'>{x.answer}</span>
               }
                </div>

          </Card>
        )}

          </div>

        </div>
   
  </Card>
  )
}

export default Faq