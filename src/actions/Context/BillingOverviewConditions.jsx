import {createContext,useContext,useState} from 'react';


export const BillingCondition = createContext();

export const _BillingCondition = () => useContext(BillingCondition) 

export const BillingConditionProvider = ({children})=>{
     const checkVerfication = true;

     const [tab,setTab] = useState(true);
     const [bills, setBills] = useState([]);
     const [addBill, setAddBill] = useState(false);
     const [paymentType , setPaymentType] = useState()
     const [checkShown , setCheckShown] = useState(true);
     const [billingMenu, setBillingMenu] = useState(1)
     const [transactions, setTransactions] = useState(1)
     const [helpMenu, setHelpMenu] = useState(1)
     const [settingMenu, setSettingMenu] = useState(1)
     const [dropdown, setDropdown] = useState(false);
     const [selectedBills, setSelectedBills] = useState([]);
  const [from, setFrom] = useState();

  const [editData, setEditData] = useState();

     // console.log(checkShown, "billling condition provider");

    return(
        
        <BillingCondition.Provider value={{tab,setTab, dropdown,
         checkVerfication, setDropdown, bills, setBills, addBill, setBillingMenu, billingMenu, from, setFrom, 
          setAddBill,paymentType,setPaymentType,checkShown,setCheckShown, setTransactions, transactions,
          setHelpMenu, editData, setEditData, helpMenu, setSettingMenu, settingMenu,selectedBills,setSelectedBills
          }}>

            {children}
            
        </BillingCondition.Provider>
    )
}
export default BillingConditionProvider;



