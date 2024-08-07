import { Button } from 'antd'
import React from 'react'
import { IoMdAdd } from 'react-icons/io'

export const WhiteButton = ({title,icon, clickEvent ,customClass, customStyle,customFont}) => {

  
  return (
    <Button 
    shape='round' 
    className={`btn-custom-padding mr-3 border-[#F58021] text-[#6C7293] ${customClass}`} 
    onClick={clickEvent} style={{width:customStyle, fontSize:customFont}} >
    {icon}
    {title}
  </Button>
  )
}

export const BlueButton = ({title, clickEvent, icon, customClass, customStyle}) => {
    return (
      <Button shape='round'className={`btn-custom-padding text-white ${customClass}`} 
      onClick={clickEvent} style={{width:customStyle}} >
        {icon}
         {title} 
      
      </Button>
    )
  }

  export const LargeButtons = ({title, clickEvent, icon,}) => {
    return (
      <Button shape='round' icon={<IoMdAdd size={20}/>}  className='btn-custom-style border-[#377CF6] text-base font-bold text-[#377CF6] ' 
      onClick={clickEvent}>
        {icon}
         {title} 
      
      </Button>
    )
  }
