export function maskCardNumber(cardNumber) {
    // Convert input to string and trim any whitespace
    let cardNumberStr = String(cardNumber).trim();


    if(cardNumberStr.length <= 11){

    // Check if the input is a valid card number (must be at least 12 digits)
    if (cardNumberStr.length < 11 ) {
        console.error("Mobile number. Must be at 11 digits.");
        return null;
    }
    
    // Extract the last 4 digits
    let lastFourDigits = cardNumberStr.slice(-3);

    // Mask the rest of the digits with '*'
    let masked = cardNumberStr.slice(0, -3).replace(/./g, '*');

    // Format the masked number with spaces in groups of 4
    let formatted = masked.replace(/(.{4})/g, '$1 ');

    // Concatenate with the last 4 digits
    return formatted + lastFourDigits;
}

else if(cardNumberStr.length <= 16){

    // Check if the input is a valid card number (must be at least 12 digits)
    if (cardNumberStr.length < 16 ) {
        console.error("Card number. Must be atleast 16 digits.");
        return null;
    }
    
    // Extract the last 4 digits
    let lastFourDigits = cardNumberStr.slice(-4);
    // Mask the rest of the digits with '*'
    let masked = cardNumberStr.slice(0, -4).replace(/./g, '*');
    // Format the masked number with spaces in groups of 4
    let formatted = masked.replace(/(.{4})/g, '$1 ');
    // Concatenate with the last 4 digits
    return formatted + lastFourDigits;
} 
    }


// export const isOverdue = (dueDate) => {
//     const due = new Date(dueDate);
//     const today = new Date();
    
//     // Set time to midnight for both dates
//     due.setHours(0, 0, 0, 0);
//     today.setHours(0, 0, 0, 0);

//     return due < today;
// };

export const isOverdue = (dueDate) => {
    const due = new Date(dueDate);
    const today = new Date();
    
    // Set time to midnight for both dates
    due.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
  
    // Calculate the difference in days
    const diffTime = today - due;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    if (diffDays > 5) {
      return { overdue: true, payable: false };
    } else if (diffDays > 0) {
      return { overdue: true, payable: true };
    } else {
      return { overdue: false, payable: true };
    }
  };


export const CNICDashes = (value) =>{
    // Remove all non-digit characters
    value = value.replace(/\D/g, "");

    // Truncate the value if it exceeds 13 digits
  if (value.length > 13) {
    value = value.slice(0, 13);
  }

    //format the input value with dashes
    if(value.length <= 5){
        return value;
    } else if (value.length <= 12){
        return `${value.slice(0,5)}-${value.slice(5,12)}`;
    } else {
        return `${value.slice(0,5)}-${value.slice(5,12)}-${value.slice(12)}`
    }
}

// ***DIGITS FORMAT****

export const formatAmount = (amount) => {
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  
    return formatter.format(amount).replace('PKR', 'Rs');
  };


// export const formatDate = (date) => {
//   const options = { 
//     weekday: 'short', 
//     day: '2-digit', 
//     month: 'short', 
//     year: 'numeric' 
//   };
//   return date.toLocaleDateString('en-US', options);
// }

export const formatDate = (inputDate) => {
  const date = new Date(inputDate); // Create a Date object from inputDate
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dayIndex = date.getDay();
  const day = days[dayIndex];
  const currentDate = date.getDate();
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const year = date.getFullYear();

  return `${day}, ${currentDate} ${month} ${year}`;
};

// 5 days after due date bill not payable
// const isOverdue = (dueDate) => {
//     const due = new Date(dueDate);
//     const today = new Date();
//     const differenceInTime = today.getTime() - due.getTime();
//     const differenceInDays = differenceInTime / (1000 * 3600 * 24);

//     return differenceInDays > 5;
//   };