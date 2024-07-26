import { Card, Divider } from 'antd'
import React from 'react'

const DrawerCardLayout = ({heading, height, from, children,  }) => {
  return (
    <div className="flex justify-center my-10">

    <Card className="w-[54rem] shadow-for-all rounded-3xl"
   > 
     {/* borderRadius: '30px', */}

      <div className="mx-5 my-5" >
        <span className="text-base medium text-black">{heading}</span>

     { from !== "secondDrawer" &&  <Divider />}


      <div style={{ height: height }}>

      {children}

      </div>

      </div>

    </Card>

      </div>
  )
}

export default DrawerCardLayout