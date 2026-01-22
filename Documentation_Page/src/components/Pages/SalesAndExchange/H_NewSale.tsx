// src/components/Pages/NewSale.tsx
import React from "react";

import img1 from "../../../assets/NewSale/NewSale_1.png";
import img2 from "../../../assets/NewSale/NewSale_2.png";
import img3 from "../../../assets/NewSale/NewSale_3.png";
import img4 from "../../../assets/NewSale/NewSale_4.png";
import img5 from "../../../assets/NewSale/NewSale_5.png";
import img6 from "../../../assets/NewSale/NewSale_6.png";
import img7 from "../../../assets/NewSale/NewSale_7.png";
import img8 from "../../../assets/NewSale/NewSale_8.png";
import img9 from "../../../assets/NewSale/NewSale_9.png";
import img11 from "../../../assets/NewSale/NewSale_11.png";

const NewSale: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          SECTION 1 : TITLE
      ============================ */}
      <h1 className="text-2xl font-bold">
        Nayi Sale Create Karna
      </h1>
      <p>
        New Sale access karne ke liye jaaye  
        <strong> Sales and Exchange → New Sale</strong>
      </p>
      <img src={img1} className="rounded-md shadow" alt="New Sale navigation" />

      {/* ===========================
          CUSTOMER SELECTION
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Customer Select ya Add Karna
      </h2>
      <p>
        Search box se existing customer select kare
        ya phir <strong>“+”</strong> button par click karke
        naya customer add kare.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Customer selection" />

      {/* ===========================
          PRODUCT SELECTION
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Products Select Karna
      </h2>
      <p>
        List me se products select kare.  
        <strong> Note:</strong> Products available inventory se search hote hain.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Product selection" />

      {/* ===========================
          MULTIPLE PRODUCTS
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Multiple Products Add Karna
      </h2>
      <p>
        Ek hi sale me multiple products sell karne ke liye
        <strong> Add Row</strong> par click kare.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Add row" />

      {/* ===========================
          DELETE PRODUCT ROW
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Product Row Remove Karna
      </h2>
      <p>
        Agar kisi product row ko remove karna ho,
        toh <strong>Delete</strong> icon par click kare.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Delete row" />

      {/* ===========================
          PRODUCT DETAILS
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Product Details Enter Karna
      </h2>
      <p>
        <strong>Unit, Quantity, Rate, Discount, Tax</strong> aur
        <strong> Selling Price</strong> enter kare.
      </p>
      <p className="text-sm text-slate-600">
        Note: Selling price automatically
        purchase entry se fill ho jaata hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Product details" />

      {/* ===========================
          PAYMENT METHOD
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Payment Method Select Karna
      </h2>
      <p>
        Appropriate <strong>Payment Method</strong> choose kare,
        jaise Cash, Card, UPI ya Net Banking.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Payment method" />

      {/* ===========================
          COLLECT PAYMENT
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Payment Collect Karna
      </h2>
      <p>
        Customer ke dwara diya gaya amount enter kare
        aur <strong> Collect Payment</strong> par click kare.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Collect payment" />

      {/* ===========================
          CONFIRM PAYMENT
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Confirm aur Proceed Karna
      </h2>
      <p>
        Sale finalize karne ke liye
        <strong> Confirm and Proceed</strong> par click kare.
      </p>
      <img src={img9} className="rounded-md shadow" alt="Confirm payment" />

      {/* ===========================
          SUCCESS MESSAGE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Success Notification
      </h2>
      <p>
        Payment successful hone ke baad
        screen par confirmation notification show hota hai.
      </p>

      {/* ===========================
          MANAGE SALES
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Manage Sales me Sale Dekhna
      </h2>
      <p>
        Aap create ki gayi sale ko
        <strong> Manage Sales</strong> section me dekh sakte ho.
      </p>
      <img src={img11} className="rounded-md shadow" alt="Manage sales" />

    </div>
  );
};

export default NewSale;
