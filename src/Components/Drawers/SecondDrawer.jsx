import { Divider, Drawer } from 'antd'
import React from 'react'
import DrawerCardLayout from '../DrawerCardLayout'
import AddPayment from '../AddPayment'
import { BlueButton, WhiteButton } from '../../UI/Buttons'
import { toast } from 'react-toastify'

const SecondDrawer = ({secondDrawer, setSecondDrawer}) => {
  return (
    <Drawer
    title={
      <div>
        <span className="text-xl text-[#377CF6]">
         Add Payment Method
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
      <>        <DrawerCardLayout from="secondDrawer">

        <AddPayment />
        
        </DrawerCardLayout>

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