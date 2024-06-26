import { Button, Divider, Drawer } from 'antd'
import React from 'react'

const AddBillDrawer = ({addBill, setAddBill}) => {
  return (
    <Drawer 
        title={
            <div>
              {/* <Button onClick={() => setAddBill(false)}>Close</Button> */}

              <span className='text-xl text-[#377CF6]'>Add Bill</span>
              <Divider style={{borderTop:"1px solid #6C7293"}}/>
            </div>
          }

          closeIcon = {null}
          
        placement="right"
        // closable={addBill}
        onClose={()=>setAddBill(false)}
        open={addBill}
        key="right"
        size='large'
        className='rounded-tl-[80px] rounded-bl-[80px] p-8'
      >

        <span className='text-[#646464] font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur labore.</span>
       

     <div>
        <label className='relative'>

            <input type="text" className='h-20 w-96 px-6 text-4xl bg-black border-2 rounded-lg
            border-white border-opacity-50 outline-none focus:border-blue-500
            focus:text-white transition duration-200'/>

            <span className='text-4xl text-white text-opacity-80 
            absolute left-0 my-4 mx-6 px-2 transition duration-200 input-text'>
                Input
            </span>
        </label>
     </div>


      </Drawer>
  )
}

export default AddBillDrawer