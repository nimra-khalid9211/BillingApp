import { Card, Input } from 'antd'
import React from 'react'
import { BsSend } from 'react-icons/bs';
import { SlPicture } from 'react-icons/sl';
import { VscSend } from 'react-icons/vsc';

const {TextArea} = Input;


// add logic if ticket is closed then display still having 
// issues and if ticket is open then mark as resolved

const messages = [
  {
    sender: "user",
    text: "Bill paying problem"
  },
  {
    sender: "admin",
    text: "Thank you for letting us know"
  },
  {
    sender: "admin",
    text: "We'll solve this problem asap"
  },
]


const ViewTicket = () => {
  return (

    <div className='mx-7 my-10' style={{minHeight: "60vh"}}>

    {/* <div className='border-2 border-[var(--blue)] p-8 rounded-3xl flex justify-between items-center'>
      
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

        

    </div> */}
        
    <div className='my-10'>

           {messages.map((x, index)=> 

           <div key={index} className={`flex ${x.sender === "user" ? "justify-end" : "justify-start"} mx-2`}>
              
                <div className={`${x.sender === "user" ? "bg-[var(--blue)] text-white rounded-tl-xl" : "bg-[#f1f6fa] text-[#8288a4] rounded-tr-xl" } mt-5 w-1/2 p-3 rounded-b-xl`}>
                  {x.text}

                  <div className='text-[10px] text-end'>
                  12:52PM
                 </div>

                </div>

            </div>

            )}
        
      <div className='mt-5'>

        <Card className='fixed bottom-10 rounded-3xl' style={{width: "79%"}}>

          <div className='py-3 px-5 bg-[#f6f8fa] rounded-t-3xl'>

          <div className=' flex justify-between items-center w-48'>

          <div>

          <label htmlFor='uploadFile' className='flex items-center gap-2 pl-3 hover:text-[var(--blue)]'>  
          <SlPicture /> Upload File</label>

          <input type="file" hidden id='uploadFile' />

          </div>

          </div> 

          </div>

          <div className='relative'>
            <TextArea autoSize={{ minRows: 5, maxRows: 8 }}className='px-5' placeholder='Type message here...'/>

              <div className='absolute bottom-2 right-3'>
                <div className='p-3 bg-[#f6f8fa] text-[var(--blue)] rounded-full'>
                <VscSend size={20} />
                </div>
              </div>

          </div>

        </Card>

      </div>

    </div>
            
    </div>

  )
}

export default ViewTicket