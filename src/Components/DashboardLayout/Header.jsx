import { Avatar, Badge, Dropdown, Menu } from 'antd'
import React, { useState } from 'react'
import { CiSettings } from 'react-icons/ci'
import { FaAngleDown, FaAngleUp, FaRegBell, FaRegUser } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
import { LuCalendarDays } from 'react-icons/lu'
import { RiLogoutBoxLine, RiUserLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'

const dropdownMenu = [
  {
    title: "Profile",
    icon: <RiUserLine size={20}/>,
    link: "/settings/profile"
  },
  {
    title: "Settings",
    icon: <CiSettings size={20}/>,
    link: "/settings"
  },
  {
    title: "Logout",
    icon: <RiLogoutBoxLine size={20}/>,
  },
]

const Header = () => {
  const navigate = useNavigate();

  const [dropdown, setDropdown] = useState(false);

  const date = Date().slice(0,15);

  return (

    <div className='flex items-center justify-between  mt-5'>
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

                <div role='button' onClick={()=>setDropdown(!dropdown)} 
                className={`bg-white p-1 relative flex items-center justify-start rounded-full gap-3`}>

                <Avatar size={34} icon={<FaRegUser />} />

                <div className='flex flex-col '>
                  <b className='text-sm' style={{lineHeight:"0.7rem"}}>Shaun Abbott</b>
                  <span className='text-[10px]'>shaunabbott@gmail.com</span>
                </div>

               {dropdown ? <FaAngleUp/> : <FaAngleDown />}

               </div>


                {dropdown && <div className= 'bg-white absolute right-10 top-28 z-10 w-[193px] rounded-3xl flex flex-col items-start justify-start'>
              
              {dropdownMenu.map((x)=>( <div onClick={()=>{navigate(x.link); setDropdown(false)}} role='button' className='flex items-center font-semibold gap-3 px-5 py-3 border-b-2 w-[193px] hover:bg-[#dbf0ff] hover:text-[#508ef7] hover:border-l-4 hover:border-l-[#377cf6]'> {x.icon} <span>{x.title}</span> </div>))}

                </div>}

                
            </div>

    </div>
    
  )
}

export default Header