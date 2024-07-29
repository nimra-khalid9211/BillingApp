import React, { useState } from "react";
import CardLayout from "../../Components/CardLayout";
import BreadCrumbs from "../../UI/BreadCrumbs.jsx";
import { CiSettings } from "react-icons/ci";
import { Card,  } from "antd";
import { colors, TextField } from "@mui/material";
import { profile } from "../../assets/image/index.js";
import { GoPencil } from "react-icons/go";
import { CNICDashes, formatMobileNumber } from "../../Hooks/index.js";
import { BlueButton, WhiteButton } from "../../UI/Buttons.jsx";

const Profile = () => {

  const [addressInfo, setAddressInfo] = useState({
    address: "Level 25, 108 St Georges Terrace, Perth WA",
    city: "Lahore",
    state: "Punjab",
    postCode: "54000",
  });

  const [edit, setEdit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setAddressInfo(prev =>({...prev, [name]: value}))
  }


  return (
    <>

      <BreadCrumbs
        icon={<CiSettings />}
        menu={"Settings"}
        subMenu={"Profile"}
      />

      <CardLayout title={"My Profile"} from={"nonEdit"}>

        <div className=" m-10">

        <Card className="h-52 rounded-3xl shadow-for-all">

        <div className="flex relative items-center w-1/3 mt-10">

        <div className="ml-20 border-2 border-[#B9B9B9] rounded-full">
          <img src={profile} alt="" width={120}  className="rounded-full"/>
          </div>
          
        <div className="w-full absolute left-[11rem] top-[5rem]">
          <input type="file" id="upload-image"  hidden/>

          <div className="bg-[var(--blue)] p-2 rounded-full w-9 flex items-center justify-center">
          <label htmlFor="upload-image"><GoPencil size={18} color="white" role="button"/></label>
          </div>
        </div>

        <div className="flex flex-col ml-7">
          <span className="text-lg medium text-[var(--blue)]">Pick a Profile Picture</span>
          <span className="text-xs medium text-[#6C7293]">Make sure your face is clear</span>
        </div>

        </div>

        
       

        </Card>

        <Card className="rounded-3xl shadow-for-all mt-5 px-6">

          <div className="px-6 border-b py-4">
            <span className="text-base medium">Personal Information</span>
          </div>

          <div className="grid grid-cols-3 p-10 gap-10">

          <div className="flex flex-col">
            <label className="text-sm text-[#6C7293]">Full Name</label>
            <span className="text-base medium">Shaun Abbott</span>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-[#6C7293]">CNIC #</label>
            <span className="text-base medium">{CNICDashes("1234567891234")}</span>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-[#6C7293]">Mobile</label>
            <span className="text-base medium">{formatMobileNumber("12345678912")}</span>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-[#6C7293]">Email</label>
            <span className="text-base medium">ShaunAbbot@gmail.com</span>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-[#6C7293]">Email</label>
            <span className="text-base medium">15 Jan 2000</span>
          </div>
      

          </div>

        </Card>

        <Card className="rounded-3xl shadow-for-all mt-5 px-6 ">

          <div className="flex h-14 items-center justify-between px-6 border-b py-4">
            <span className="text-base medium">Address</span>
           {!edit && <WhiteButton title={"Edit"} customClass={"cancel-btn"} customStyle={"5rem"} clickEvent={()=>setEdit(true)}/>}
          </div>

          <div className="grid grid-cols-5 p-10 gap-3">

         <div className="col-span-3 mb-6">
         <TextField label="Address" name="address" value={addressInfo.address} onChange={handleChange}
         variant="outlined" size="small" fullWidth className={`${edit ? "" : "bg-[#F2F2F2] rounded-2xl" }`}/>
         </div>
         
         <div className="col-span-2"></div>

          <div>
          <TextField label="City" name="city" value={addressInfo.city} onChange={handleChange}
           variant="outlined" size="small" fullWidth className={`${edit ? "" : "bg-[#F2F2F2] rounded-2xl" }`}/>
          </div>

          <div>
          <TextField label="State" name="state" value={addressInfo.state} onChange={handleChange}
           variant="outlined" size="small" fullWidth className={`${edit ? "" : "bg-[#F2F2F2] rounded-2xl" }`}/>
          </div>

          <div>
          <TextField label="Postcode" name="postCode" value={addressInfo.postCode} onChange={handleChange}
           variant="outlined" size="small" fullWidth className={`${edit ? "" : "bg-[#F2F2F2] rounded-2xl" }`}/>
          </div>

          </div>

        </Card>

        </div>

      </CardLayout>

        <div className="mt-7 mb-10">
      {edit && <> 
       <WhiteButton title={"Cancel"} marginRight={"1rem"} customClass={"cancel-btn"} clickEvent={()=>setEdit(false)}/>
        <BlueButton title={"Save Changes"} customClass={"hover-color"}  clickEvent={()=>setEdit(false)}/>
        </>} 
        </div>

    </>
  );
};

export default Profile;
