// src/components/Pages/ExchangeManagement.tsx
import React from "react";

import img1 from "../../../assets/ExchangeManagement/ExchangeManagement_1.png";
import img2 from "../../../assets/ExchangeManagement/ExchangeManagement_2.png";
import img3 from "../../../assets/ExchangeManagement/ExchangeManagement_3.png";
import img4 from "../../../assets/ExchangeManagement/ExchangeManagement_4.png";
import img5 from "../../../assets/ExchangeManagement/ExchangeManagement_5.png";

const ExchangeManagement: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          SECTION 1 : TITLE
      ============================ */}
      <h1 className="text-2xl font-bold">
        Exchange Management
      </h1>

      <p>
        <strong>Exchange Management</strong> access karne ke liye,
        <strong> Sales and Exchange → Manage Exchange</strong> par jaaye.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Exchange management navigation"
      />

      {/* ===========================
          SECTION 2 : OVERVIEW
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Exchange Management kya hota hai?
      </h2>

      <p>
        <strong>Exchange Management</strong> ka use karke
        aap system me kiye gaye
        saare product exchange transactions ko
        <strong> view, track aur manage</strong> kar sakte ho.
      </p>

      <p className="text-slate-600 text-sm">
        Is page par aapko
        har exchange ka consolidated view milta hai,
        jisme uska current status bhi clearly dikhai deta hai.
      </p>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Exchange management overview"
      />

      {/* ===========================
          SECTION 3 : EXCHANGE SUMMARY
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Exchange Summary & Records
      </h2>

      <p>
        <strong>Manage Exchange</strong> page par
        aapko ye details dikhai deti hain:
      </p>

      <ul className="list-disc pl-6 text-slate-700 space-y-1">
        <li>Saare exchange transactions ka summary</li>
        <li>Exchange records ki complete list</li>
        <li>Customer aur invoice se related exchange details</li>
      </ul>

      <img
        src={img3}
        className="rounded-md shadow"
        alt="Exchange records list"
      />

      {/* ===========================
          SECTION 4 : SEARCH & FILTER
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Exchange Records ko Search & Filter kaise kare
      </h2>

      <p>
        Aap exchange transactions ko filter kar sakte ho using:
      </p>

      <ul className="list-disc pl-6 text-slate-700 space-y-1">
        <li><strong>Invoice Number</strong></li>
        <li><strong>Customer Name</strong></li>
        <li><strong>PO Number</strong></li>
      </ul>

      <p className="text-slate-600 text-sm">
        Filters ka use karke
        large data me se bhi
        specific exchange records ko
        easily aur quickly locate kiya ja sakta hai.
      </p>

      <img
        src={img4}
        className="rounded-md shadow"
        alt="Search and filter exchange records"
      />

      {/* ===========================
          SECTION 5 : VIEW & CANCEL
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Exchange ko View ya Cancel kaise kare
      </h2>

      <p>
        <strong>View</strong> button par click karke
        aap complete exchange details dekh sakte ho,
        jaise customer information aur exchanged items.
      </p>

      <p>
        Agar zarurat ho,
        toh aap exchange ko
        <strong> Delete</strong> button par click karke
        cancel bhi kar sakte ho.
      </p>

      <p className="text-slate-600 text-sm">
        Note: Exchange cancel karne par
        transaction reverse ho jaata hai
        aur related inventory aur financial records
        automatically update ho jaate hain.
      </p>

      <img
        src={img5}
        className="rounded-md shadow"
        alt="View and cancel exchange"
      />

      {/* ===========================
          SECTION 6 : SUMMARY
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Summary
      </h2>

      <p>
        RetailiX ka <strong>Exchange Management</strong>
        ek centralized system provide karta hai
        jisse aap exchange transactions ko
        monitor, search, view aur cancel kar sakte ho,
        aur saath hi
        accurate records aur smooth operations
        ensure hote hain.
      </p>

    </div>
  );
};

export default ExchangeManagement;
