import {createContext,useContext,useState} from 'react';


export const BillingCondition = createContext();

export const _BillingCondition = () => useContext(BillingCondition) 

export const BillingConditionProvider = ({children})=>{

     const [tab,setTab] = useState(true);
     const [bills, setBills] = useState();

    //  console.log(tab, "billling condition provider");

    return(
        <BillingCondition.Provider value={{tab,setTab, bills, setBills}}>
            {children}
        </BillingCondition.Provider>
    )
}
export default BillingConditionProvider;



