
import { Tabs } from 'antd';
import React from 'react'
import { MdContactSupport } from 'react-icons/md';
import BreadCrumbs from '../../UI/BreadCrumbs';
import FAQ from "./Faq";
import Tutorial from './Tutorial';
import {blueHelp} from '../../assets/image/index'

const items = [
    {
      key: '1',
      label: "FAQ's",
      children: <div> <FAQ /> </div>,
    },
    {
      key: '2',
      label: 'Tutorial',
      children: <div> <Tutorial /> </div>,
    }
  ];

const Help = () => {
 return (
        <>

        <BreadCrumbs icon = {blueHelp } menu={"Help"}/>

      <Tabs type='card' defaultActiveKey="1" items={items} />

      </>
    )
}

export default Help