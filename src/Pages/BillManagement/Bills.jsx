import React from 'react'
import { MyBills } from '../../Components/Tables'

const Bills = ({from}) => {
  return (
    <div className='mt-10'>
    <MyBills from={from}/>
    </div>
  )
}

export default Bills