import React from 'react'
import Security from './Security';
import Appearance from './Appearance';
import Notifications from './Notifications';
import { CiSettings } from 'react-icons/ci';
import { Tabs } from 'antd';
import BreadCrumbs from '../../UI/BreadCrumbs';
import {blueSetting} from '../../assets/image/index'

const Settings = () => {
  const items = [
    {
      key: '1',
      label: "Security",
      children: <div> <Security/> </div>,
    },
    {
      key: '2',
      label: 'Appearance',
      children: <div> <Appearance /> </div>,
    },
  {
    key: '3',
    label: 'Notifications',
    children: <div> <Notifications /> </div>,
  }
];

 return (
        <>

        <BreadCrumbs icon = {blueSetting } menu={"Settings"}/>

      <Tabs type='card' defaultActiveKey="1" items={items} />

      </>
    )
}

export default Settings