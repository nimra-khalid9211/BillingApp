import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { LuCalendarDays } from 'react-icons/lu'

const Header = () => {
  return (
    <div className='flex items-center justify-between  m-3 mt-8'>
            <b className='text-2xl'>Good Morning, Shaun Abbott</b>


            <div className='flex justify-between items-center gap-3'>
                <div className='bg-white p-2 rounded-full'>
                <IoSearchOutline size={20}/>
                </div>

                <div className='bg-white py-3 px-3 rounded-full flex gap-3'>
                <LuCalendarDays size={20}/> <b className='text-sm'>Mon, 02 Aug 2021</b>
                </div>

            </div>

    </div>
  )
}

export default Header