import React, { useState } from 'react';
import { Button, Card } from 'antd';
import { CardData as initialCardData } from '../../../data/cardData';
import { IoMdAdd } from 'react-icons/io';
import { emptyCard } from '../../../assets/image';
import { LargeButtons, WhiteButton } from '../../../UI/Buttons';
import { useNavigate } from 'react-router-dom';

export default function PaymentMethodCard() {

  const navigate = useNavigate();
  const [cardData, setCardData] = useState(initialCardData);

  const handleSetAsDefault = (index) => {
    const newCardData = [...cardData];
    newCardData.forEach((card, idx) => {
      card.default = idx === index;
    });
    const defaultCard = newCardData.splice(index, 1)[0];
    newCardData.unshift(defaultCard);
    setCardData(newCardData);
  };

  return (
    <Card className="rounded-3xl h-[28rem] bg-[#d3e8f6] border-[#377CF6] border">
      <div className="flex items-center font-bold rounded-tl-3xl drop-shadow-lg rounded-tr-3xl bg-white py-4 px-6 justify-between">
        <span>Payment Method</span>

        {cardData.length > 0 && (
          <span className="text-[#377cf6] flex items-center hover:underline cursor-pointer">
            <IoMdAdd size={15} />
            Add Payment Method
          </span>
        )}
      </div>

      <div className="pt-4 py-2 px-3 rounded-bl-3xl rounded-br-3xl bg-[#d3e8f6]">
        {cardData.length > 0 ? (
          <>
            {cardData.map((x, index) => (
              <Card key={index} className="rounded-2xl border-[#377CF6] border mb-4">
                <div className="px-5 py-[0.5rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mt-[10px] w-7 h-6 flex items-center justify-center">{x.icon}</div>
                      <span className="pl-4 font-bold mt-[10px]"> {x.title} </span>
                    </div>
                    <span className="text-xs text-[#9095ae] mt-[10px]">
                      ending{' '}
                      <span className="text-base font-medium text-black">{x.cardNumber}</span>
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <a
                      className={`text-xs ${x.default ? 'text-[#3fb46e]' : 'text-[#1677ff]'} cursor-pointer`}
                      onClick={() => handleSetAsDefault(index)}
                    >
                      {x.default ? 'Default' : 'Set as Default'}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
            <div className="text-center">
              <span className="underline text-[#377cf6] cursor-pointer">View All</span>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center m-5">
            <img src={emptyCard} className="w-80 h-48" />

            <div className="mt-7">
              <LargeButtons
                title={'Add Payment Method'}
                clickEvent={() => navigate('/payment-methods/add-payment')}
              />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
