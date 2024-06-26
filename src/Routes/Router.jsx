import { Route, Routes } from "react-router-dom";
import Transactions from "../Components/MainComponents/Transactions";
import Maneger from "../Components/Maneger";
import PaymentMethods from "../Components/MainComponents/PaymentMethods";
import SignInForm from "../Aurthority Pages/signInForm";
import SignUpForm from "../Aurthority Pages/signUpForm";
import ForgotPassword from "../Aurthority Pages/forgotPassword";
import SetPassword from "../Aurthority Pages/setPassword";
import ChangedPassword from "../Aurthority Pages/changedPassword";
import VerifiedCode from "../Aurthority Pages/verifiedCode";
import GovtPayments from "../Pages/GovtPayments";
import BillManagement from "../Pages/BillManagement";
import Dashboard from "../Pages/Dashboard";
import GovtPaymentTable from "../Components/Tables/govtPaymentTable";
import DepartmentNumber from "../Pages/GovtPayments/departmentNumber";
import MobileTopUp from "../Pages/MobileTopUp";

export default function Router() {
  return (
    <>
      <Routes>
        
        <Route element={<Maneger />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bill-management" element={<BillManagement />} />
          <Route path="/govt-payments" element={<GovtPayments/>} />
          <Route path="/mobile-top-up" element={<MobileTopUp/>} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/transactions" element={<Transactions/>} />
          <Route path="/add-no" element={<DepartmentNumber/>}/>
          <Route path ="/add-no/search-no" element={<GovtPaymentTable/>}/>
        </Route>





        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/changed-password" element={<ChangedPassword />} />
        <Route path="/verified-code" element={<VerifiedCode />} />
      
      </Routes>
    </>
  );
}
