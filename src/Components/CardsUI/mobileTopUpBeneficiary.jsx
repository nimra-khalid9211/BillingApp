export default function MobileTopUpBeneficiary(){
    return(
        <div className="bg-white w-[30%] p-5">
            <div>
                <label htmlFor="">Name</label>
                <input type="text" />
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <label htmlFor="">Mobile Operator</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Mobile Number</label>
                    <input type="number" />
                </div>
            </div>

        </div>
    )
}