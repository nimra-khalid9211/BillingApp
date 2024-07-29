import React from 'react'
import { IoMdEye } from 'react-icons/io'

const ticketsHeading = [
    {
        title: "Ticket ID",
        class: "text-center w-28",
    },
    {
        title: "Name",
        class: "text-center w-36",
    },
    {
        title: "Email",
        class: "text-center w-36",
    },
    {
        title: "Subject",
        class: "text-start w-60",
    },
    {
        title: "Date Created",
        class: "text-center w-28",
    },
    {
        title: "Status",
        class: "text-center w-24",
    },
    {
        title: "Actions",
        class: "text-center w-24",
    },
]

const tickets = [
    {
        ticketId: "#321-01",
        name: "Rizwan Kareem",
        email: "Rizwan@gmail.com",
        subject: "In publishing and graphic design, Lorem ipsum is a placeholder text",
        dateCreated: "02 May 2024",
        status: true
    },
    {
        ticketId: "#321-02",
        name: "Rizwan Kareem",
        email: "Rizwan@gmail.com",
        subject: "In publishing and graphic design, Lorem ipsum is a placeholder text",
        dateCreated: "10 May 2024",
        status: true
    },
    {
        ticketId: "#321-03",
        name: "Rizwan Kareem",
        email: "Rizwan@gmail.com",
        subject: "In publishing and graphic design, Lorem ipsum is a placeholder text",
        dateCreated: "12 May 2024",
        status: false
    },
]

const border = "border-r border-dashed border-[#d9d9d9]"



const TicketTable = ({setTicket}) => {
  return (
    <div className='mt-4'>

            <table className='w-full'>

                <thead className='text-[var(--blue)] bg-[#DBF0FF]'>
                   {ticketsHeading.map((x, index)=>(
                     <th key={index} className={`${x.class} text-xs py-3 px-8 ${index === ticketsHeading.length -1 ? "" : "border-r border-dashed border-[#d9d9d9]"} text-[var(--blue)] bg-[#DBF0FF]`}>{x.title}</th>
                   ))}
                </thead>

                <tbody>

                    {tickets.map((x, index)=>(
                        <tr key={index} className={`text-xs medium h-16 ${index === tickets.length -1 ? "" : "border-b border-dashed border-[#d9d9d9]" }`}> 

                        <td className={`text-center ${border}`}>{x.ticketId}</td>

                        <td className={`text-center ${border}`}>{x.name}</td>

                        <td className={`text-center ${border}`}>{x.email}</td>

                        <td className={`text-start px-4 py-2 ${border}`}>{x.subject}</td>

                        <td className={`text-center ${border}`}>{x.dateCreated}</td>
                        
                        <td className={`text-center ${border}`}>
                          <div className='flex items-center justify-center'>
                          <span className={`border py-1 px-5 rounded-full ${x.status ? "text-[#24A959] border-[#24A959] hover:text-green-500 hover:border-green-500" : "border-[#6C7293] text-[#6C7293]"}`}>
                          {x.status ? "Open" : "Close"}
                          </span>
                          </div>
                        </td>
                        
                        <td className='flex justify-center mt-2'>
                        
                        <div className="p-2 border-0 bg-[#DBF0FF] rounded-lg w-9">
                        <IoMdEye size={20} onClick={()=>setTicket(3)}
                        className="text-[#377CF6] hover:text-[var(--blue)] cursor-pointer" />
                        </div>
                       
                        </td>

                        </tr>
                ))}

                </tbody>
            </table>

        </div> 
  )
}

export default TicketTable