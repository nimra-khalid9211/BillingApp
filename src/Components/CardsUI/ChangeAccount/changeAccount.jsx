import { Card } from "antd";
import { useState } from "react";
import { bitmap, easyPaisa, jazzcash, visaCard } from "../../../assets/image";

export default function ChangeAccount(){
    const cards = [
        {
          cardIcon: <img src={bitmap} />,
          cardName: "Master",
          cardNumber: 5221,
          default: true,
        },
        {
          cardIcon: <img src={visaCard} className="p-2" />,
          cardName: "Visa",
          cardNumber: 5221,
          default: false,
        },
        {
          cardIcon: <img src={easyPaisa} className="p-1" />,
          cardName: "Easypaisa",
          cardNumber: 5221,
          default: false,
        },
        {
          cardIcon: <img src={jazzcash} className="p-1" width={40} />,
          cardName: "JazzCash",
          cardNumber: 5221,
          default: false,
        },
      ];
      const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

      const handleCardSelection = (index) => {
        setSelectedCardIndex(index); // Update state with selected card index
      };
    return(
    <>
        {cards.map((x, index) => (
          <Card
            key={index}
            className={`py-3 px-5 rounded-3xl drop-shadow-md ${
              index === selectedCardIndex ? "activeRadio" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  checked={index === selectedCardIndex}
                  onChange={() => handleCardSelection(index)}
                />
                <div className="flex items-center gap-2 ml-2">
                  <div className="bg-[#DBF0FF] px-1 rounded-md">
                    {x.cardIcon}
                  </div>
                  <div className="text-base font-medium">
                    {x.cardName}
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-5">
                <span className="text-base font-medium">
                  <span className="text-xs text-[#6C7293]">ending</span>{" "}
                  {x.cardNumber}
                </span>
                <span
                  className={`text-end text-xs ${
                    x.default ? " text-[#24A959]" : "text-[#329DFF]"
                  }`}
                >
                  {x.default ? "Default" : "Set as Default"}
                </span>
              </div>
            </div>
          </Card>
        ))}
    </>
    )
}