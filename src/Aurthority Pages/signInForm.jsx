import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import AuthLogo from "../assets/image/authlogo.png"
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { Button } from "antd";
import { logo } from "../assets/image";
import { Link, useNavigate } from "react-router-dom";



export default function SignInForm() {
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

             <div className="text-center mt-7 mb-16">
             
               <h1 className="text-2xl font-medium leading-tight tracking-tight text-[#176BA3] mb-2">
                 Sign in to your account
               </h1>

               <p className="text-[#6C7293] text-base">
                 Enter your email and password to login
               </p>
               
             </div>

             <div className="mx-4" action="#">

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
                     Remember Me
                   </label>
                 </div>

                 <div className="text-[#F1416C] text-base font-medium underline ">
                 <Link to={"/forgot-password"}>
                 Forgot Password?
                 </Link>
                 </div>

               </div>

               <div className="mt-5">
               <Button type="submit" size="large"
                 className="flex w-full drop-shadow-xl justify-center p-6 rounded-xl bg-[#176BA3] text-white text-lg font-medium"
               onClick={()=>navigate("/dashboard")}>
                 Sign in
               </Button>

               <div className="text-lg font-medium text-center text-[#6C7293] pt-5">
                 Don't have an account?

                 <Link to={"/sign-up"}
                   className="font-medium text-primary-600 hover:underline text-[#329DFF]" >
                   Sign up
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
