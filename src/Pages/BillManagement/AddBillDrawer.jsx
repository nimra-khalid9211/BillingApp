import { MenuItem, TextField } from "@mui/material";
import { Card, Divider, Drawer, Switch } from "antd";
import React, { useState } from "react";

import DrawerCardLayout from "../../Components/DrawerCardLayout";
import { bitmap, easyPaisa, jazzcash, visaCard } from "../../assets/image";

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
    cardIcon: <img src={visaCard}/>,
    cardName: "Visa",
    cardNumber: 5221,
    default: false
  },
  {
    cardIcon: <img src={easyPaisa}/>,
    cardName: "Easypaisa",
    cardNumber: 5221,
    default: false
  },
  {
    cardIcon: <img src={jazzcash} width={30}/>,
    cardName: "JazzCash",
    cardNumber: 5221,
    default: false
  },
]

const AddBillDrawer = ({ addBill, setAddBill }) => {
  return (
    <Drawer
      title={
        <div>
          <span className="text-xl text-[#377CF6]">Add Bill</span>

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
              label="Company"
              size="small"
            >
              <div className="h-60">
                {billingCompanies.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.title}
                  </MenuItem>
                ))}
              </div>
            </TextField>

            <TextField
              className="col-span-2 mt-3"
              label="Consumer ID"
              id="outlined-size-small"
              size="small"
            />

            <TextField
              className="col-span-2 mt-3"
              label="Bill Nick Name"
              // id="outlined-size-small"
              // defaultValue="Small"
              size="small"
            />
          </div>
        </DrawerCardLayout>

        <DrawerCardLayout heading={"Payment Preference"}>

          <div className="flex justify-between items-center w-60 mt-6">

            <span className="text-base font-medium">Auto Direct Debit</span>

            <span>
              <Switch defaultChecked size="small"/>
              </span>

          </div>

          <div className="grid grid-cols-6 gap-8 my-5">
                
                {cards.map((x, index)=>(
                   <Card key={index} className="col-span-3 h-20 px-2 border-green-800 flex items-center justify-start">
                   <input type="radio"/>
                   {x.cardIcon}
                 </Card>
                )) }

          </div>

        </DrawerCardLayout>
      
    </Drawer>
  );
};

export default AddBillDrawer;
