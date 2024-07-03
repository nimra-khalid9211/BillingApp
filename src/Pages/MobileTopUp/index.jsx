
import { Button } from "antd";
import MobileTopUpTable from "../../Components/Tables/MobileTopUpTable";
import BreadCrumbs from "../../UI/BreadCrumbs";
import AddDetails from "./addDetails";
import { useState } from "react";
import { TbDeviceMobileUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function MobileTopUp(){
    const navigate = useNavigate();

    const [addNumber, setAddNumber] = useState(false);

    return(
        <>
        {/* <div className="flex justify-between items-center"> */}

        <BreadCrumbs menu="Mobile Top UP" icon={<TbDeviceMobileUp />} btnTitle2={"Add Number"} 
        btnEvent2={()=>setAddNumber(true)}/>

        {/* <Button type="primary" shape="round" onClick={() => setAddNumber(true)}>
         + Add Numbers
        </Button>
        </div> */}
        <MobileTopUpTable/>
        <AddDetails addNumber={addNumber} setAddNumber={setAddNumber} />
        </>
    )
}
