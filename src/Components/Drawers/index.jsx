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
    const [bill, setBill] = useState(''); 
    const [list, setList] = useState(false);

    const filterSearch = (e) => {
      const value = e.target.value;
      value.length > 0 ? setList(true) : setList(false);
      setBill(value); // Update the input field value
    };

    const handleSelectBill = (selectedCompany) => {
      setBill(selectedCompany); // Set the selected bill title
      setList(false);
    };

    const filteredCompanies = billingCompanies.filter(company =>
      company.title.toLowerCase().includes(bill.toLowerCase())
    );
  

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
      className="p-8 relative"
      style={{overflow:'unset', borderTopLeftRadius: "36px", borderBottomLeftRadius: "36px", background:'#f6f6f8'}}
    >
      <div
        onClick={() => setAddBill(false)}
        className="absolute cursor-pointer left-[-1.5rem] z-50 top-[8rem]"
      >
        <img src={Cancel} alt="" />
      </div>

        <div className="">
        <DrawerCardLayout heading={"Bill Details"}>

          <div className="grid grid-cols-5 gap-8 mb-10 bg-white">
          
             <div className="col-span-4 relative">

        <TextField label={from === "addBill" ? "Company" : from === "quickPay" ? "Select Bill" : ""} 
        value={bill} onChange={filterSearch} variant="outlined" size="small" fullWidth />
  
        {list && 

        <div className="absolute overflow-y-auto drop-shadow-2xl z-50 bg-white mt-2 rounded-2xl w-full h-36">
           {filteredCompanies.map((x, index)=>(
            <div key={index} onClick={()=>handleSelectBill(x.title)} className="mx-3 p-2 px-4 border-l-white border-b rounded-sm border-l-4 hover:bg-[#dbf0ff] hover:border-l-[var(--blue)]">{x.title}</div>
           ))}
        </div>
        }
        
        </div>

            {from === "addBill" && 
            <InputCustom className={"col-span-2 mt-3"} label={"Consumer ID"}/>
            }

           {from === "addBill" && 
           <InputCustom className={"col-span-2 mt-3"} label={"Bill Nick Name"}/>
            }

            {from === "addBill" && <BlueButton title={"Fetch"} customClass={"hover-color"}/>}

          </div>

        </DrawerCardLayout>

        </div>

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

          <BlueButton customClass={"hover-color"} title={from === "addBill" ? "Add Bill" : from === "quickPay" ? "Quick Pay" : ""}/>

        </div>


      
    </Drawer>
  );
};
