import { Card } from 'antd'
import React from 'react'
import { BlueButton } from '../../UI/Buttons'
import { Link } from 'react-router-dom'



const CardLayout = ({children, title, from, height, linkTitle, onClick}) => {
  return (

    <>
    <Card className={`rounded-3xl mt-3 ${height}`}>

    <div className="drop-shadow-xl flex justify-between items-center rounded-t-3xl text-[var(--blue)] bg-white font-medium text-lg p-3 px-6">
        {title}

        <span onClick={onClick} className='cursor-pointer text-sm  hover:underline'>{linkTitle}</span>
      </div>

        <div className=''>
            
        {children}

        </div>
   
  </Card>

  {from !=="nonEdit" && <div className='text-end m-10'>
    <BlueButton customClass={"hover-color"}  title={"Save Changes"}/>
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