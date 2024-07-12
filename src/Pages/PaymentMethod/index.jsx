import { Button } from "antd";
import BreadCrumbs from "../../UI/BreadCrumbs";
import UserMultipleAccount from "./UserMultipleAccount";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import {bluePayment} from '../../assets/image/index'

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
