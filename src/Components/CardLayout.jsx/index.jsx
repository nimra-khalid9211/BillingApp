import { Card } from 'antd'
import React from 'react'
import { BlueButton } from '../../UI/Buttons'

const CardLayout = ({children, title}) => {
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

  <div className='text-end m-10'>
    <BlueButton  title={"Save Changes"}/>
  </div>

  </>
  )
}

export default CardLayout