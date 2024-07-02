import React from 'react'
import CardLayout from '../../Components/CardLayout.jsx'
import { Button, Switch } from 'antd'
import { WhiteButton } from '../../UI/Buttons.jsx'

const security =[
  {
    heading: "Email Address",
    subHeading: "The email address associated with your account",
    email: "saadhassan09@gmail.com",
    verfied: true,
    action: <WhiteButton title={"Edit"}/> 
  },
  {
    heading: "Mobile Number",
    subHeading: "The mobile number associated with your account",
    phone: "0331-6725012",
    verfied: true,
    action: <WhiteButton title={"Edit"}/> 
  },
  {
    heading: "Password",
    subHeading: "Set a unique password to protect your account",
    action: <WhiteButton title={"Change Password"}/> 
  },
  {
    heading: "2 Step Verificatio",
    subHeading: "Making your account extra secure. Along with your password, you'll need to enter a code.",
    action: <Switch/> 
  },
]



const Security = () => {
  return (
    <CardLayout title={"Security"}> 
    
      {security.map((x)=>(
          <div className='mx-10 my-5  border-b-2 pb-6'>
          <div className='flex justify-between items-center'>
           
            <div className='flex flex-col'>
    
            <span className='text-base font-bold '>{x.heading}</span>
            <span className='text-sm text-[#6C7293] mt-1'>{x.subHeading}</span>
    
            </div>

            {x.email &&<span className=' text-base font-semibold'>{x.email}</span>}

           {x. phone && <span className=' text-base font-semibold'>{x.phone}</span>}

           {x.verfied && <span className={` text-base font-semibold ${x.verfied ? "text-[#00913A]" : "text-red-600"}`}>{x.verfied ? "Verified" : "Not Verified"}</span>}

            {x.action} 
    
          </div>
        </div>
      ))}

     </CardLayout>
  )
}

export default Security