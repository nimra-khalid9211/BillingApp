import React, { useState } from 'react'
import menuList from './menuList'
import { Link, useLocation } from 'react-router-dom'

const LeftSideBar = () => {

  const path = useLocation().pathname

  return (

  <div className= 'rounded-r-2xl left-sidebar-shadow' style={{ height:"100vh"}}>


    <h1 className='text-center pt-5'>logo</h1>

    <section>
        {menuList.map((item, index)=>(
            <div key={index} className='px-4 pt-12 text-lg'>

                <ul>

                    <div>
                        {/* className='flex items-center gap-4' */}

                {item.icon && item.icon}
              <span> {item.name} </span> 

                </div>

                {item.lists?.map((x,index)=>(

                  <Link to={x.link} key={index}>
                    <div className={`flex items-center gap-3 px-3 font-medium text-[#6C7293] py-2 mx-3 my-6 ${x.classses && x.classses} hover:bg-[#377CF6] hover:text-white rounded-lg ${x.link === path ? "bg-[#377CF6] text-white": ""}`}>
                      
                        {x.icon}
                        {x.title}

                    </div>
                    </Link>
                ))}

                </ul>

            </div>
        ))}
    </section>

  </div>

  )
}

export default LeftSideBar


