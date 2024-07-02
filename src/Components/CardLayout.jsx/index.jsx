import { Card } from 'antd'
import React from 'react'

const CardLayout = ({children}) => {
  return (

    <Card className='rounded-3xl mt-3'>
    <div className='bg-[#377CF6] rounded-tl-3xl rounded-tr-3xl py-2 pl-6
     text-lg font-medium text-[#FFFFFF]'>
        Tutorial
        </div>

        <div className='mx-7 my-10'>
            
        {children}

        </div>
   
  </Card>
  )
}

export default CardLayout