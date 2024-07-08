import React from 'react'
import { SiTicktick } from 'react-icons/si'
import { BlueButton } from '../../UI/Buttons'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import '../../assets/circularprogressbar.css'


const CompleteProfile = () => {
  return (
    <div className="bg-white rounded-3xl drop-shadow-xl my-4">
    <div className="flex items-center justify-between p-8">

        <div className="flex flex-col justify-start">

            <span className='text-[#182A53] text-2xl font-medium'>Profile not Completed</span>
            <span className='text-base text-[#6C7293] pt-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</span>

            <div className="flex gap-3 items-center">

              <div className="bg-[#F8F8F8] text-sm font-medium text-[#6C7293] my-5 flex items-center gap-3 border-2 border-[#E8E7EC] border-1 py-2 px-4 rounded-[14px]">
              <SiTicktick />
              Add your CNIC
              </div>

              <div className="bg-[#F8F8F8] text-sm font-medium text-[#6C7293] my-5 flex items-center gap-3 border-2 border-[#E8E7EC] border-1 py-2 px-4 rounded-[14px]">
              <SiTicktick />
              Mobile Verification
              </div>

            </div>

            <div className='mt-4'>
              <BlueButton title={"Complete Now"} customClass={"btn-custom-class"}/>
            </div>

        </div>

          <div className='relative flex items-center justify-center'>
            <CircularProgressbar value={90} text='90%'/>
            <div className='font-semibold text-base absolute top-[7rem] text-[#182A53]'>Completed</div>
          </div>


    </div>
   </div>
  )
}

export default CompleteProfile