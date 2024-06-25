import React, { useState } from 'react'
import { Tabs } from 'antd';
import { _BillingCondition } from '../../actions/Context/BillingOverviewConditions';
import SelectedBills from './SelectedBills';
import { SelectableBills } from '../../Components/Tables/SelectableBills';

const items = [
  {
    key: '1',
    label: 'All',
    children: <SelectableBills type="all"/>,
  },
  {
    key: '2',
    label: 'Electricity',
    children: <SelectableBills type="electricity"/>,
  },
  {
    key: '3',
    label: 'Gas',
    children: <SelectableBills type="gas"/>,
  },
  {
    key: '4',
    label: 'Water',
    children: <SelectableBills type="water"/>,
  },
  {
    key: '5',
    label: 'Internet',
    children: <SelectableBills type="internet"/>,
  },
];

const BillingOverview = () => {
  
const {tab} = _BillingCondition();

  return (
    <>

   {tab ? <Tabs className='text-base font-medium mt-6' defaultActiveKey="1" items={items}  /> : <SelectedBills/>}

    </>
  )
}
    

export default BillingOverview