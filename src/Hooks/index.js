export function maskCardNumber(cardNumber) {
    // Convert input to string and trim any whitespace
    let cardNumberStr = String(cardNumber).trim();
<<<<<<< HEAD

    console.log(cardNumberStr.length)

    if(cardNumberStr.length <= 11){

=======
    console.log(cardNumberStr.length)
    if(cardNumberStr.length <= 11){
>>>>>>> 38a14a66411eebeae1897090a253fcc4441a780c
    // Check if the input is a valid card number (must be at least 12 digits)
    if (cardNumberStr.length < 11 ) {
        console.error("Mobile number. Must be at 11 digits.");
        return null;
    }
<<<<<<< HEAD
    
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
    
=======
>>>>>>> 38a14a66411eebeae1897090a253fcc4441a780c
    // Extract the last 4 digits
    let lastFourDigits = cardNumberStr.slice(-3);
    // Mask the rest of the digits with '*'
    let masked = cardNumberStr.slice(0, -3).replace(/./g, '*');
    // Format the masked number with spaces in groups of 4
    let formatted = masked.replace(/(.{4})/g, '$1 ');
    // Concatenate with the last 4 digits
    return formatted + lastFourDigits;
} 

else{
    console.log("Invalid card or mobile number")
}
<<<<<<< HEAD
    }


=======
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
else{
    console.log("Invalid card or mobile number")
}
    }
>>>>>>> 38a14a66411eebeae1897090a253fcc4441a780c

export const isOverdue = (dueDate) => {
    const due = new Date(dueDate);
    const today = new Date();
    
    // Set time to midnight for both dates
    due.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return due < today;
};




