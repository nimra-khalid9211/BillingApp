import React from 'react'
import CardLayout from '../../Components/CardLayout'
import { Select, Switch } from 'antd'

const languages=[
  {label: "English", value: "english"},
  {label: "Chinese", value: "chinese"},
  {label: "Japanese", value: "japanese"},
  {label: "French", value: "french"},
];

const currency=[
  {label: "PKR", value: "pkr"},
  {label: "USD", value: "usd"},
  {label: "CNY", value: "cny"},
  {label: "JPY", value: "jpy"},
];

const time=[
  {label: "Islamabad,Pakistan", value: "islamabad"},
  {label: "Karachi,Pakistan", value: "karachi"},
  {label: "New York,USA", value: "newyork"},
  {label: "Torronto,CAD", value: "torronto"},
];


const Appearance = () => {
  return (
   <CardLayout title={"Appearance"}>
    
    <div className='mx-10 my-5  border-b-2 pb-6'>
      <div className='flex justify-between items-center w-2/4'>
        <div className='flex flex-col'>

        <span className='text-base font-bold '>Select Language</span>
        <span className='text-sm text-[#6C7293] mt-1'>Select the language of the platform</span>

        </div>

        <Select
          size="large"
          defaultValue="English"
          // onChange={handleChange}
          style={{
            width: 200,
          }}
          options={languages}
        />

      </div>
    </div>

    <div className='mx-10 my-5  border-b-2 pb-6'>
      <div className='flex justify-between items-center w-2/4'>
        <div className='flex flex-col'>

        <span className='text-base font-bold '>Select Currency</span>
        <span className='text-sm text-[#6C7293] mt-1'>Select the currency</span>

        </div>

        <Select
          size="large"
          defaultValue="PKR"
          // onChange={handleChange}
          style={{
            width: 200,
          }}
          options={currency}
        />

      </div>
    </div>

    <div className='mx-10 my-5  border-b-2 pb-6'>
      <div className='flex justify-between items-center w-2/4'>
        <div className='flex flex-col'>

        <span className='text-base font-bold '>Time Zone</span>
        <span className='text-sm text-[#6C7293] mt-1'>Set time zone automatically</span>

        </div>

        <Select 
        // className='font-bold'
          size="large"
          defaultValue="Islamabad"
          // onChange={handleChange}
          style={{
            width: 200,
            // fontWeight: 'bold'
          }}
          options={time}
        />

      </div>
    </div>

    <div className='mx-10 my-5  border-b-2 pb-6'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>

        <span className='text-base font-bold '>Show Weather in Navigation Bar</span>
        <span className='text-sm text-[#6C7293] mt-1'>Enable / Disable Weather in Navigation Bar</span>

        </div>

        <Switch checked/>

      </div>
    </div>

    <div className='mx-10 my-5  border-b-2 pb-6'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>

        <span className='text-base font-bold '>Show Calendar in Navigation Bar</span>
        <span className='text-sm text-[#6C7293] mt-1'>Enable / Disable Calendar in Navigation Bar</span>

        </div>

        <Switch checked/>

      </div>
    </div>
    
     </CardLayout>
  )
}

export default Appearance