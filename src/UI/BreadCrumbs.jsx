import { Button, Divider } from 'antd'
import React from 'react'

const BreadCrumbs = ({icon, menu, subMenu, btnTitle1, btnTitle2, btnEvent1, btnEvent2}) => {
  return (

    <div className='my-8'>

      <div className='flex justify-between items-center'>

    <div className='flex items-center m'>
    <span className='text-[#009EF7]'>{icon}</span> &nbsp;   {/* static for now will dynamic it when icons for all menu items change */}

    <b className='text-[#009EF7]'>{menu}</b> &nbsp;

    { subMenu && <span className='text-[#6C7293]'>/</span>} &nbsp;

    <b className='text-[#6C7293]'>{subMenu}</b>

    </div>

    <div>

       {btnTitle1 && 

       <Button className='mr-5 border-[#377CF6] text-[#377CF6]' shape='round' onClick={btnEvent1}>
        {btnTitle1}
        </Button>}

       {btnTitle2 && 
       
       <Button className='mr-5 bg-[#377CF6] text-white' shape='round' onClick={btnEvent2}>
        {btnTitle2}
        </Button>}
        
      </div> 

    </div>

    <Divider className='mt-0 w-full'/>

    </div>
  )
}

export default BreadCrumbs