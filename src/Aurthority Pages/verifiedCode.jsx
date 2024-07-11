import { Button, Input } from "antd";
import { logo } from "../assets/image";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";



export default function VerifiedCode() {
  const navigate = useNavigate();

  return (

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

         <div className="text-center mt-7 mb-8">
         
           <h1 className="text-2xl font-medium leading-tight tracking-tight text-[#176BA3] mb-2">
           Enter Verification Code
           </h1>

           <p className="text-[#6C7293] text-base">
           We've sent a code to xyz@gmail.com
           </p>
           
         </div>

         <div className="mx-4">
          <div className="flex justify-center">
         <Input.OTP length={4} size="small"/>
         </div>

         <div className="text-lg mt-5 font-medium text-center text-[#6C7293] pt-5">
         Didn't get a code?

                 <span
                   className="font-medium text-primary-600 hover:underline text-[#329DFF]" >
                  Click to resend
                 </span>
                 </div>

           <div className="mt-8">
           <Button type="submit" size="large"
             className="flex w-full drop-shadow-xl justify-center p-6 rounded-xl bg-[#176BA3] text-white text-lg font-medium"
              onClick={()=>navigate("/set-password")}  >
            Verify
           </Button>

          
           </div>
         </div>

       </div>

   </div>

      </section>

</div>

  </section>
  );
}
