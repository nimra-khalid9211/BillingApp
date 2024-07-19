import { bitmap } from "../assets/image";

export const MyBillList = [
  {
    id: "1",
    type: "internet",
    billname: "PTCL Home",
    consumerID: "123456798",
    consumerName: "Usman Afzal",
    billCompany: "PTCL",
    dueDate: "24 Jul 2024",
    amount: "10,000",
    afterDueAmount: "10,630",
    autoDebit: true,
    payPreference: "Mastercard-5215",
    status: "Unpaid",
    transactionID: "1713875280652-ALFA",
    payDate: "23 May 2024",
    payTime: "10:04 PM",
  },
  {
    id: "2",
    type: "gas",
    billname: "Home Gas",
    consumerID: "123456798",
    consumerName: "Usman Afzal",
    billCompany: "SNGPL",
    dueDate: "15 Jul 2024",
    amount: "7,000",
    afterDueAmount: "7,630",
    autoDebit: false,
    payPreference: "Mastercard-5215",
    status: "Unpaid",
    // actions:""
  },
  {
    id: "3",
    type: "electricity",
    billname: "Home Electricity",
    consumerID: "123456798",
    consumerName: "Usman Afzal",
    billCompany: "GEPCO",
    dueDate: "15 May 2024",
    amount: "5,040",
    afterDueAmount: "5,630",
    autoDebit: false,
    payPreference: "Mastercard-5215",
    status: "Paid",
    transactionID: "1713875280857-BETA",
    payDate: "15 May 2024",
    payTime: "07:04 PM",
  },
  {
    id: "4",
    type: "electricity",
    billname: "Office Eelectricity",
    consumerID: "123456789123456",
    consumerName: "Muhammad Ali Ghafoor Ahmed",
    billCompany: "GEPCO",
    dueDate: "25 Jun 2024",
    amount: "7,000",
    afterDueAmount: "7,630",
    autoDebit: true,
    payPreference: "Mastercard-5215",
    status: "Unpaid",
    // actions:""
  },
  {
    id: "5",
    type: "gas",
    billname: "Home Gas",
    consumerID: "123456798",
    consumerName: "Usman Afzal",
    billCompany: "SNGPL",
    dueDate: "05 May 2024",
    amount: "7,000",
    afterDueAmount: "7,630",
    autoDebit: false,
    payPreference: "Mastercard-5215",
    status: "Unpaid",
    // actions:""
  },
  {
    id: "6",
    type: "gas",
    billname: "Home Gas",
    consumerID: "123456798",
    consumerName: "Usman Afzal",
    billCompany: "SNGPL",
    dueDate: "05 May 2024",
    amount: "7,000",
    afterDueAmount: "7,630",
    autoDebit: false,
    payPreference: "Mastercard-5215",
    status: "Unpaid",
    // actions:""
  },
  {
    id: "7",
    type: "gas",
    billname: "Home Gas",
    consumerID: "123456798",
    consumerName: "Usman Afzal",
    billCompany: "SNGPL",
    dueDate: "05 May 2024",
    amount: "7,000",
    afterDueAmount: "7,630",
    autoDebit: false,
    payPreference: "Mastercard-5215",
    status: "Unpaid",
    // actions:""
  },
  {
    id: "8",
    type: "gas",
    billname: "Home Gas",
    consumerID: "123456798",
    consumerName: "Usman Afzal",
    billCompany: "SNGPL",
    dueDate: "05 May 2024",
    amount: "7,000",
    afterDueAmount: "7,630",
    autoDebit: false,
    payPreference: "JazzCash-5215",
    status: "Unpaid",
    // actions:""
  },
];

export const GovtPaymentList = [
  {
    psid: "089723",
    violationType: "Traffic Signal Violation",
    placeOfViolation: "Faisal Chowk",
    offenseTime: "08 Apr 2024, 11:52 AM",
    penalty: "600",
    dueDate: "08 Apr 2024",
    owner: "Usman Fazal",
    vehicleDetails: "Toyota GLI - AGE 5428",
  },
  {
    psid: "089723",
    violationType: "Traffic Signal Violation",
    placeOfViolation: "Faisal Chowk",
    offenseTime: "08 Apr 2024, 11:52 AM",
    penalty: "600",
    dueDate: "08 Apr 2024",
    owner: "Usman Fazal",
    vehicleDetails: "Toyota GLI - AGE 5428",
  },
];

export const MobileTopUpList = [
  {
    name: "Usman Fazal Jazz",
    mobileOperator: "Jazz",
    mobileNumber: "0302 110 0478",
  },
  {
    name: "Ali Raza Ufone",
    mobileOperator: "Ufone",
    mobileNumber: "0302 110 0478",
  },
  {
    name: "Shaun Abbott",
    mobileOperator: "Zong",
    mobileNumber: "0302 110 0478",
  },
  {
    name: "Shaun Abbott",
    mobileOperator: "Zong",
    mobileNumber: "0302 110 0478",
  },
];

export const MobileTopUpReceipt = {
  transactionID: "135781236578-ALYR",
  topUpName: "Nimra Khalid",
  mobileOperator: "Jazz",
  mobileNumber: "03643848748",
  payDate: "03-Apr-2024",
  payTime: "06:25",
  amount: "100",
};

export const accounts = [
  {
    userName: "User Name 1",
    cardNumber: "1234698694444444",
    expiry: "10/26",
    verify: "verified",
    status: "Default",
    cardImg: bitmap,
  },
  {
    userName: "User Name 2",
    cardNumber: "1234698694444444",
    expiry: "11/27",
    verify: "verified",
    status: "Set as default",
    cardImg: bitmap,
  },
  {
    userName: "User Name 3",
    cardNumber: "12346986944",
    expiry: "11/27",
    verify: "verify now",
    status: "Set as default",
    cardImg: bitmap,
  },
  // Add more account objects as needed
];

//   **********REPORTS TABLES*********

export const transactionReport = [
  {
    month: "June 2024",
    data: [
      {
        consumerID: "52372523",
        consumerName: "nimra kahlid",
        campanyName: "GEPCO",
        account: "Usman Fazal - ending 2416",
        issueDate: "05 June 2024",
        amountDue: "7263",
        payDate: "10 June 2024",
        amountPaid: "1500",
      },
      {
        consumerID: "52372523",
        consumerName: "nimra kahlid",
        campanyName: "GEPCO",
        account: "Usman Fazal - ending 2416",
        issueDate: "05 June 2024",
        amountDue: "7263",
        payDate: "10 June 2024",
        amountPaid: "1500",
      },
    ],
  },
];

export const reporttables = [
  {
    no: "01",
    nickName: "nims",
    consumerID: "52372523",
    consumerName: "nimra kahlid",
    campanyName: "GEPCO",
    dateAdded: "05 May 2023",
  },
];
