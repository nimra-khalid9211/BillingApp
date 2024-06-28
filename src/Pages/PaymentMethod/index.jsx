import { Button } from "antd";
import BreadCrumbs from "../../UI/BreadCrumbs";
import UserMultipleAccount from "./UserMultipleAccount";
import { Link } from "react-router-dom";

export default function PaymentMethod() {
  return (
    <>
      <div className="flex justify-between">
        <BreadCrumbs menu={"Payment Method"} />
        <Link to="add-payment">
        <Button type="primary" shape="round">
         + Add Payment
        </Button>
        </Link>
      </div>
      <UserMultipleAccount />
    </>
  );
}
