
import { Button } from "antd";
import MobileTopUpTable from "../../Components/Tables/MobileTopUpTable";
import BreadCrumbs from "../../UI/BreadCrumbs";
import AddDetails from "./addDetails";
import { useState } from "react";

export default function MobileTopUp(){
    const [addNumber, setAddNumber] = useState(false);
    return(
        <>
        <div className="flex justify-between items-center">
        <BreadCrumbs menu="Mobile Top UP"/>
        <Button type="primary" shape="round" onClick={() => setAddNumber(true)}>
         + Add Numbers
        </Button>
        </div>
        <MobileTopUpTable/>
        <AddDetails addNumber={addNumber} setAddNumber={setAddNumber} />
        </>
    )
}
