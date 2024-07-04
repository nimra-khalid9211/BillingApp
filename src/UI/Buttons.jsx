import { Button } from 'antd'
import React from 'react'
import { IoMdAdd } from 'react-icons/io'

export const WhiteButton = ({title, clickEvent}) => {
  return (
    <Button shape='round' className='btn-custom-padding mr-3 text-[#6C7293]' 
    onClick={clickEvent}> 

    {title} 

    </Button>
  )
}

export const BlueButton = ({title, clickEvent, icon}) => {
    return (
      <Button shape='round' className='btn-custom-padding bg-[#377CF6] text-white' 
      onClick={clickEvent}>
        {icon}
         {title} 
      
      </Button>
    )
  }


  export const LargeButtons = ({title, clickEvent, icon}) => {
    return (
      <Button shape='round' icon={<IoMdAdd size={20}/>}  className='btn-custom-style border-[#377CF6] text-base font-bold text-[#377CF6] ' 
      onClick={clickEvent}>
        {icon}
         {title} 
      
      </Button>
    )
  }
