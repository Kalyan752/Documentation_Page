import React from "react";

import img2 from "../../../assets/POSSale/POSSale_2.png";
import img3 from "../../../assets/POSSale/POSSale_3.png";
import img4 from "../../../assets/POSSale/POSSale_4.png";
import img5 from "../../../assets/POSSale/POSSale_5.png";
import img6 from "../../../assets/POSSale/POSSale_6.png";
import img7 from "../../../assets/POSSale/POSSale_7.png";
import img8 from "../../../assets/POSSale/POSSale_8.png";
import img9 from "../../../assets/POSSale/POSSale_9.png";
import img10 from "../../../assets/POSSale/POSSale_12.png";
import img11 from "../../../assets/POSSale/POSSale_13.png";
import img12 from "../../../assets/POSSale/POSSale_14.png";

const POSSale: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          SECTION 1 : TITLE
      ============================ */}
      <h1 className="text-2xl font-bold">
        POS Sale Create Karna
      </h1>

      <p>
        Aap <strong>POS Sale</strong> ko do tarikon se access kar sakte ho:
      </p>

      <ul className="list-disc pl-6 text-slate-700 space-y-1">
        <li>Dashboard par diye gaye shortcut ka use karke</li>
        <li>
          Ya phir navigate kare
          <strong> Sales and Exchange → POS Sale</strong>
        </li>
      </ul>

      {/* ===========================
          SECTION 2 : POS SALE SECTIONS
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        POS Sale Sections
      </h2>

      <p>
        POS Sale screen ko teen main sections me divide kiya gaya hai:
      </p>

      <ul className="list-disc pl-6 text-slate-700 space-y-1">
        <li>POS Category</li>
        <li>Sale ke liye available Products</li>
        <li>Customer aur Billing section</li>
      </ul>

      <img src={img2} className="rounded-md shadow" alt="POS sections" />

      {/* ===========================
          SECTION 3 : CUSTOMER SELECTION
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Customer Select ya Add Karna
      </h2>

      <p>
        Search box se existing customer ko select kare.
      </p>

      <img src={img3} className="rounded-md shadow" alt="Customer selection" />

      <p>
        Agar customer naya hai, toh <strong>“+”</strong> button par click karke
        naya customer add kare.
      </p>

      <img src={img4} className="rounded-md shadow" alt="Add new customer" />

      {/* ===========================
          SECTION 4 : PRODUCT SELECTION
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Products Select Karna
      </h2>

      <p>
        Jo products aap sell kar rahe ho unhe select kare.  
        Selected products automatically sale list me add ho jaate hain.
      </p>

      <img src={img5} className="rounded-md shadow" alt="Product selection" />

      {/* ===========================
          SECTION 5 : SALES DETAILS
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Sales Details Fill Karna
      </h2>

      <p>
        Product table ko scroll kare aur saari required details fill kare
        jaise quantity, price, discount aur tax.
      </p>

      <img src={img6} className="rounded-md shadow" alt="Sales details" />

      {/* ===========================
          SECTION 6 : PAYMENT METHOD
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Payment Method Select Karna
      </h2>

      <p>
        Sale complete karne ke liye appropriate
        <strong> Payment Method</strong> par click kare.
      </p>

      <img src={img7} className="rounded-md shadow" alt="Payment method" />

      {/* ===========================
          SECTION 7 : COLLECT PAYMENT
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Payment Collect Karna
      </h2>

      <p>
        Payment method select karne ke baad
        <strong> Collect Payment</strong> par click kare.
      </p>

      <img src={img8} className="rounded-md shadow" alt="Collect payment" />

      {/* ===========================
          SECTION 8 : CONFIRM SALE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Confirm aur Proceed Karna
      </h2>

      <p>
        POS sale complete karne ke liye
        <strong> Confirm and Proceed</strong> par click kare.
      </p>

      <img src={img9} className="rounded-md shadow" alt="Confirm sale" />

      {/* ===========================
          SECTION 9 : SUCCESS MESSAGE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Success Notification
      </h2>

      <p>
        Payment successful hone ke baad,
        aapko ek confirmation message milega:
        <strong> “Sale Added Successfully”.</strong>
      </p>

      <img src={img10} className="rounded-md shadow" alt="Success message" />

      {/* ===========================
          SECTION 10 : SAVE AS DRAFT
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Sale ko Draft me Save Karna
      </h2>

      <p>
        Agar aap sale baad me complete karna chahte ho,
        toh sales data ko <strong>Draft</strong> ke roop me save kar sakte ho.
      </p>

      <img src={img11} className="rounded-md shadow" alt="Save as draft" />

      {/* ===========================
          SECTION 11 : RESTORE DRAFT
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Saved Draft Restore Karna
      </h2>

      <p>
        Saved draft ko select karke saari sale details restore ki ja sakti hain.
        Restore hone ke baad, payment method select karke sale proceed kar sakte ho.
      </p>

      <img src={img12} className="rounded-md shadow" alt="Restore draft" />

    </div>
  );
};

export default POSSale;
