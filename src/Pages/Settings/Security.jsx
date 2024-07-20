import React from 'react'
import CardLayout from '../../Components/CardLayout'
import { Button, Switch } from 'antd'
import { WhiteButton } from '../../UI/Buttons.jsx'

const security =[
  {
    heading: "Email Address",
    subHeading: "The email address associated with your account",
    email: "saadhassan09@gmail.com",
    verfied: true,
    action: <WhiteButton customClass={"cancel-btn"} title={"Edit"}/> 
  },
  {
    heading: "Mobile Number",
    subHeading: "The mobile number associated with your account",
    phone: "0331-6725012",
    verfied: true,
    action: <WhiteButton customClass={"cancel-btn"} title={"Edit"}/> 
  },
  {
    heading: "Password",
    subHeading: "Set a unique password to protect your account",
    action: <WhiteButton customClass={"cancel-btn"} customStyle={"10rem"} title={"Change Password"}/> 
  },
  {
    heading: "2 Step Verification",
    subHeading: "Making your account extra secure. Along with your password, you'll need to enter a code.",
    action: <Switch/> 
  },
  {
    heading: "Show Calendar in Navigation Bar",
    subHeading: "Enable / Disable Calendar in Navigation Bar.",
    action: <Switch/> 
  },
]

const Security = () => {
  return (
    <CardLayout title={"Security"}> 
    
      {security.map((x, index)=>(
          <div key={index} className={`mx-10 my-5  grid grid-cols-5 ${index !== security.length - 1 ? "border-b-2" : ""} pb-6`}>
           
            <div className='flex flex-col col-span-2'>
    
            <span className='text-base font-bold '>{x.heading}</span>
            <span className='text-sm text-[#6C7293] mt-1'>{x.subHeading}</span>
    
            </div>

            {x.email ? <div className='justify-self-center'> <span className=' text-base font-semibold'>{x.email}</span></div> :

            x. phone ? <div className='justify-self-center'> <span className=' text-base font-semibold'>{x.phone}</span></div>: ""}

            {x.verfied &&   <div className='justify-self-center'><span className={` text-base font-semibold ${x.verfied ? "text-[#00913A]" : "text-red-600"}`}>{x.verfied ? "Verified" : "Not Verified"}</span></div>}

          <div className={`${!x.email && !x.phone && !x.verfied ? "col-span-3 justify-self-end" :"justify-self-end"}`}> {x.action} </div>
    
        </div>
      ))}

     </CardLayout>
  )
}

export default Security