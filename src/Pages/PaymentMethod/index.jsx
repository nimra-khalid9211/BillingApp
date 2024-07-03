import { Button } from "antd";
import BreadCrumbs from "../../UI/BreadCrumbs";
import UserMultipleAccount from "./UserMultipleAccount";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";

export default function PaymentMethods() {
  const navigate = useNavigate();

  return (
    <>
      {/* <div className="flex justify-between"> */}

        <BreadCrumbs icon={<MdOutlinePayment />} menu={"Payment Method"} 
        btnTitle2={"Add Payment"} btnEvent2={()=>navigate("/payment-methods/add-payment")}
        />

        {/* <Link to="add-payment"> */}
        {/* <Button type="primary" shape="round"> */}
         {/* + Add Payment */}
        {/* </Button> */}
        {/* </Link> */}
      {/* </div> */}
      <UserMultipleAccount />
    </>
  );
}
