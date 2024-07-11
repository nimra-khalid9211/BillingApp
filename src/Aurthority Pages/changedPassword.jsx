import { Button } from "antd";
import AuthLogo from "../assets/image/authlogo.png";
import { logo } from "../assets/image";
import { useNavigate } from "react-router-dom";


export default function ChangedPassword() {

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

         <div className="text-center mt-16 mb-16">
         
           <h1 className="text-2xl font-medium leading-tight tracking-tight text-[#176BA3] mb-2">
           Password Reset Successfully
           </h1>

           <p className="text-[#6C7293] text-base">
           Your password has been successfully reset.
           </p>

           <p className="text-[#6C7293] text-base">
           Click below to log in now
           </p>
           
         </div>

         <div className="mx-4">


           <div className="mt-12">
           <Button type="submit" size="large"
             className="flex w-full drop-shadow-xl justify-center p-6 rounded-xl bg-[#176BA3] text-white text-lg font-medium"
            onClick={()=>navigate("/sign-in")} >
             Continue
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
