
import BreadCrumbs from "../../UI/BreadCrumbs";
import UserMultipleAccount from "./UserMultipleAccount";
import { useNavigate } from "react-router-dom";

export default function PaymentMethods() {
  const navigate = useNavigate();

  return (
    <>

        <BreadCrumbs menu={"Payment Method"} 
        btnTitle2={"Add Payment Method"} customClass2={"hover-color"} customStyle={"13rem"} btnEvent2={()=> {
            localStorage.removeItem('paymentType')
            navigate("/payment-methods/add-payment")
        }}
        />
      <UserMultipleAccount />
    </>
  );
}
