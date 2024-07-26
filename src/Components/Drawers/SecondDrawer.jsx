import { Divider, Drawer } from 'antd'
import React, { useState } from 'react'
import DrawerCardLayout from '../DrawerCardLayout'
import AddPayment from '../AddPayment'
import { BlueButton, WhiteButton } from '../../UI/Buttons'
import { toast } from 'react-toastify'
import { Cancel } from '../../assets/icon'
import PayMethodCard from '../CardsUI/PayMethodCard'
import ChangeAccount from '../CardsUI/ChangeAccount/changeAccount'
import { formatMobileNumber } from '../../Hooks'
import OTPInput from 'react-otp-input'
import { MdOutlineCheck } from 'react-icons/md'
import { FaCircleCheck } from 'react-icons/fa6'

const SecondDrawer = ({from, secondDrawer, setSecondDrawer, changeCard, setChangeCard}) => {
  // console.log(from);

  return (
    <Drawer
    title={
      <div>
        <span className="text-xl text-[#377CF6]">
         {from ==="addCard" ? "Add Payment Method" : from ==="changeCard" ? "Change Payment Method" : ""}
        </span>

        <Divider style={{ borderTop: "1px solid #6C7293" }} />
      </div>
    }
    closeIcon={null}
    placement="right"
    onClose={() => setSecondDrawer(false)}
    open={secondDrawer}
    key="right"
    width={1450}
    className="p-8 relative"
    style={{
      overflow: "unset",
      borderTopLeftRadius: "36px",
      borderBottomLeftRadius: "36px",
      background: "#f6f6f8",
    }}
  >
      <>  

      <div
        onClick={() => setSecondDrawer(false)}
        className="absolute cursor-pointer left-[-1.5rem] z-50 top-[8rem]"
      >
        <img src={Cancel} alt="" />
      </div>

      { from === "addCard" ? <DrawerCardLayout from="secondDrawer">

        <AddPayment />
        
        </DrawerCardLayout> 
        :
        from === "changeCard" ? 
        
        <DrawerCardLayout from="secondDrawer">
          <PayMethodCard from="secondDrawer"/>

          {<ChangeAccount from="secondDrawer"/>}

        </DrawerCardLayout>
        
        : ""
        
      }

        <div className="ml-[17rem] fixed bottom-20">

<WhiteButton
  customClass={"cancel-btn"}
  title={"Cancel"} marginRight={"1rem"}
  clickEvent={() => setSecondDrawer(false)}
/>

<BlueButton
  clickEvent={()=>{setSecondDrawer(false); toast.success("Card added Successfully!")}}
  customClass={"hover-color"}
  title={"Save"}
/>
</div>

        </>


    </Drawer>
  )
}

export default SecondDrawer




export const ChangeNumberDrawer = ({setChangeNumber, changeNumber}) =>{
  const [newNumber, setNewNumber] = useState({number:""});
  const [verify, setVerify] = useState(false);
  const [otp, setOtp] = useState('');

  const changeHandler = (e) =>{
    const {name, value} = e.target;
   
    setNewNumber(prev =>({...prev, [name]:  formatMobileNumber(value)}))
  }

  return(

    <Drawer
    title={
      <div>
        <span className="text-xl text-[#377CF6]">
       Change Mobile Number
        </span>

        <Divider style={{ borderTop: "1px solid #6C7293" }} />
      </div>
    }
    closeIcon={null}
    placement="right"
    onClose={() => setChangeNumber(false)}
    open={changeNumber}
    key="right"
    width={1450}
    className="p-8 relative"
    style={{
      overflow: "unset",
      borderTopLeftRadius: "36px",
      borderBottomLeftRadius: "36px",
      background: "#f6f6f8",
    }}
  >
    <>
     
    <div
        onClick={() => setChangeNumber(false)}
        className="absolute cursor-pointer left-[-1.5rem] z-50 top-[8rem]"
      >
        <img src={Cancel} alt="" />
      </div>

     {otp.length < 4 &&  <DrawerCardLayout heading={"Current Number"} height={"120px"} >

        <div className='flex justify-center pt-5'>

          <div className='w-60 rounded-xl bg-[#F2F2F2] border-[#6C7293] border text-center p-2'>
            <span className='text-base medium'>0302 1100888</span>
            <span></span>
          </div>

        </div>

      </DrawerCardLayout>}

     <DrawerCardLayout heading={"Enter New Number"} height={"250px"} >

        <div className='flex flex-col items-center gap-5 pt-5'>

        <input  name="number" 
        className={`w-60 rounded-xl border-[#6C7293] border text-center p-2 text-base medium ${otp.length === 4 && "bg-[#F2F2F2]"}`}
        value={newNumber.number} onChange={changeHandler}  />
        
        { otp.length < 4 ?  !verify ? 
        <span role='button' className='underline text-sm text-[#329DFF]' 
        onClick={()=>setVerify(true)}>Verify Now</span>
        
        :

        <div>
           <OTPInput className=''
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span className="px-1"> </span>}
      renderInput={(props) => <input {...props} 
      className={`border-2 text-center drop-shadow-lg border-[#176BA3]  text-3xl text-[#176BA3] rounded-lg`}
       style={{
        width: '50px',
        height: "50px",
        fontSize: "28px"
      }} />} />

        <div className='mt-5'>
      <span className='text-[#6C7293] text-sm '>Didn't get a code? <span className='text-[#377CF6]'>Click to resend</span></span>
        </div>

        </div>
      
     :
     <div className='text-[#24A959] medium text-sm flex items-center gap-2'>
      
      <span><FaCircleCheck size={20}/></span>
      
      <span>Number verified</span>
      
      </div>
     }

        </div>

      </DrawerCardLayout>
    
    </>

    </Drawer>

  )
}