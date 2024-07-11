
import { Button } from 'antd';
import React from 'react'
import BreadCrumbs from '../../UI/BreadCrumbs';
import FAQ from "./Faq";
import Tutorial from './Tutorial';
import {blueHelp} from '../../assets/image/index'
import { _BillingCondition } from '../../actions/Context/BillingOverviewConditions';


const Help = () => {
  const {helpMenu, setHelpMenu} = _BillingCondition();

 return (
        <>

        <BreadCrumbs icon = {blueHelp } menu={"Help"}/>

        <div>
        <Button
          className={`bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2 ${helpMenu === 1 ? "active-tab-button no-hover" : ""}`}
          style={{ borderRadius: "12px 0 0 12px" }}
          onClick={() => setHelpMenu(1)}
        >
          Overview
        </Button>

        <Button
          className={`bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2 ${helpMenu === 2 ? "active-tab-button no-hover" : ""}`}
          style={{ borderRadius: "0 12px 12px 0" }}
          onClick={() => setHelpMenu(2)}
        >
         Added Bills
        </Button>
        
      </div>

      {helpMenu === 1 ? <FAQ /> : <Tutorial />}

      {/* <Tabs type='card' defaultActiveKey="1" items={items} /> */}

      </>
    )
}

export default Help