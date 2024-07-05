import { Autocomplete, Chip, MenuItem, TextField } from "@mui/material";
import { Card, Divider, Drawer, Input, Select, Switch } from "antd";
import React, { useState } from "react";
import DrawerCardLayout from "../../Components/DrawerCardLayout";
import { bitmap, easyPaisa, jazzcash, visaCard } from "../../assets/image";
import { BlueButton, WhiteButton } from "../../UI/Buttons";
import PayMethodCard from "../CardsUI/PayMethodCard";


const {Search} = Input;

const billingCompanies = [
  { title: "GEPCO" },
  { title: "LESCO" },
  { title: "K-Electric" },
  { title: "PESCO" },
  { title: "MEPCO" },
  { title: "GEPCO" },
  { title: "LESCO" },
  { title: "K-Electric" },
  { title: "PESCO" },
  { title: "MEPCO" },
  { title: "GEPCO" },
  { title: "LESCO" },
  { title: "K-Electric" },
  { title: "PESCO" },
  { title: "MEPCO" },
];

const cards = [
  {
    cardIcon: <img src={bitmap}/>,
    cardName: "Master",
    cardNumber: 5221,
    default: true
  },
  {
    cardIcon: <img src={visaCard} className="p-2"/>,
    cardName: "Visa",
    cardNumber: 5221,
    default: false
  },
  {
    cardIcon: <img src={easyPaisa} className="p-1"/>,
    cardName: "Easypaisa",
    cardNumber: 5221,
    default: false
  },
  {
    cardIcon: <img src={jazzcash} className="p-1" width={40}/>,
    cardName: "JazzCash",
    cardNumber: 5221,
    default: false
  },
]

const options = [
  {
    label: 'China',
    value: 'china',
    emoji: '🇨🇳',
    desc: 'China (中国)',
  },
  {
    label: 'USA',
    value: 'usa',
    emoji: '🇺🇸',
    desc: 'USA (美国)',
  },
  {
    label: 'Japan',
    value: 'japan',
    emoji: '🇯🇵',
    desc: 'Japan (日本)',
  },
  {
    label: 'Korea',
    value: 'korea',
    emoji: '🇰🇷',
    desc: 'Korea (韩国)',
  },
];

// const options = [
//   { value: 'option1', label: 'Option 1' },
//   { value: 'option2', label: 'Option 2' },
//   { value: 'option3', label: 'Option 3' },
// ];

export const AddBillDrawer = ({ addBill, setAddBill, from }) => {

  return (
    <Drawer
      title={
        <div>
          <span className="text-xl text-[#377CF6]">
            {from === "addBill" ? "Add Bill" : from === "quickPay" ? "Quick Pay" : ""}
            </span>

          <Divider style={{ borderTop: "1px solid #6C7293" }} />
        </div>
      }
      closeIcon={null}
      placement="right"
      onClose={() => setAddBill(false)}
      open={addBill}
      key="right"
      width={1200}
      className="rounded-tl-[80px] rounded-bl-[80px] p-8"
    >
      
        <DrawerCardLayout heading={"Bill Details"}>
          <div className="grid grid-cols-5 gap-8 mb-10">
            
             <TextField
              className="col-span-4 border-black"
              select
              label = {from === "addBill" ? "Company" : from === "quickPay" ? "Select Bill" : ""}
              size="small"
            >
              

               <div className="h-60 bg-white">
               <Search placeholder="Search.." className="p-4"/>
               {billingCompanies.map((x)=>(
                <div className="px-4 py-2 border-b font-medium hover:bg-[#dbf0ff]">{x.title}</div>
             
               ))}
              </div> 
            </TextField>

            {from === "addBill" && <TextField
              className="col-span-2 mt-3"
              label="Consumer ID"
              id="outlined-size-small"
              size="small"
            />}

           {from === "addBill" &&  <TextField
              className="col-span-2 mt-3"
              label="Bill Nick Name"
              // id="outlined-size-small"
              // defaultValue="Small"
              size="small"
            />}

          </div>
        </DrawerCardLayout>

        <DrawerCardLayout heading={"Payment Preference"}>

            {from === "addBill" && <div>
          <div className="flex justify-between items-center w-60 mt-6">

            <span className="text-base font-medium">Auto Direct Debit</span>

            <span>
              <Switch defaultChecked size="small"/>
              </span>

          </div>

          <div className="grid grid-cols-6 gap-8 my-5">
                
                {cards.map((x, index)=>(
                   <Card key={index} className={`col-span-3 px-2 ${x.default ? "border-[#377CF6]" : "bg-[#F8F8F8]"}`}>

                    <div className="flex items-center justify-between h-20">

                      <div className="flex items-center gap-2">

                   <input type="radio" defaultChecked={x.default && true}/>

                  <div className="bg-[#DBF0FF] px-1 rounded-md"> 
                    {x.cardIcon}
                  </div>

                 <div className="text-base font-medium">  {x.cardName}
                 </div>

                   </div>

                   <div className="flex flex-col mt-5">

                   <span className="text-base font-medium"><span className="text-xs text-[#6C7293]">ending</span> {x.cardNumber}</span>

                   <span className={`text-end text-xs ${x.default ? " text-[#24A959]" : "text-[#329DFF]"}`}>{x.default ? "Default" : "Set as Default"}</span>

                </div>
                   </div>

                 </Card>
                )) }   

          </div>
          </div>}

          {from === "quickPay" && <PayMethodCard from={from}/>}

        </DrawerCardLayout>

        <div className="ml-[14rem]">

          <WhiteButton title={"Cancel"} clickEvent={()=>setAddBill(false)}/>

          <BlueButton  title={from === "addBill" ? "Add Bill" : from === "quickPay" ? "Quick Pay" : ""}/>

        </div>
      
    </Drawer>
  );
};


 