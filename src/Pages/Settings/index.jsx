import React from 'react'
import Security from './Security';
import Appearance from './Appearance';
import Notifications from './Notifications';
import { CiSettings } from 'react-icons/ci';
import { Button, Tabs } from 'antd';
import BreadCrumbs from '../../UI/BreadCrumbs';
import {blueSetting} from '../../assets/image/index'
import { _BillingCondition } from '../../actions/Context/BillingOverviewConditions';

const Settings = () => {

  const {settingMenu, setSettingMenu} = _BillingCondition();

 return (
        <>

        <BreadCrumbs icon = {blueSetting } menu={"Settings"}/>

        <div>
        <Button
          className={`bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2 ${settingMenu === 1 ? "active-tab-button no-hover" : ""}`}
          style={{ borderRadius: "12px 0 0 12px" }}
          onClick={() => setSettingMenu(1)}
        >
          Security
        </Button>

        <Button
          className={`bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2 ${settingMenu === 2 ? "active-tab-button no-hover" : ""}`}
          style={{ borderRadius: "0" }}
          onClick={() => setSettingMenu(2)}
        >
        Appearance
        </Button>

        <Button
          className={`bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2 ${settingMenu === 3 ? "active-tab-button no-hover" : ""}`}
          style={{ borderRadius: "0 12px 12px 0" }}
          onClick={() => setSettingMenu(3)}
        >
        Notifications
        </Button>
        
      </div>

      {settingMenu === 1 ? <Security/> : settingMenu === 2 ? <Appearance /> : settingMenu === 3 ? <Notifications /> : ""}

      </>
    )
}

export default Settings