import React from 'react'
<<<<<<< HEAD
import RightSider from '../../Pages/rightSider'
=======
import { Card1, Card2 } from '../../UI/Cards'
import DashboardLayout from '../DashboardLayout'
import BreadCrumbs from '../../UI/BreadCrumbs'
>>>>>>> billingManagement

export default function Dashboard ()  {
  return (
<<<<<<< HEAD
  
  <div><RightSider/></div>
=======
    <DashboardLayout>

      <BreadCrumbs mainRoute={"Dashboard"} link={"/"} subRoute={"Bills"}/>

<Card1/>
<Card2/>

    </DashboardLayout>
>>>>>>> billingManagement
  )
}
