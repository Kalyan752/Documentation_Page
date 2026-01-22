// src/components/Pages/ThirdPartyPayments.tsx
import React from "react";

import img1 from "../../../assets/ThirdPartyPayments/ThirdPartyPayments_1.png";
import img2 from "../../../assets/ThirdPartyPayments/ThirdPartyPayments_2.png";
import img3 from "../../../assets/ThirdPartyPayments/ThirdPartyPayments_3.png";
import img4 from "../../../assets/ThirdPartyPayments/ThirdPartyPayments_4.png";
import img5 from "../../../assets/ThirdPartyPayments/ThirdPartyPayments_5.png";

const ThirdPartyPayments: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          SECTION 1 : TITLE
      ============================ */}
      <h1 className="text-2xl font-bold">
        Third Party Payments Management
      </h1>

      <p>
        <strong>Third Party Payments Management</strong> ko access karne ke liye
        jaaye:
        <strong> Sales and Exchange → Third Party Payments</strong>.
      </p>

      <img
        src={img1}
        alt="Third Party Payments menu"
        className="rounded-md shadow"
      />

      {/* ===========================
          SECTION 2 : OVERVIEW
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Third Party Payment kya hota hai?
      </h2>

      <p>
        RetailiX me <strong>Third Party Payment</strong> ka matlab hai aisa
        transaction jisme payment directly customer se collect hoti hai aur
        store ke account me jaane ke bajay
        <strong> Vendor (Supplier) ke account</strong> me credit hoti hai.
      </p>

      <p className="text-slate-600 text-sm">
        Example: Aise payment platforms jahan amount directly supplier ko
        settle ho jaata hai.
      </p>

      <img
        src={img2}
        alt="Third party payment overview"
        className="rounded-md shadow"
      />

      {/* ===========================
          SECTION 3 : TRANSACTION RECORD
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Third Party Payment Transactions
      </h2>

      <p>
        Jo bhi sales transactions third party payment method se complete hoti
        hain, wo automatically
        <strong> Third Party Payments</strong> page me record ho jaati hain.
      </p>

      <p>
        Yeh page aapko help karta hai track karne me:
      </p>

      <ul className="list-disc pl-6 text-slate-700 space-y-1">
        <li>Third party payment method se complete hui sales</li>
        <li>Supplier ko directly paid transaction amounts</li>
        <li>Related sales records</li>
      </ul>

      <img
        src={img3}
        alt="Third party payment transaction list"
        className="rounded-md shadow"
      />

      {/* ===========================
          SECTION 4 : SUPPLIER ACCOUNT IMPACT
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Supplier Payments par Impact
      </h2>

      <p>
        Jab third party payment transaction complete hota hai:
      </p>

      <ul className="list-disc pl-6 text-slate-700 space-y-1">
        <li>
          Automatically ek naya transaction create hota hai
          <strong> Manage Supplier Payments</strong> me
        </li>
        <li>
          Paid amount
          <strong> Supplier Account Balance se minus</strong> ho jaata hai
        </li>
        <li>
          Supplier settlement tracking accurate aur transparent rehti hai
        </li>
      </ul>

      <img
        src={img4}
        alt="Supplier payment impact"
        className="rounded-md shadow"
      />

      {/* ===========================
          SECTION 5 : SUMMARY
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Summary
      </h2>

      <p>
        RetailiX me Third Party Payments un cases ko simplify karta hai jahan
        payment directly vendors ko credit hoti hai. System automatically sales
        records aur supplier account balances maintain karta hai, jisse
        transparency bani rehti hai aur financial management accurate hota hai.
      </p>

      <img
        src={img5}
        alt="Third party payment summary"
        className="rounded-md shadow"
      />

    </div>
  );
};

export default ThirdPartyPayments;
