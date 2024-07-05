import React from 'react'
import LeftSideBar from './LeftSideBar'
import Header from './Header'
import { Col, Row } from 'antd'

const DashboardLayout = ({children}) => {
return (

    <Row style={{ minHeight: "100vh" }} className='bg-[#F6F6F8]'>
    <Col md={4} xs={0} className="fixedColumn leftColumn rounded-r-[50px] z-10 left-sidebar-shadow">
      <LeftSideBar />
    </Col>
    <Col md={20} xs={24} className="centerColumn">
      <Header />
      <div className="p-3"> {children}</div>
    </Col>
  </Row>

  )
}

export default DashboardLayout