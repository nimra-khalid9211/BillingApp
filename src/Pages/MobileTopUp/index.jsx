import MobileTopUpBeneficiary from "../../Components/CardsUI/mobileTopUpBeneficiary";
import MobileTopUpTable from "../../Components/Tables/MobileTopUpTable";
import BreadCrumbs from "../../UI/BreadCrumbs";
import RechangeAccount from "./rechangeAccount";

export default function MobileTopUp(){
    return(
        <>
        <BreadCrumbs menu="Mobile Top UP"/>
        {/* <MobileTopUpTable/> */}
        <RechangeAccount/>
        <MobileTopUpBeneficiary/>
        </>
    )
}
