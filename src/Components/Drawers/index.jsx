import {
  Autocomplete,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Card, Divider, Drawer, Input, Switch } from "antd";
import React, { useEffect, useState } from "react";
import DrawerCardLayout from "../../Components/DrawerCardLayout";
import { bitmap, easyPaisa, jazzcash, visaCard } from "../../assets/image";
import { BlueButton, WhiteButton } from "../../UI/Buttons";
import PayMethodCard from "../CardsUI/PayMethodCard";
import { Cancel } from "../../assets/icon";
import { InputCustom } from "../../UI/Inputs";
import ChangeAccount from "../CardsUI/ChangeAccount/changeAccount";

const { Search } = Input;

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
    cardIcon: <img src={bitmap} />,
    cardName: "Master",
    cardNumber: 5221,
    default: true,
  },
  {
    cardIcon: <img src={visaCard} className="p-2" />,
    cardName: "Visa",
    cardNumber: 5221,
    default: false,
  },
  {
    cardIcon: <img src={easyPaisa} className="p-1" />,
    cardName: "Easypaisa",
    cardNumber: 5221,
    default: false,
  },
  {
    cardIcon: <img src={jazzcash} className="p-1" width={40} />,
    cardName: "JazzCash",
    cardNumber: 5221,
    default: false,
  },
];

export const AddBillDrawer = ({ addBill, setAddBill, from }) => {
  const [searchedCompany, setSearchedCompany] = useState();

  // const searchHandler = (e) => {
  //   const value = e.target.value.trim().toLocaleLowerCase();

  //   // console.log(value, "value");

  //   const selectedCompany = billingCompanies.filter((x)=> x.title.toLocaleLowerCase().includes(value));

  //     console.log(selectedCompany, "selected company")

  //   setSearchedCompany(selectedCompany);
  // }

  const handleChange = (event) => {
    setSearchedCompany(event.target.value);
  };
  return (
    <Drawer
      title={
        <div>
          <span className="text-xl text-[#377CF6]">
            {from === "addBill"
              ? "Add Bill"
              : from === "quickPay"
              ? "Quick Pay"
              : ""}
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
      className="rounded-tl-[80px] rounded-bl-[80px] p-8 relative"
      style={{
        overflow: "unset",
        borderTopLeftRadius: "80px",
        borderBottomLeftRadius: "80px",
        background: "#f6f6f8",
      }}
    >
      <div
        onClick={() => setAddBill(false)}
        className="absolute cursor-pointer left-[-1.5rem] z-50 top-[8rem]"
      >
        <img src={Cancel} alt="" />
      </div>

      <DrawerCardLayout heading={"Bill Details"}>
        <div className="grid grid-cols-5 gap-8 mb-10 bg-white">
          {/* <TextField
              className="col-span-4 border-black"
              select
              value={selectedCompany ? selectedCompany.title : ''}
              label = {from === "addBill" ? "Company" : from === "quickPay" ? "Select Bill" : ""}
              size="small" InputProps={{style: { fontSize: "16px", fontWeight: "600", borderRadius: "10px", }, }}   >

               <div className="h-60 ">
               <Input placeholder="Search.." size="small" className="p-2" onChange={searchHandler} onClick={(e) => e.stopPropagation()}/>
               {searchedCompany.map((x, index)=>(
                <div key={index} onClick={()=>handleSelectCompany(x)} className="px-4 py-2 border-b font-medium hover:bg-[#dbf0ff]">{x.title}</div>
             
               ))}
              </div> 
            </TextField> */}

          <div className="col-span-4">
            <FormControl fullWidth size="small">
              <InputLabel>
                {" "}
                {from === "addBill"
                  ? "Company"
                  : from === "quickPay"
                  ? "Select Bill"
                  : ""}
              </InputLabel>

              <Select
                value={searchedCompany} // Display selected company's title
                onChange={handleChange}
                label={
                  from === "addBill"
                    ? "Company"
                    : from === "quickPay"
                    ? "Select Bill"
                    : ""
                }
              >
                <div className="h-60">
                  {billingCompanies.map((x) => (
                    <MenuItem value={x.title}>{x.title}</MenuItem>
                  ))}
                </div>
              </Select>
            </FormControl>
          </div>

          {from === "addBill" && (
            <InputCustom className={"col-span-2 mt-3"} label={"Consumer ID"} />
          )}

          {from === "addBill" && (
            <InputCustom
              className={"col-span-2 mt-3"}
              label={"Bill Nick Name"}
            />
          )}
        </div>
      </DrawerCardLayout>

      <DrawerCardLayout heading={"Payment Preference"}>
        {from === "addBill" || from === "quickPay" ? (
          <div>
            <div className="flex justify-between items-center w-60 mt-6 bg-white">
              <span className="text-base font-medium mb-3">Auto Debit</span>
              <span>
                <Switch defaultChecked size="small" />
              </span>
            </div>
            {from === "addBill" && <PayMethodCard from={from} />}
          </div>
        ) : null}

        {from === "quickPay" && <PayMethodCard from={from} />}
      </DrawerCardLayout>

      <div className="ml-[7rem] fixed bottom-5">
        <WhiteButton
          customClass={"cancel-btn"}
          title={"Cancel"}
          clickEvent={() => setAddBill(false)}
        />

        <BlueButton
          customClass={"hover-color"}
          title={
            from === "addBill"
              ? "Add Bill"
              : from === "quickPay"
              ? "Quick Pay"
              : ""
          }
        />
      </div>
    </Drawer>
  );
};
