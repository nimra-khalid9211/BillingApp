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
      label: 'Master Card',
      children: <TransactionRecord type="master" from="transactions"/>,
    },
    {
      key: '3',
      label: 'Visa Card',
      children: <TransactionRecord type="visa" from="transactions"/>,
    },
    {
      key: '4',
      label: 'JazzCash',
      children: <TransactionRecord type="jazzCash" from="transactions"/>,
    },
    {
      key: '5',
      label: 'EasyPaisa',
      children: <TransactionRecord type="easyPaisa" from="transactions"/>,
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
      // activeKey={activeTab}
      onChange={handleChange}
      type="card"
      items={items}
  />
    </>
  )
}

export default Transactions