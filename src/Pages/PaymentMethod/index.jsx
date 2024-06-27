import { Button } from "antd";
import BreadCrumbs from "../../UI/BreadCrumbs";
import UserMultipleAccount from "./UserMultipleAccount";

export default function PaymentMethod() {
  return (
    <>
      <div className="flex justify-between">
        <BreadCrumbs menu={"Payment Method"} />
        <Button type="primary" shape="round">
         + Add Payment
        </Button>
      </div>
      <UserMultipleAccount />
    </>
  );
}
