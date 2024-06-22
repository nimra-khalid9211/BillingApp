import React from 'react'
import LeftSideBar from './LeftSideBar'
import Header from './Header'

const DashboardLayout = ({children}) => {
  return (
    <div className='grid grid-cols-12 bg-[#F6F6F8]'>

    <div className='hidden md:block md:col-span-2 mr-5'>
    <LeftSideBar/>
    </div>

    <div className='col-span-12 md:col-span-10 m-4 px-4'>

    <Header/>

      <div>
        {children}
      </div>
    </div>
    
    </div>
  )
}

export default DashboardLayout