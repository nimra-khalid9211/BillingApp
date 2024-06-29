import {createContext,useContext,useState} from 'react';


export const BillingCondition = createContext();

export const _BillingCondition = () => useContext(BillingCondition) 

export const BillingConditionProvider = ({children})=>{

     const [tab,setTab] = useState(true);
     const [bills, setBills] = useState();
     const [paymentType, setPaymentType] = useState("button1");
     const [checkShown , setCheckShown] = useState(true)

     console.log(checkShown, "billling condition provider");

    return(
        <BillingCondition.Provider value={{tab,setTab, bills, setBills,paymentType,setPaymentType,checkShown , setCheckShown}}>
            {children}
        </BillingCondition.Provider>
    )
}
export default BillingConditionProvider;



