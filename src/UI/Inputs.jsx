import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

export const InputCustom = ({label, type, className, value, disabled, onChange, borderStyle}) => {

  return (

    <TextField
    label={label}
    type={type}
    className={className}
    InputProps={{
      style: {
        fontSize: "16px",
        fontWeight: "600",
        borderRadius: "10px",
        // border: `${borderStyle}`,
        
      },
    }}
    onChange={onChange}
    disabled={disabled}
    variant="outlined"
    size="small"
    fullWidth
    value={value}
  />

  )
}

export const InputDate = ({label, type}) => {
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

    <TextField label={label} type='date' variant="outlined" size='small' fullWidth
        value={value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}
        InputLabelProps={{  shrink: isFocused || Boolean(value), }}   
        InputProps={{ style: { fontSize: '16px', fontWeight: '600' },  inputProps: { placeholder: '',},}}
      />
  )
}




export const InputSelect = () => {
  return (
    <FormControl size="small" fullWidth>
    <InputLabel id="demo-simple-select-label">Gender</InputLabel>

<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
label="Gender">
<MenuItem value="male">Male</MenuItem>
<MenuItem value="female">Female</MenuItem>
</Select>

</FormControl>
  )
}
