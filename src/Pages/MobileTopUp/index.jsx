import MobileTopUpTable from "../../Components/Tables/MobileTopUpTable";
import BreadCrumbs from "../../UI/BreadCrumbs";
import AddDetails from "./addDetails";
import { useState } from "react";

export default function MobileTopUp() {

  const [addNumber, setAddNumber] = useState(false);

  return (
    <>
      <BreadCrumbs
        menu="Mobile Top Up"
        btnTitle2={"Add Number"}
        customClass2="hover-color"
        customStyle={"9rem"}
        btnEvent2={() => setAddNumber(true)}
      />
      <MobileTopUpTable />
      <AddDetails addNumber={addNumber} setAddNumber={setAddNumber} />

    </>
  );
}
