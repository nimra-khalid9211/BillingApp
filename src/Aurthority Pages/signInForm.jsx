import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import AuthLogo from "../assets/image/authlogo.png"
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { Button } from "antd";



export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("password");


  return (

    <div className="auth-bg sign-page">
      <section className="content">
       
        <div className="flex flex-col w-full mx-auto h-screen">
         
          <div className="w-full bg-white rounded-[3rem] py-20 px-10">
            
            <div className="flex justify-center">
              <img
                className="w-44 h-16"
                src={AuthLogo}
              />
            </div>

            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

              <div className="text-center">
              
                <h1 className="text-2xl font-bold leading-tight tracking-tight text-[#176BA3] mb-2">
                  Sign in to your account
                </h1>

                <p className="text-[#6C7293] text-base">
                  Enter your email and password to login
                </p>
                
              </div>

              <form className="space-y-4 md:space-y-6 mx-10" action="#">

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

                <div className="flex items-center justify-between">

                  <div className="r h-5">
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

                  <div className="text-[#F1416C] underline ">
                    Forgot Password?
                  </div>

                </div>

                <Button type="submit" size="large"
                  className="flex w-full justify-center p-6 rounded-xl bg-[#176BA3] text-white text-lg font-medium"
                >
                  Sign in
                </Button>

                <p className="text-sm font-light text-center text-[#6C7293] pb-10">
                  Don't have an account?

                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline text-[#329DFF]" >
                    Sign up
                  </a>

                </p>
              </form>

            </div>

          </div>

        </div>

      </section>
    </div>
  );
}
