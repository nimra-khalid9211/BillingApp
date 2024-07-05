import { Avatar, Card } from 'antd'
import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import { Card1, Card2, Card3 } from '../../../assets/image';

const card = [
    {
        img: Card1,
        title: "This is this",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        day: "Today",
        time: "1 hr"
    },
    {
        img: Card2,
        title: "This is this",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        day: "Today",
        time: "1 hr"
    },
    {
        img: Card3,
        title: "This is this",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        day: "Today",
        time: "1 hr"
    },
]

const Tutorial = () => {
  return (
    <Card className='rounded-3xl mt-3'>
    <div className='bg-[#377CF6] rounded-tl-3xl rounded-tr-3xl py-2 pl-6
     text-lg font-medium text-[#FFFFFF]'>
        Tutorial
        </div>

        <div className='mx-7 my-10'>
            
            <div className='grid grid-cols-2 mx-10'>

             <LeftSide />

            <RightSide />             

            </div>

            <div className='mx-10 flex justify-between items-center gap-4 mt-7'>

           {card.map((x)=>( 
            <Card className='faq-card-shadow'
            cover={
            <img alt="example" src={x.img} /> }>

            <div className='mx-5 flex flex-col'>

                <span className='mt-3 text-lg font-medium'>{x.title}</span>
                <span className='my-4 text-sm'>{x.description}</span>

                <div class="flex items-center mb-3 justify-start text-xs font-medium text-[#6C7293]">

                <span>{x.day}</span>
                <span class="mx-2">•</span>
                <span>{x.time}</span>

                </div>

            </div>

            </Card>))}

            </div>

        </div>
   
  </Card>
  )
}

export default Tutorial