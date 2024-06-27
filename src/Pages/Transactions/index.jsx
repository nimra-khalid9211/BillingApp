import { Radio, Tabs } from 'antd'
import React, { useState } from 'react'
import TransactionRecord from '../../Components/Tables/TransactionRecord';

const items = [
    {
      key: '1',
      label: 'All Transactions',
      children: <TransactionRecord type="all"/>,
    },
    {
      key: '2',
      label: 'Electricity',
    //   children: <SelectableBills type="electricity"/>,
    },
    {
      key: '3',
      label: 'Gas',
    //   children: <SelectableBills type="gas"/>,
    },
    {
      key: '4',
      label: 'Water',
    //   children: <SelectableBills type="water"/>,
    },
    {
      key: '5',
      label: 'Internet',
    //   children: <SelectableBills type="internet"/>,
    },
  ];

const Transactions = () => {
  
  const [activeTab, setActiveTab] = useState("1");

  const handleChange = (key) => {
    setActiveTab(key);
  };

  // console.log(activeTab)

  return (
    <>
   <Tabs
      activeKey={activeTab}
      onChange={handleChange}
      tabBarStyle={{ color: 'white' }} 
      // tabBarActiveTextColor="white" // Optional: Set active tab text color
      // tabBarInactiveTextColor="#000000" 
    type="card"
    items={items}
  />
    </>
  )
}

export default Transactions