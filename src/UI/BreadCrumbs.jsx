import React from 'react'
import { AiOutlineAppstore } from 'react-icons/ai'

const BreadCrumbs = ({menu, subMenu}) => {
  return (
    <div className='flex items-center'>
    <span className='text-[#009EF7]'><AiOutlineAppstore /></span> &nbsp;   {/* static for now will dynamic it when icons for all menu items change */}

    <b className='text-[#009EF7]'>{menu}</b> &nbsp;
    <span className='text-[#6C7293]'>/</span> &nbsp;
    <b className='text-[#6C7293]'>{subMenu}</b>
   
    </div>
  )
}

export default BreadCrumbs