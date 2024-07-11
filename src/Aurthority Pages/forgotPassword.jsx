import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { InputAdornment, TextField } from '@mui/material';
import { MdOutlineEmail } from 'react-icons/md';
import { logo } from '../assets/image';
import { IoArrowBack } from 'react-icons/io5';



export default function ForgotPassword() {
  const navigate = useNavigate()

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

         <div className="text-center mt-7 mb-16">
         
           <h1 className="text-2xl font-medium leading-tight tracking-tight text-[#176BA3] mb-2">
           Forgot Password?
           </h1>

           <p className="text-[#6C7293] text-base">
           No worries, we'll send you reset instructions. 
           </p>
           
         </div>

         <div className="mx-4">

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

           <div className="mt-16">
           <Button type="submit" size="large"
             className="flex w-full drop-shadow-xl justify-center p-6 rounded-xl bg-[#176BA3] text-white text-lg font-medium"
            onClick={()=>navigate("/verified-code")} >
             Reset Password
           </Button>

           <div className="text-lg font-medium flex justify-center hover:underline items-center text-[#6C7293] pt-8">

            <IoArrowBack size={20}/>

            <Link to={"/sign-in"} className=''>
              Back to Log in
            </Link>

             </div>

           </div>
         </div>

       </div>

   </div>

      </section>

</div>

  </section>
  
  );
}
