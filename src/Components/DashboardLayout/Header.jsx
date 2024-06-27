import { Avatar, Badge } from 'antd'
import React from 'react'
import { CiSettings } from 'react-icons/ci'
import { FaAngleDown, FaRegBell, FaRegUser } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
import { LuCalendarDays } from 'react-icons/lu'

const Header = () => {

  const date = Date().slice(0,15);


  return (

    <div className='flex items-center justify-between  mt-8'>
            <b className='text-2xl'>Good Morning, Shaun Abbott</b>

            <div className='flex justify-between items-center gap-3'>

                <div className='bg-white p-2 rounded-full'>
                <IoSearchOutline size={20}/>
                </div>

                <div className='bg-white py-3 px-3 rounded-full flex gap-3'>
                <LuCalendarDays size={20}/> <b className='text-sm'>{date}</b>
                </div>

                <div className='bg-white py-3 px-3 rounded-full gap-3'>
                 <CiSettings size={20}/>
                </div>

                <div className='bg-white py-3 px-3 flex items-center rounded-full gap-3'>
                <Badge dot color='#377CF6'>  <FaRegBell size={18}/> </Badge>
                </div>

                <div className='bg-white p-1 flex items-center justify-start rounded-full gap-3'>
                <Avatar size={34} icon={<FaRegUser />} />

                <div className='flex flex-col '>
                  <b className='text-sm' style={{lineHeight:"0.7rem"}}>Shaun Abbott</b>
                  <span className='text-[10px]'>shaunabbott@gmail.com</span>
                </div>

                <FaAngleDown />

                </div>

            </div>

    </div>
    
  )
}

export default Header