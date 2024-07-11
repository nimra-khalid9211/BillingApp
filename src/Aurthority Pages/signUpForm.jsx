import React, { useState } from "react";
import { logo } from "../assets/image";
import { InputAdornment, TextField } from "@mui/material";
import { MdOutlineEmail } from "react-icons/md";
import { Button } from "antd";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("password");

  const navigate = useNavigate();

  return (

    <div className="auth-bg sign-page">

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

             <div className="text-center mt-7 mb-10">
             
               <h1 className="text-2xl font-medium leading-tight tracking-tight text-[#176BA3] mb-2">
                 Sign up for an Account
               </h1>

               <p className="text-[#6C7293] text-base">
                 Create your free account today
               </p>
               
             </div>

             <div className="mx-4">

             <div className="mb-7">
             <TextField
               type="text"
               label="Full Name"
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

               <div className="mb-7">
             <TextField
               type="number"
               label="Mobile Number"
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

              <div className="mb-7">
             <TextField
               type="email"
               label="Email"
                 InputProps={{
                   style: {
                     fontSize: "16px",
                     fontWeight: "600",
                     borderRadius: "10px",
                   },
                   endAdornment: (
                     <InputAdornment position="center">
                       {/* <IconButton> */}
                         <MdOutlineEmail size={20}/> {/* Replace with your icon component */}
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
               label="Password"
                 InputProps={{
                   style: {
                     fontSize: "16px",
                     fontWeight: "600",
                     borderRadius: "10px",
                   },
                   endAdornment: (
                     <InputAdornment position="center">
                       {/* <IconButton> */}
                       {!showPassword && <FaRegEyeSlash size={20} role="button" onClick={()=>{setShowPassword(true); setType("text")}}/>} 
                       {showPassword && <IoEyeOutline size={20} role="button" onClick={()=>{setShowPassword(false); setType("password")}}/>} 
                       {/* </IconButton> */}
                     </InputAdornment>
                   ),
                 }}
                 variant="outlined"
                 size="small"
                 fullWidth
               />
               </div>

               <div className="flex items-center justify-between">

                 <div className="flex items-center">
                   <input
                     id="terms"
                     aria-describedby="terms"
                     type="checkbox"
                     className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                     required
                   />
                   <label htmlFor="terms" className="font-medium text-base ml-2">
                   I Accept the <span className="text-[#329DFF]">Terms & Conditions</span>
                   </label>
                 </div>

               </div>

               <div className="mt-5">
               <Button type="submit" size="large"
                 className="flex w-full drop-shadow-xl justify-center p-6 rounded-xl bg-[#176BA3] text-white text-lg font-medium"
               onClick={()=>navigate("/sign-in")}>
                 Sign up
               </Button>

               <div className="text-lg font-medium text-center text-[#6C7293] pt-5">
                 Already have an account?

                 <Link to={"/sign-in"}
                   className="font-medium text-primary-600 hover:underline text-[#329DFF]" >
                   Sign in
                 </Link>
                 </div>

               </div>

             </div>

           </div>

       </div>

     </section>

    </div>

    </div>

  );
}
