import jsPDF from 'jspdf'
import React from 'react'
import { logo, master, thankyou } from '../../assets/image';
import { maskCardNumber } from '../../Hooks';



export const PDFTemplate = () => {
  const doc = new jsPDF();

  //logo
  doc.addImage(logo, "PNG", 15, 15, 50, 20);

  //reactangle 
  doc.setFillColor("#E8E7EC")
  doc.roundedRect( 120, 18, 75, 20, 5, 5, "F");
  // title
  doc.setFont("helvetica", "bold")
  doc.setFontSize(20)
  doc.text("Payment Summary", 189, 30, "right");

  //links
  doc.setFont("helvetica", "normal")
  doc.setFontSize(12)
  doc.text("info@bpay.com.pk", 15, 41, null, null, "left");
  doc.text("www.bpay.com.pk", 15, 47, null, null, "left");

  // line
  doc.line(15, 60, 195, 60);
  
  //consumer ID
  doc.setFont("helvetica", "normal")
  doc.setFontSize(12);
  doc.setTextColor("#37474F");
  doc.text("Consumer ID", 15, 70, null, null, "left");

  doc.setTextColor("#000000")
  doc.setFont("helvetica", "bold")
  doc.text("123456789", 15, 80, null, null, "left");

    //Company
    doc.setFont("helvetica", "normal")
    doc.setFontSize(12);
    doc.setTextColor("#37474F");
    doc.text("Company", 100, 70, null, null, "left");
  
    doc.setTextColor("#000000")
    doc.setFont("helvetica", "bold")
    doc.text("Gujranwala Electric Power Company - GEPCO", 100, 80, null, null, "left");

      //Consumer name
      doc.setFont("helvetica", "normal")
      doc.setFontSize(12);
      doc.setTextColor("#37474F");
      doc.text("Consumer Name", 15, 100, null, null, "left");
    
      doc.setTextColor("#000000")
      doc.setFont("helvetica", "bold")
      doc.text("Usman Afzal", 15, 110, null, null, "left");

       //Pay Date
    doc.setFont("helvetica", "normal")
    doc.setFontSize(12);
    doc.setTextColor("#37474F");
    doc.text("Pay Date", 100, 100, null, null, "left");
  
    doc.setTextColor("#000000")
    doc.setFont("helvetica", "bold")
    doc.text("26 June 2024", 100, 110, null, null, "left");

       //Bill Status
      doc.setFont("helvetica", "normal")
      doc.setFontSize(12);
      doc.setTextColor("#37474F");
      doc.text("Bill Status", 15, 130, null, null, "left");

    //reactangle
    doc.setFillColor("#D8FFE7");
    doc.setDrawColor("#24A959");
    doc.roundedRect( 15, 135, 24, 7, 3, 3, "FD");
      doc.setTextColor("#000000");
      doc.setFont("helvetica", "bold")
      doc.text("Paid", 23, 140, null, null, "left");

        //Bill amount
      doc.setFont("helvetica", "normal")
    doc.setFontSize(12);
    doc.setTextColor("#37474F");
    doc.text("Bill Amount", 100, 130, null, null, "left");
  
    doc.setTextColor("#000000")
    doc.setFont("helvetica", "bold")
    doc.text("Rs. 9550.00", 100, 140, null, null, "left");


      //Platform fee
      doc.setFont("helvetica", "normal")
      doc.setFontSize(12);
      doc.setTextColor("#37474F");
      doc.text("Platform fee", 15, 160, null, null, "left");

      doc.setTextColor("#000000");
      doc.setFont("helvetica", "bold")
      doc.text("Rs. 150.00", 15, 170, null, null, "left");


        //paid amount
        doc.setFont("helvetica", "normal")
        doc.setFontSize(12);
        doc.setTextColor("#37474F");
        doc.text("Amount Paid", 100, 160, null, null, "left");
      
        doc.setTextColor("#24A959")
        doc.setFont("helvetica", "bold")
        doc.text("Rs. 9700.00", 100, 170, null, null, "left");


          // line      
          doc.setDrawColor("#000000")
          doc.line(15, 180, 195, 180);


             //Payment Method
      doc.setFont("helvetica", "bold")
      doc.setFontSize(16);
      doc.setTextColor("#37474F");
      doc.text("Payment Method", 15, 200, null, null, "left");

      doc.setFont("helvetica", "normal")
        //master card logo
      doc.addImage(master, "PNG", 15, 205, 25, 13);

      doc.setTextColor("#000000");
      doc.text("Mastercard - Usman Afzal", 42, 213, null, null, "left");

      doc.setTextColor("#37474F");
      doc.text(maskCardNumber("1234567890123456"), 189, 213, "right");

        //reactangle 
  doc.setFillColor("#DBF0FF")
  doc.roundedRect( 15, 240, 180, 35, 5, 5, "F");

  doc.addImage(thankyou, "PNG", 38, 227, 30, 45);

  doc.setFont("helvetica", "bold")
  doc.setFontSize(18)
  doc.text("Simplify your bills with BPay", 70, 260, "left");



  doc.save("payment-summary.pdf");
}

// export default PDFTemplate