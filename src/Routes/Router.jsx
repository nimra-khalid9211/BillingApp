import { Route, Routes } from "react-router-dom";
import Maneger from "../Components/Maneger";
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
import SelectedBills from "../Pages/BillManagement/SelectedBills";
import ChangeAccount from "../Pages/MobileTopUp/changeAccount";
import Receipt from "../Pages/MobileTopUp/receipt";
import Transactions from "../Pages/Transactions";
import PaymentMethod from "../Pages/PaymentMethod";
import AddPayment from "../Pages/PaymentMethod/addPayment";
import BillPaymentMethod from "../Pages/BillManagement/BillPaymentMethod";
import Settings from "../Pages/Settings";
import Help from "../Pages/Help";

export default function Router() {
  return (
    <>
      <Routes>

        <Route element={<Maneger />}>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bill-management" element={<BillManagement />} />
          <Route path="/bill-management/selected-bills" element={<SelectedBills />}/>
          <Route path="/bill-management/payment-method" element={<BillPaymentMethod />}/>
          <Route path="/govt-payments" element={<GovtPayments />} />
          <Route path="/mobile-top-up" element={<MobileTopUp />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/add-no" element={<DepartmentNumber />} />
          <Route path="/add-no/search-no" element={<GovtPaymentTable />} />
          <Route path="/mobile-top-up/changing-account" element={<ChangeAccount />} />
          <Route path="/mobile-top-up/changing-account/successfull" element={<Receipt />}/>
          <Route path="/payment-methods" element={<PaymentMethod />}/>
          
        

          <Route path="/payment-methods" element={<PaymentMethod />}/>

          <Route path="/payment-methods/add-payment" element={<AddPayment />}/>

          <Route path="/settings" element={<Settings/>} />
          
          <Route path="/help" element={<Help/>} />

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
