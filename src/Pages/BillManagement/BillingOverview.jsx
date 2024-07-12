import React, { useState } from 'react'
import { Menu, Tabs } from 'antd';
import { _BillingCondition } from '../../actions/Context/BillingOverviewConditions';
import { SelectableBills } from '../../Components/Tables/SelectableBills';
import TransactionRecord from '../../Components/Tables/TransactionRecord';

const items = [
  {
    label: 'All Bills',
    key: 'all',
  },
  {
    label: 'Electricity',
    key: 'electricity',
  },
  {
    label: 'Gas',
    key: 'gas',
  },
  {
    label: 'Water',
    key: 'water',
  },
  {
    label: 'Internet',
    key: 'internet',
  },
];


const BillingOverview = () => {

const [current, setCurrent] = useState('all');

const onClick = (e) => {
  // console.log('click ', e);
  setCurrent(e.key);
};

const renderContent = () => {
  switch (current) {
    case 'all':
      return  <SelectableBills type="all"/>;
    case 'electricity':
      return <TransactionRecord type="electricity" from="billingOverview"/>;
    case 'gas':
      return <TransactionRecord type="gas" from="billingOverview"/>;
    case 'water':
      return <TransactionRecord type="water" from="billingOverview"/>;
    case 'internet':
      return  <TransactionRecord type="internet" from="billingOverview"/>;
    default:
      return <div>Select a menu item</div>;
  }
};

  return (
    <>

<div className='mt-10'>
      <Menu onClick={onClick} selectedKeys={[current]}
       className='custom-menu text-base font-medium my-4'
       mode="horizontal" 
       items={items} />
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>

    </>
  )
}
    

export default BillingOverview