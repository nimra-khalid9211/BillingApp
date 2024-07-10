import { Button } from "antd";
import MobileTopUpTable from "../../Components/Tables/MobileTopUpTable";
import BreadCrumbs from "../../UI/BreadCrumbs";
import AddDetails from "./addDetails";
import { useState } from "react";
import { TbDeviceMobileUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import {blueMobile} from '../../assets/image/index'

export default function MobileTopUp() {
  const navigate = useNavigate();

  const [addNumber, setAddNumber] = useState(false);

  return (
    <div className="">
      <BreadCrumbs
        menu="Mobile Top UP"
        icon={blueMobile}
        btnTitle2={"Add Number"}
        btnEvent2={() => setAddNumber(true)}
      />
      <MobileTopUpTable />
      <AddDetails addNumber={addNumber} setAddNumber={setAddNumber} />
    </div>
  );
}
