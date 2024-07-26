import { Button } from "antd";
import CardLayout from "../../Components/CardLayout";
import Security from "../Settings/Security";
import BreadCrumbs from "../../UI/BreadCrumbs";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";
import { blueSetting } from "../../assets/image";
import ViewNotification from "./viewNotification";
import { FaCheckDouble } from "react-icons/fa";

export default function Notifications() {
    const {settingMenu, setSettingMenu} = _BillingCondition();
  return (
    <>
    
    <BreadCrumbs icon={blueSetting} menu={"Settings"} />

    <CardLayout title={"Notifications"} from="nonEdit">

    <div className="flex items-center justify-between mb-10">

    <div>
        <Button
          className={`bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2 ${
            settingMenu === 1 ? "active-tab-button no-hover" : ""
          }`}
          style={{ borderRadius: "12px 0 0 12px" }}
          onClick={() => setSettingMenu(1)}
        >
          All(36)
        </Button>

        <Button
          className={`bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2 ${
            settingMenu === 2 ? "active-tab-button no-hover" : ""
          }`}
          style={{ borderRadius: "0 12px 12px 0" }}
          onClick={() => setSettingMenu(2)}
        >
         Unread(06)
        </Button>
    </div>

    <div className="flex items-center text-[#176BA3] bg-[#DBF0FF] py-2 px-5 rounded-2xl">
              <span className="">
                <FaCheckDouble size={10} />
              </span>
              <div className="ml-1 cursor-pointer text-xs medium">
                Mark All as Read
              </div>
    </div>

    </div>

      {settingMenu === 1 ? <ViewNotification/> :  settingMenu === 2 ? <ViewNotification /> : ""}

    </CardLayout>

    </>
  );
}
