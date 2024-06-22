import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GovtPayments from './Components/MainComponents/GovtPayments'
import MobileTopUp from './Components/MainComponents/MobileTopUp'
import PaymentMethods from './Components/MainComponents/PaymentMethods'
import Transactions from './Components/MainComponents/Transactions'
import RightSider from './Pages/rightSider'
import SignInForm from './Aurthority Pages/signInForm'
import SignUpForm from './Aurthority Pages/signUpForm'
import ForgotPassword from './Aurthority Pages/forgotPassword'
import SetPassword from './Aurthority Pages/setPassword'
import ChangedPassword from './Aurthority Pages/changedPassword'
import VerifiedCode from './Aurthority Pages/verifiedCode'
import BillManagement from './Components/MainComponents/BillManagement'




const App = () => {
  return (
    <>

      <Routes>
          <Route path='/' element={<RightSider/>}/>
          <Route path='/bill-management' element={<BillManagement/>}/>
          <Route path='/govt-payments' element={<GovtPayments/>}/>
          <Route path='/mobile-top-up' element={<MobileTopUp/>}/>
          <Route path='/payment-methods' element={<PaymentMethods/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/sign-in' element={<SignInForm/>}/>
          <Route path='/sign-up' element={<SignUpForm/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/set-password' element={<SetPassword/>}/>
          <Route path='/changed-password' element={<ChangedPassword/>}/>
          <Route path='/verified-code' element={<VerifiedCode/>}/>


        </Routes>

    </>
  )
}

export default App