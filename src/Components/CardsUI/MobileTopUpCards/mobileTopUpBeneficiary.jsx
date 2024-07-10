export default function MobileTopUpBeneficiary(){
    return(
        <div className="bg-white w-[30%] p-5 rounded-2xl mt-10 drop-shadow-lg">
            <div className="border-b pb-2 font-semibold">Beneficiary</div>
            <div className="font-semibold my-2">
                <label htmlFor="">Name</label>
                <div className="my-2">
                <input type="text" className="outline-none bg-[#E8E7EC] p-1 w-full rounded-lg border border-[#6C7293]" />
                </div>
            </div>
            <div className="flex items-center justify-between my-2">
            <div className="font-semibold mt-2">
                <label htmlFor="">Mobile Operator</label>
                <div className="my-2">
                <input type="text" className="outline-none bg-[#E8E7EC] p-1 w-full rounded-lg border border-[#6C7293]" />
                </div>
            </div>
            <div className="font-semibold mt-2">
                <label htmlFor="">Mobile Name</label>
                <div className="my-2">
                <input type="number" className="outline-none bg-[#E8E7EC] p-1 w-full rounded-lg border border-[#6C7293]" />
                </div>
            </div>
            </div>

        </div>
    )
}