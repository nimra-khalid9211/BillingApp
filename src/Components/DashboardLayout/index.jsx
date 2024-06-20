import React from 'react'
import LeftSideBar from './LeftSideBar'

const DashboardLayout = ({children}) => {
  return (
    <div className='grid grid-cols-12'>

    <div className='hidden md:block md:col-span-2 mr-2'>
    <LeftSideBar/>
    </div>

    <div className='md:col-span-10'>
      {children}
    </div>
    
    </div>
  )
}

export default DashboardLayout