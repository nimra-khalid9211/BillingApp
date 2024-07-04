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


export const isOverdue = (dueDate) => {
    const due = new Date(dueDate);
    const today = new Date();
    
    // Set time to midnight for both dates
    due.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return due < today;
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



