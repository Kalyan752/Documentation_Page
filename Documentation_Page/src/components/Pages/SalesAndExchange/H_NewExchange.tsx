import React from "react";

// Images
import img1 from "../../../assets/NewExchange/NewExchange_1.png";
import img2 from "../../../assets/NewExchange/NewExchange_2.png";
import img3 from "../../../assets/NewExchange/NewExchange_4.png";
import img4 from "../../../assets/NewExchange/NewExchange_5.png";
import img5 from "../../../assets/NewExchange/NewExchange_7.png";
import img6 from "../../../assets/NewExchange/NewExchange_8.png";
import img7 from "../../../assets/NewExchange/NewExchange_10.png";
import img8 from "../../../assets/NewExchange/NewExchange_12.png";
import img9 from "../../../assets/NewExchange/NewExchange_13.png";
import img10 from "../../../assets/NewExchange/NewExchange_15.png";

const NewExchange: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          SECTION 1 : TITLE
      ============================ */}
      <h1 className="text-2xl font-bold">
        Naya Exchange Create Karna
      </h1>
      <p>
        <strong>New Exchange</strong> access karne ke liye,
        <strong> Sales and Exchange → New Exchange</strong> par jaaye.
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="New Exchange navigation"
      />

      {/* ===========================
          SECTION 2 : OVERVIEW
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        RetailiX me Exchange kya hota hai?
      </h2>
      <p>
        RetailiX me <strong>Exchange</strong> ka matlab hota hai
        <strong> customer se product purchase karna</strong>
        aur
        <strong> usi customer ko naya product sell karna</strong>,
        wo bhi ek hi transaction ke andar.
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Exchange overview"
      />

      {/* ===========================
          SECTION 3 : SELECT VENDOR
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Vendor Select ya Add Karna
      </h2>
      <p>
        Search box se vendor select kare
        ya phir <strong>“+”</strong> button par click karke
        naya vendor add kare.
      </p>
      <p className="text-sm text-slate-600">
        Note: Agar aap customer se exchange kar rahe ho,
        toh us customer ko pehle
        <strong> Vendor</strong> ke roop me add karna zaroori hai.
      </p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="Select vendor"
      />

      {/* ===========================
          SECTION 4 : PRODUCT PURCHASE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Purchase ke liye Product Select Karna
      </h2>
      <p>
        Customer se receive hua product
        product list me se select kare.
      </p>
      <p className="text-sm text-slate-600">
        Agar product list me available nahi hai,
        toh proceed karne se pehle
        naya product add kar sakte ho.
      </p>
      <img
        src={img4}
        className="rounded-md shadow"
        alt="Purchase product"
      />

      {/* ===========================
          SECTION 5 : PURCHASE DETAILS
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Purchase Details Fill Karna
      </h2>
      <p>
        Purchase se related saari zaroori details enter kare jaise
        <strong> Quantity, Rate, Tax aur Total Amount</strong>.
      </p>
      <img
        src={img5}
        className="rounded-md shadow"
        alt="Purchase details"
      />

      {/* ===========================
          SECTION 6 : SWITCH TO SALE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Sale Mode par Switch Karna
      </h2>
      <p>
        <strong>Switch to Sale</strong> option enable kare
        taaki customer ko
        naya product sell kiya ja sake.
      </p>
      <img
        src={img6}
        className="rounded-md shadow"
        alt="Switch to sale"
      />

      {/* ===========================
          SECTION 7 : SELECT SALE PRODUCT
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Sale ke liye Product Select Karna
      </h2>
      <p>
        Jo product aap sell karna chahte ho,
        use select kare.
        System automatically
        <strong> Inventory</strong> me available
        products search karega.
      </p>
      <img
        src={img7}
        className="rounded-md shadow"
        alt="Sale product"
      />

      {/* ===========================
          SECTION 8 : SALE DETAILS
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Sale Details Fill Karna
      </h2>
      <p>
        Sale ki saari required details fill kare jaise
        <strong> Quantity, Rate, Discount, Tax aur Selling Price</strong>.
      </p>
      <img
        src={img8}
        className="rounded-md shadow"
        alt="Sale details"
      />

      {/* ===========================
          SECTION 9 : PAYMENT
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Payment Complete Karna
      </h2>
      <p>
        <strong>Payment Method</strong> select kare
        aur vendor dwara diya gaya amount enter kare.
      </p>
      <p>
        Exchange complete karne ke liye
        <strong> Collect Payment</strong> button par click kare.
      </p>
      <img
        src={img9}
        className="rounded-md shadow"
        alt="Collect payment"
      />

      {/* ===========================
          SECTION 10 : CONFIRMATION
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Confirm aur Proceed Karna
      </h2>
      <p>
        Exchange finalize karne ke liye
        <strong> Confirm and Proceed</strong> par click kare.
      </p>
      <p>
        Exchange successfully complete hone par
        ek success window display hogi.
      </p>
      <img
        src={img10}
        className="rounded-md shadow"
        alt="Exchange success"
      />

      {/* ===========================
          SECTION 11 : MANAGE EXCHANGE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Exchange Records Manage Karna
      </h2>
      <p>
        Completed exchange records ko
        <strong> Manage Exchange</strong> section me
        dekha ja sakta hai.
      </p>

    </div>
  );
};

export default NewExchange;
