import React from 'react'
import { accounts } from '../../data/tables'
import { TikCheck, smallArrow } from '../../assets/icon'
import { maskCardNumber } from '../../Hooks'

const PayMethodCard = ({from}) => {

    console.log(from)
  return (
    <div>
        {accounts.map((account, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 rounded-lg mt-5 bg-white p-5"
          >
            <div className="flex items-center border-r-2">
             {from === "quickPay" && <div>
                <img src={TikCheck} alt="icon" />
              </div>}
              <div className="flex items-center ml-7">
                <div className="border">
                  <img src={account.cardImg} alt="card icon" />
                </div>
                <div className="ml-5 font-semibold text-lg">
                  {account.userName}
                </div>
              </div>
            </div>
            <div className="border-r-2 text-center font-semibold text-lg">
             <span>ending</span>{account.cardNumber}
            </div>
            <div className="border-r-2 text-center">
              Expiry: {account.expiry}
            </div>
            <div className="border-r-2 flex items-center justify-center text-[#377CF6]">
              <div
                className={`rounded-2xl w-[10rem] p-2 text-center ${
                  account.status === "Default" ? "bg-[#DBF0FF]" : "bg-[#fff]"
                }`}
              >
                {account.status}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-[#377CF6] underline">Change Account</div>
              <div className="ml-2">
                <img src={smallArrow} alt="icon" />
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PayMethodCard