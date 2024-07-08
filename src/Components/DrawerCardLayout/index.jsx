import { Card, Divider } from 'antd'
import React from 'react'

const DrawerCardLayout = ({heading, children}) => {
  return (
    <div className="flex justify-center my-10">

    <Card className="w-4/5 drawer-cards-shadow"
    style={{ borderRadius: '30px' }}>

      <div className="mx-5 my-5">
        <span className="text-base font-medium text-black">{heading}</span>

        <Divider />

      {children}

      </div>

    </Card>

      </div>
  )
}

export default DrawerCardLayout