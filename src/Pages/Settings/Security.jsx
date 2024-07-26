import React, { useState } from 'react'
import CardLayout from '../../Components/CardLayout'
import { Button, Card, Switch } from 'antd'
import { WhiteButton } from '../../UI/Buttons.jsx'
import { FaInfo } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { GoCheck } from 'react-icons/go'
import { ChangePasswordModel } from '../../Components/Modals/index.jsx'
import { ChangeNumberDrawer } from '../../Components/Drawers/SecondDrawer.jsx'


const Security = () => {
  const [info, setInfo] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [changeNumber, setChangeNumber] = useState(false);

  const handleClickIndex = (index) => {
    setInfo( index === info ? null : index)
  }

  const security =[
    {
      heading: "Email Address",
      subHeading: "The email address associated with your account",
      email: "saadhassan09@gmail.com",
      verfied: true,
      action: <div className='p-2 bg-white rounded-full text-[var(--blue)] mr-14' role='button' onClick={()=>handleClickIndex(0)}> <FaInfo /> </div>,
      bgcustom:"bg-[#F2F2F2]",
      border:"border-[#C4C4C41]"
    },
    {
      heading: "Mobile Number",
      subHeading: "The mobile number associated with your account",
      phone: "0331-6725012",
      verfied: true,
      action: <WhiteButton customClass={"cancel-btn"} title={"Edit"} clickEvent={()=>setChangeNumber(true)}/> 
    },
    {
      heading: "Password",
      subHeading: "Set a unique password to protect your account",
      action: <WhiteButton customClass={"cancel-btn"} customStyle={"10rem"} clickEvent={()=>setChangePassword(true)} title={"Change Password"}/> 
    },
    {
      heading: "2 Step Verification",
      subHeading: "Making your account extra secure. Along with your password, you'll need to enter a code.",
      action: <Switch className="drop-shadow-xl" checkedChildren={<GoCheck size={15}/>} 
      unCheckedChildren={<RxCross2 size={14}/>} defaultChecked={true} size="small"/>
    },
    {
      heading: "Show Calendar in Navigation Bar",
      subHeading: "Enable / Disable Calendar in Navigation Bar.",
      action: <Switch className="drop-shadow-xl" checkedChildren={<GoCheck size={15}/>} 
      unCheckedChildren={<RxCross2 size={14}/>} defaultChecked={true} size="small"/> 
    },
  ]

  return ( 
   
    <CardLayout title={"Security"}> 
 
      {security.map((x, index)=>(
        <>
        <Card className={`relative mt-2 mx-12 px-10 drop-shadow-md ${x.bgcustom} ${x.border} rounded-3xl`}>
            <div className='h-24 grid grid-cols-4 justify-items-start content-center medium'>

              <div className='flex flex-col justify-start'>
                <span className='text-base'>{x.heading}</span>
                <span className='font-normal text-[#6C7293]'>{x.subHeading}</span>
              </div>

             {x.email && <div className='flex items-center justify-self-center'>
                <span className='text-sm'>{x.email}</span>
              </div>}

              {x.phone && <div className='flex items-center justify-self-center'>
                <span className='text-sm'>{x.phone}</span>
              </div>}

              {x.verfied && <div className='flex items-center justify-self-center'>
                <span className='text-[#00913A] text-base'>{x.verfied ? "Verified" : <span className='text-red-500'>Not Verified</span>}</span>
              </div>}
              
              <div className={`justify-self-end flex items-center ${(!x.email && !x.phone && !x.verfied) && "col-span-3"}`}>
                <span>{x.action}</span>      

              </div>

            </div>

        </Card>

        {index === info && <div className='absolute h-16 rounded-2xl border border-[var(--orange)] z-10 w-96 top-[166px] right-40'>
       <div className='bg-white px-4 flex items-center justify-center  rounded-2xl text-xs w-full h-full text-[#6C7293]'>
       <span> This email cannot be changed. If you need assistance, please contact Bpay 
        <span className='underline text-[#329DFF]'>Customer Support.</span></span>
        </div>
      </div>}
      </>

       ))} 

       <ChangePasswordModel changePassword={changePassword} setChangePassword={setChangePassword}/>

       <ChangeNumberDrawer setChangeNumber={setChangeNumber} changeNumber={changeNumber}/>

     </CardLayout>

  )
}

export default Security