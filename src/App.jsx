import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BillManagement from './Components/MainComponents/BillManagement'
import Dashboard from './Components/MainComponents/Dashboard'
import GovtPayments from './Components/MainComponents/GovtPayments'
import MobileTopUp from './Components/MainComponents/MobileTopUp'
import PaymentMethods from './Components/MainComponents/PaymentMethods'
import Transactions from './Components/MainComponents/Transactions'

const App = () => {
  return (
    <>

      <Routes>


          <Route path='/' element={<Dashboard/>}/>
          <Route path='/bill-management' element={<BillManagement/>}/>
          <Route path='/govt-payments' element={<GovtPayments/>}/>
          <Route path='/mobile-top-up' element={<MobileTopUp/>}/>
          <Route path='/payment-methods' element={<PaymentMethods/>}/>
          <Route path='/transactions' element={<Transactions/>}/>

        </Routes>

    </>
  )
}

export default App