import { Divider, Drawer } from 'antd'
import React from 'react'
import DrawerCardLayout from '../DrawerCardLayout'
import AddPayment from '../AddPayment'
import { BlueButton, WhiteButton } from '../../UI/Buttons'
import { toast } from 'react-toastify'
import { Cancel } from '../../assets/icon'
import PayMethodCard from '../CardsUI/PayMethodCard'
import ChangeAccount from '../CardsUI/ChangeAccount/changeAccount'

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

        <div className="ml-[7rem] fixed bottom-10">

<WhiteButton
  customClass={"cancel-btn"}
  title={"Cancel"}
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