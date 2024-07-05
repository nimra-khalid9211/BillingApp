import { Avatar, Badge, Dropdown, Menu } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { CiSettings } from 'react-icons/ci'
import { FaAngleDown, FaAngleUp, FaRegBell, FaRegUser } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
import { LuCalendarDays } from 'react-icons/lu'
import { RiLogoutBoxLine, RiUserLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { _BillingCondition } from '../../actions/Context/BillingOverviewConditions'

const dropdownMenus = [
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

const dropdownMenu = (
  <Menu>

    {dropdownMenus.map((x, index)=>(
    <Menu.Item key={index} icon={x.icon}>
      <Link to={x.link}>{x.title}</Link>
    </Menu.Item>
    ))}
   
  </Menu>
);

const Header = () => {
  const navigate = useNavigate();

  const {dropdown, setDropdown} = _BillingCondition();

  const date = Date().slice(0,15);
  return (

    <div className='flex items-center justify-between mx-3  mt-5'>
            <b className='text-2xl'>Welcome, Shaun Abbott</b>

            <div className='flex justify-between items-center gap-3'>

                {/* <div className='bg-white p-2 rounded-full'>
                <IoSearchOutline size={20}/>
                </div> */}

                <div className='bg-white py-3 px-3 rounded-full flex gap-3'>
                <LuCalendarDays size={20} color='#377CF6' /> <b className='text-sm border-l border-[#6C7293] pl-2'>{date}</b>
                </div>

                <div className='bg-white py-3 px-3 rounded-full gap-3'>
                 <CiSettings size={20} onClick={()=>navigate("/settings")} role='button'/>
                </div>

                <div className='bg-white py-3 px-3 flex items-center rounded-full gap-3'>
                <Badge dot color='#377CF6'>  <FaRegBell size={18}/> </Badge>
                </div>

          <Dropdown
          overlay={dropdownMenu}
          trigger={['click']}
          // onVisibleChange={(visible) => setDropdown(visible)} 
          >

          <div
            role='button'
            className={`bg-white p-1 relative flex items-center justify-start rounded-full gap-3`}>

            <Avatar size={34} icon={<FaRegUser />} />

            <div className='flex flex-col'>
              <b className='text-sm' style={{ lineHeight: "0.7rem" }}>Shaun Abbott</b>
            </div>

            {dropdown ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </Dropdown>

            </div>

    </div>
    
  )
}

export default Header