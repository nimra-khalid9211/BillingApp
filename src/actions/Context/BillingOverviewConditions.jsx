import {createContext,useContext,useState} from 'react';


export const BillingCondition = createContext();

export const _BillingCondition = () => useContext(BillingCondition) 

export const BillingConditionProvider = ({children})=>{
     const checkVerfication = true;


     const [tab,setTab] = useState(true);
     const [bills, setBills] = useState();
     const [addBill, setAddBill] = useState(false);
     const [paymentType , setPaymentType] = useState("button1")
     const [checkShown , setCheckShown] = useState(true)
     
  const [dropdown, setDropdown] = useState(false);

     // console.log(checkShown, "billling condition provider");

    return(
        <BillingCondition.Provider value={{tab,setTab, dropdown, checkVerfication, setDropdown, bills, setBills, addBill, setAddBill,paymentType,setPaymentType,checkShown,setCheckShown}}>
            {children}
        </BillingCondition.Provider>
    )
}
export default BillingConditionProvider;



