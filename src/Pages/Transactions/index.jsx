import { Input, Radio, Tabs } from 'antd'
import React, { useState } from 'react'
import TransactionRecord from '../../Components/Tables/TransactionRecord';
import BreadCrumbs from '../../UI/BreadCrumbs';
import { GrTransaction } from 'react-icons/gr';
import { IoSearchOutline } from 'react-icons/io5';

const {Search} = Input;

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
  const [showSearch, setShowSearch] = useState(false);

  const handleChange = (key) => {
    setActiveTab(key);
  };

  // console.log(activeTab)

  return (
    <>

    <BreadCrumbs icon={<GrTransaction />} menu={"Transactions"}/>

    <div className='relative'>

    <div className='absolute right-0 z-10 flex justify-end items-center'>


{showSearch && <Input  placeholder="Search"  className='rounded-full p-2 mr-3 transition-all duration-300'
          // style={{ transform: 'translateX(0)' }}
           suffix={<IoSearchOutline size={15}/>}/>}
               



               <div className='p-3 rounded-full bg-white font-4xl'>
               <IoSearchOutline size={20} color='#6C7293' onClick={()=>setShowSearch(!showSearch)}/>
                </div>

             

                </div>


 
  <Tabs 
      // activeKey={activeTab}
      onChange={handleChange}
      type="card"
      items={items}
  />

               

  </div>
    </>
  )
}

export default Transactions