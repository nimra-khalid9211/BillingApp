import MobileTopUpAmountRecharge from "../../Components/CardsUI/MobileTopUpCards/mobileTopUpAmountRecharge";
import MobileTopUpBeneficiary from "../../Components/CardsUI/MobileTopUpCards/mobileTopUpBeneficiary";
import RechangeAccount from "./rechangeAccount";

export default function ChangeAccount(){
return(
    <>

        <RechangeAccount/>
        <div className="flex">
        <MobileTopUpBeneficiary/>
        <MobileTopUpAmountRecharge/>
        </div> 
    </>
)
}