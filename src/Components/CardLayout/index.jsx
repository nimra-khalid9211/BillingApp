import { Card } from 'antd'
import React from 'react'
import { BlueButton } from '../../UI/Buttons'

// import '../.././assets/fonts/Excon_Complete/Fonts/WEB/css/excon.css'
import '../../assets/fonts/Excon_Complete/Fonts/WEB/css/excon.css'



const CardLayout = ({children, title, from}) => {
  return (

    <>
    <Card className='rounded-3xl mt-3 min-h-72'>
    <div className='bg-[#377CF6] rounded-tl-3xl rounded-tr-3xl py-2 pl-6
     text-lg font-medium text-[#FFFFFF]'>
        {title}
        </div>

        <div className='mx-7 my-10'>
            
        {children}

        </div>
   
  </Card>

  {from !=="nonEdit" && <div className='text-end m-10'>
    <BlueButton  title={"Save Changes"}/>
  </div>}

  </>
  )
}

export default CardLayout


export const StepCard = ({children, title}) =>{

  return (
    <Card className='h-[524px]'>
      <div className='m-5 pb-2 border-b-2 text-lg font-medium'>{title}</div>


      {children}
      </Card>
  )
}