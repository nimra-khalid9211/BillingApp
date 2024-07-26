
import { Button } from 'antd';
import React from 'react'
import BreadCrumbs from '../../UI/BreadCrumbs';
import FAQ from "./Faq";
import Tutorial from './Tutorial';
import {blueHelp} from '../../assets/image/index'
import { _BillingCondition } from '../../actions/Context/BillingOverviewConditions';
import Ticket from './Ticket';
import Faq from './Faq';
import Contact from './Contact';

const Help = () => {
  const {helpMenu, setHelpMenu} = _BillingCondition();
  
  const buttons = [
    {
      buttonName: "Tickets",
      borderRadius:"12px 0 0 12px",
      onclick: () => setHelpMenu(1),
      classes: `bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2 ${helpMenu === 1 ? "active-tab-button no-hover" : ""}`
    },
    {
      buttonName: "FAQ's",
      borderRadius:"0 0 0 0",
      onclick: () => setHelpMenu(2),
      classes: `bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2 ${helpMenu === 2 ? "active-tab-button no-hover" : ""}`
    },
    {
      buttonName: "Tutorial",
      borderRadius:"0 0 0 0",
      onclick: () => setHelpMenu(3),
      classes: `bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2 ${helpMenu === 3 ? "active-tab-button no-hover" : ""}`
    },
    {
      buttonName: "Contact",
      borderRadius:"0 12px 12px 0",
      onclick: () => setHelpMenu(4),
      classes: `bg-[#E8E7EC] custom-tab-button text-sm font-medium py-2 ${helpMenu === 4 ? "active-tab-button no-hover" : ""}`
    },
  ]

  1

 return (
        <>

        <BreadCrumbs icon = {blueHelp } menu={"Help"} link={"/help"} 
        subMenu={
          helpMenu === 1 ? "Tickets": 
          helpMenu === 2 ? "FAQ's": 
          helpMenu === 3 ? "Tutorial": 
          helpMenu === 4 ? "Contact": ""
          }/>

        <div>

       {buttons.map((x, index)=>( 
        <Button
          className={x.classes}
          style={{ borderRadius: x.borderRadius }}
          onClick={x.onclick}
        >
         {x.buttonName}
        </Button>))}

      </div>

      {
      helpMenu === 1 ? <Ticket /> : helpMenu === 2 ? <Faq/>
      : helpMenu === 3 ? <Tutorial /> : helpMenu === 4 ? <Contact /> : "nothing"
      }

      {/* <Tabs type='card' defaultActiveKey="1" items={items} /> */}

      </>
    )
}

export default Help