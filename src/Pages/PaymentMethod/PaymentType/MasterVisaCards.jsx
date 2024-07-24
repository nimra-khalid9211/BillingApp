
import { InputCustom } from "../../../UI/Inputs";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {  formatCardNumber, formatExpiryDate } from "../../../Hooks";

export default function MasterVisaCard({width}) {

  const location = useLocation().state?.account;

  const [data, setData] = useState({cardNumber:"", expiryDate:"", userName: "", cvv: ""});


  // const [incorrect, setIncorrect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Use the appropriate formatting function based on the input name
    let formattedValue = value;
    if (name === "cardNumber") {
      formattedValue = formatCardNumber(value);
    } else if (name === "expiryDate") {
      formattedValue = formatExpiryDate(value);
    } else if (name === "cvv"){
     
      formattedValue = value.slice(0,3);
    }

    setData(prevState => ({
      ...prevState,
      [name]: formattedValue
    }));
  };

  // const isValidMonthYear = (input) => {
  //   const check = /^(0[1-9]|1[0-2])\/\d{4}$/;
  //   return check.test(input);
  // };

  return (
    <div>
      <div className="border-b pb-2 font-bold mt-10">
        Card Details
      </div>
      <div className={`${width ? width : "w-1/2" }`}>
        <div className={`grid grid-cols-5 gap-4 mt-5`}>

          <div className="col-span-2">
          <InputCustom label={"Name on Card"} value={location?.userName ? location?.userName : data.userName} name={"userName"} onChange={!location?.cardNumber && handleChange}/>
          </div>

          <div className="col-span-2">
          <InputCustom label={"Card Number"} name="cardNumber" value={location?.cardNumber ? location?.cardNumber : data.cardNumber} onChange={!location?.cardNumber && handleChange}/>
          </div>
          

          <div className="col-span-2">
          <InputCustom label={"MM/YYYY"} name={"expiryDate"} onChange={!location?.cardNumber &&  handleChange} value={location?.expiry ? location?.expiry : data.expiryDate}/>
          
          </div>

          <div className="col-span-2">
          <InputCustom label={"CVV"} value={location?.cvv ? location?.cvv : data.cvv} name={"cvv"} onChange={!location?.cardNumber && handleChange}/>
          </div>

        </div>

       { !location &&  <div className="my-5">
          <input type="checkbox" />
          <label htmlFor="" className="ml-3">
            Set as Default
          </label>
        </div>}

      </div>

    </div>
  );
}
