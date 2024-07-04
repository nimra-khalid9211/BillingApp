import { Button, Card } from "antd"
import { CardData } from "../../../data/cardData"
import { IoMdAdd } from "react-icons/io"
import { emptyCard } from "../../../assets/image"
import { LargeButtons, WhiteButton } from "../../../UI/Buttons"



export default function PaymentMethodCard(){
    return(

    <Card className="rounded-3xl h-96 border bg-[#d3e8f6] border-[#377CF6] ">
    
        <div className="flex items-center font-bold rounded-tl-3xl rounded-tr-3xl bg-white py-4 px-6 justify-between">
            <span>Payment Method</span>

           { CardData.length > 0 &&
           <span className="text-[#377cf6] flex items-center hover:underline cursor-pointer"><IoMdAdd size={15} />
           Add Payment Method</span>}
     </div>

        <div className="pt-4 p-2  rounded-bl-3xl rounded-br-3xl bg-[#d3e8f6]">

                {CardData.length > 0 ? 
                <>
                {CardData.map((x, index)=>(
                <Card key={index} className="rounded-2xl border-[#377CF6] mb-4">

                    <div className="w-full h-16 flex flex-row items-center justify-between px-5">

                    <div className="flex items-center ">
                   {x.icon}    
                  <span className="pl-4 font-bold"> {x.title} </span>
                   </div>

                   <div className="flex flex-col items-end">
                   <span className="text-xs text-[#9095ae]">ending <span className="text-base font-medium text-black">{x.cardNumber}</span></span>
                    <span className={`text-xs ${x.default ? "text-[#3fb46e]" : "text-[#8bc8ff]"}`}>{x.default ? "Default" : "Set as Default"}</span>
                   </div>

                   </div>
                   
                </Card>
            )) }

            <div className="text-center">
                <span className="underline text-[#377cf6] cursor-pointer">View All</span>
            </div> </> :
             <div className="flex flex-col justify-center items-center m-5"> 

             

                <img src={emptyCard} className="w-80 h-48" />

                
                <div className="mt-7">
                    <LargeButtons title={"Add Payment Method"}/>
                </div>

                   
                
                </div>}

        </div>


        </Card>
    )
}