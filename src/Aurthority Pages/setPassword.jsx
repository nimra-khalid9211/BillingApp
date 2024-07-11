import { InputAdornment, TextField } from "@mui/material"
import { logo } from "../assets/image"
import AuthLogo from "../assets/image/authlogo.png"
import { MdOutlineEmail } from "react-icons/md"
import { Button } from "antd"
import { IoArrowBack, IoEyeOutline } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"
import { FaRegEyeSlash } from "react-icons/fa"
import { useState } from "react"


export default function SetPassword(){
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("password");

  const navigate = useNavigate();

    return(


      <section className="verification-bg auth-bg">

      <div className="flex justify-center items-center">
  
      <section className="content">      
       
       <div className="mt-16 rounded-[3rem] px-16" >
         
         <div className="flex justify-center">
           <img
             className="w-44 h-20"
             src={logo}
           />
         </div>
  
         <div className="p-8">
  
           <div className="text-center mt-7 mb-16">
           
             <h1 className="text-2xl font-medium leading-tight tracking-tight text-[#176BA3] mb-2">
             Set New Password
             </h1>
  
             <p className="text-[#6C7293] text-base">
             Please enter your new password
             </p>
             
           </div>
  
           <div className="mx-4">
  
           <div className="mb-7">
             <TextField
               type={type}
               label="New Password"
                 InputProps={{
                   style: {
                     fontSize: "16px",
                     fontWeight: "600",
                     borderRadius: "10px",
                   },
                   endAdornment: (
                     <InputAdornment position="center">
                       {/* <IconButton> */}
                       {!showPassword && <IoEyeOutline size={20} role="button" onClick={()=>{setShowPassword(true); setType("text")}}/>} 
                       {showPassword && <FaRegEyeSlash size={20} role="button" onClick={()=>{setShowPassword(false); setType("password")}}/>} 
                       {/* </IconButton> */}
                     </InputAdornment>
                   ),
                 }}
                 variant="outlined"
                 size="small"
                 fullWidth
               />
               </div>

               <div className="mb-7">
             <TextField
               type={type}
               label="Confirm Password"
                 InputProps={{
                   style: {
                     fontSize: "16px",
                     fontWeight: "600",
                     borderRadius: "10px",
                   },
                   endAdornment: (
                     <InputAdornment position="center">
                       {/* <IconButton> */}
                       {!showPassword && <IoEyeOutline size={20} role="button" onClick={()=>{setShowPassword(true); setType("text")}}/>} 
                       {showPassword && <FaRegEyeSlash size={20} role="button" onClick={()=>{setShowPassword(false); setType("password")}}/>} 
                       {/* </IconButton> */}
                     </InputAdornment>
                   ),
                 }}
                 variant="outlined"
                 size="small"
                 fullWidth
               />
               </div>
  
             <div className="mt-12">
             <Button type="submit" size="large"
               className="flex w-full drop-shadow-xl justify-center p-6 rounded-xl bg-[#176BA3] text-white text-lg font-medium"
              onClick={()=>navigate("/changed-password")} >
               Reset Password
             </Button>
  
             </div>
           </div>
  
         </div>
  
     </div>
  
        </section>
  
  </div>
  
    </section>
      
    )
}