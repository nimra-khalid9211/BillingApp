import React from 'react'
import { accounts } from '../../../data/tables'
import { TikCheck, smallArrow } from '../../../assets/icon'
import { maskCardNumber } from '../../../Hooks'
import { Card } from 'antd'
import { bitmap } from '../../../assets/image'
import { FaAngleRight } from 'react-icons/fa'

const PayMethodCard = ({from}) => {

    // console.log(from)

  return (
    <Card>

      <div className='grid grid-cols-8 my-5 content-center'>

        <div className='col-span-2 border-r '>

          <div className='flex justify-around items-center'>
          <img src={bitmap} alt="" />
          <span className='pr-5'>Usman Afzal</span>
          </div>

        </div>

        <div className='col-span-2 border-r flex items-center justify-center'>
          <span className='text-xs text-[#6C7293]'>ending</span> 
          <span className=''>5216</span>
        </div>

        <div className='col-span-2 border-r flex items-center justify-center'>
          <span className=' text-[#377CF6] bg-[#DBF0FF] px-6 py-2 rounded-lg font-medium'>Default</span>
        </div>

        <div className='col-span-2 flex items-center justify-center'>
          <span className=' text-[#377CF6] underline rounded-lg font-medium pr-1'>
            Change Account 
            </span>
            <span className='text-[#377CF6] bg-[#E8E7EC] rounded-full'><FaAngleRight size={15}/></span>
        </div>

      </div>

    </Card> 
  )
}

export default PayMethodCard