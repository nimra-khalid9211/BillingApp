import React from 'react'
import LeftSideBar from './LeftSideBar'
import Header from './Header'

const DashboardLayout = ({children}) => {
return (
    <div className='grid grid-cols-12 bg-[#F6F6F8]'>
    <div className='hidden md:block md:col-span-2'>
    <LeftSideBar/>
    </div>
<<<<<<< HEAD
    <div className='col-span-12 md:col-span-10 p-10'>
=======

    <div className='col-span-12 md:col-span-10 m-4 px-4'>

>>>>>>> billingManagement
    <Header/>
      <div>
        {children}
      </div>
    </div>
    </div>
  )
}

export default DashboardLayout