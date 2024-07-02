import React from 'react'
import { rightSideBar1, rightSideBar2, rightSideBar3, rightSideBar4 } from '../../../assets/image'

const blogs = [
    {
      img: rightSideBar1,
      title: "This",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      day: "Today",
      time: "1 hr"
    },
    {
      img: rightSideBar2,
      title: "This",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      day: "Today",
      time: "4 hr"
    },
    {
      img: rightSideBar3,
      title: "This",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      day: "Yesterday",
      time: "1 hr"
    },
    {
      img: rightSideBar4,
      title: "This",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      day: "3 days ago",
      time: "1 hr"
    },
  ]

const RightSide = () => {
  return (
    <div className='ml-5'>
    <div className='text-lg font-medium mb-4'>Latest news and updates</div>
      <span className='text-sm text-[#6C7293]'>
      Discover step-by-step instructions for building a secure billing payment 
      application with comprehensive user management features.
      </span>

      {blogs.map((x)=>(
        <div className='flex border-b-2 pb-3 mt-6'>
             <img src={x.img} alt="" width={100} height={100} className='rounded-lg'/>

               <div className='flex flex-col justify-start ml-3 text-base'>
               <span className='font-medium'> {x.title} </span>
               
               <span className='text-sm text-[#6C7293] py-2'> {x.description} </span>

               <div class="flex items-center justify-start text-xs font-medium text-[#6C7293]">

           <span>{x.day}</span>

           {x.day === "Today" && 

           <> 
           <span class="mx-2">•</span>
           <span>{x.time}</span>
           </>
           }

            </div>
              </div>
      </div>
    ))}

    </div>
  )
}

export default RightSide