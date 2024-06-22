import React from 'react'
import { Card1, Card2 } from '../../UI/Cards'
import DashboardLayout from '../DashboardLayout'
import BreadCrumbs from '../../UI/BreadCrumbs'

const Dashboard = () => {
  return (
    <DashboardLayout>

      <BreadCrumbs mainRoute={"Dashboard"} link={"/"} subRoute={"Bills"}/>

<Card1/>
<Card2/>

    </DashboardLayout>
  )
}

export default Dashboard