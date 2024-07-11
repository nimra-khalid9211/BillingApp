import React, { useEffect, useState } from 'react'
import LeftSideBar from './LeftSideBar'
import Header from './Header'
import { Col, Row } from 'antd'

const DashboardLayout = ({children}) => {

  const [headerBg, setHeaderBg] = useState(false);

  const handleScroll = () =>{
    if(window.scrollY > 0){
      setHeaderBg(true);
    }else{
      setHeaderBg(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return () =>{
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

return (

    <Row style={{ minHeight: "100vh" }} className='bg-[#F6F6F8]'>
    <Col md={4} xs={0} className="fixedColumn leftColumn rounded-r-[50px] bg-white z-10 left-sidebar-shadow">
      <LeftSideBar />
    </Col>
    <Col md={20} xs={24} className="centerColumn">

    <div className={`sticky top-0 z-40 ${headerBg ? 'bg-white drop-shadow-lg p-2' : '' }`}>
    <Header />
    </div>
    
      <div className="p-3"> {children}</div>
    </Col>
  </Row>

  )
}

export default DashboardLayout