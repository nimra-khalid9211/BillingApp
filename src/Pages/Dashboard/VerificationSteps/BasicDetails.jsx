import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Image } from "antd";
import React, { useEffect, useState } from "react";
import { StepCard } from "../../../Components/CardLayout";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FaCalendarAlt } from "react-icons/fa";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LuCalendarRange } from "react-icons/lu";

const BasicDetails = () => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    setValue(e.target.value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };



  return (
    <StepCard title={"Basic Details"}>
      <div className="flex justify-center items-center">
        <div className="w-1/2">
          <div className="flex flex-col justify-center items-center">
            <div>
              <Image
                className="rounded-full"
                width={100}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 w-full my-10">
              <div className="mb-4">
                <TextField
                  label="First Name"
                  InputProps={{
                    style: {
                      fontSize: "16px",
                      fontWeight: "600",
                      borderRadius: "10px",
                    },
                  }}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>

              <div className="mb-4">
                <TextField
                  label="Last Name"
                  InputProps={{
                    style: {
                      fontSize: "16px",
                      fontWeight: "600",
                      borderRadius: "10px",
                    },
                  }}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>

              <div className="mb-4">
                {/* <TextField label="Date of Birth" type='date' variant="outlined" size='small' fullWidth
        value={value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}
        InputLabelProps={{  shrink: isFocused || Boolean(value), }}   
        InputProps={{ style: { fontSize: '16px', fontWeight: '600' },  inputProps: { placeholder: '',},}}
      /> */}

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                  id="date-input"
                    className="w-full custom-placeholder-hidden"
                    label="Date of Birth"
                    format="DD/MM/YYYY"
                    slots={{ openPickerIcon: LuCalendarRange }}
                  />
                </LocalizationProvider>
              </div>

              <div className="mb-4">
                <FormControl size="small" fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Gender"
                  >
                    <MenuItem>Male</MenuItem>
                    <MenuItem>Female</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="col-span-2 mb-4">
                <TextField
                  label="Address"
                  InputProps={{
                    style: {
                      fontSize: "16px",
                      fontWeight: "600",
                      borderRadius: "10px",
                    },
                  }}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>

              <div className="mb-4">
                <TextField
                  label="City"
                  InputProps={{
                    style: {
                      fontSize: "16px",
                      fontWeight: "600",
                      borderRadius: "10px",
                    },
                  }}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>

              <div className="mb-4">
                <FormControl size="small" fullWidth>
                  <InputLabel id="demo-simple-select-label">State</InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="State"
                  >
                    <MenuItem value="1">Punjab</MenuItem>
                    <MenuItem value="2">Sindh</MenuItem>
                    <MenuItem value="3">Khyber Pakhtunkhawa</MenuItem>
                    <MenuItem value="4">Balochistan</MenuItem>
                    <MenuItem value="5">Gilgit Baltistan</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StepCard>
  );
};

export default BasicDetails;
