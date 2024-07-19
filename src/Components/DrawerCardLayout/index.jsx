import { Card, Divider } from 'antd'
import React from 'react'

const DrawerCardLayout = ({heading, height, from, children}) => {
  return (
    <div className="flex justify-center my-5">

    <Card className="w-[54rem] drop-shadow-xl rounded-3xl"
    style={{ height: height }}> 
     {/* borderRadius: '30px', */}

      <div className="mx-5 my-5">
        <span className="text-base font-semibold text-black">{heading}</span>

     { from !== "secondDrawer" &&  <Divider />}

      {children}

      </div>

    </Card>

      </div>
  )
}

export default DrawerCardLayout