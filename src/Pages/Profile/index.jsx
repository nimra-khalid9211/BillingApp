import React from "react";
import CardLayout from "../../Components/CardLayout";
import BreadCrumbs from "../../UI/BreadCrumbs.jsx";
import { CiSettings } from "react-icons/ci";
import { Card } from "antd";
import { WhiteButton } from "../../UI/Buttons.jsx";
import { colors, TextField } from "@mui/material";

const Profile = () => {
  return (
    <>
      <BreadCrumbs
        icon={<CiSettings />}
        menu={"Settings"}
        subMenu={"Profile"}
      />

      <CardLayout title={"Profile"} from={"nonEdit"}>
        <Card className="m-16 mb-10">
          <div className="grid grid-cols-4 gap-10 p-10  w-9/12">
            <div className="col-span-2">
              <div className="flex items-center justify-start gap-6">
                image upload
                <div className="flex flex-col justify-start">
                  <span className="text-lg font-medium text-[#006AB2]">
                    Pick a Profile Picture
                  </span>
                  <span className="text-xs font-medium text-[#6C7293]">
                    Make sure your face is clear
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-2 justify-self-end">
              <WhiteButton title={"Edit"} />
            </div>

            <div className="col-span-2">
              <TextField
                label="Full Name"
                InputProps={{ style: { fontSize: "16px", fontWeight: "600" } }}
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>

            <div className="col-span-2">
              <TextField
                label="CNIC #"
                InputProps={{ style: { fontSize: "16px", fontWeight: "600" } }}
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>

            <div className="col-span-2">
              <TextField
                label="Mobile"
                InputProps={{ style: { fontSize: "16px", fontWeight: "600" } }}
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>

            <div className="col-span-2">
              <TextField
                label="Email"
                InputProps={{ style: { fontSize: "16px", fontWeight: "600" } }}
                type="email"
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>

            <div className='col-span-2'>
          
            <TextField  label="Date of Birth" type='date' variant="outlined" size='small' fullWidth
             InputLabelProps={{ shrink: true, }} InputProps={{  inputProps: { placeholder: '',  }, style: { fontSize: '16px', fontWeight:"600" }, }}/>
            
            </div>

          

            <div className="col-span-2">
              <TextField
                label="Address"
                InputProps={{ style: { fontSize: "16px", fontWeight: "600" } }}
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
          </div>
        </Card>
      </CardLayout>
    </>
  );
};

export default Profile;
