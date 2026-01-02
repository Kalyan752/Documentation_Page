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
        To access <strong>Third Party Payments Management</strong>, go to
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
        What is Third Party Payment?
      </h2>

      <p>
        <strong>Third Party Payment</strong> in RetailiX refers to a transaction
        where the payment is collected directly from the customer and credited
        to the <strong>Vendor’s (Supplier’s) account</strong>, instead of the
        store’s account.
      </p>

      <p className="text-slate-600 text-sm">
        Example: Payments made through platforms where the amount is settled
        directly to the supplier.
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
        All sales transactions completed using a third party payment method are
        automatically recorded in the
        <strong> Third Party Payments</strong> page.
      </p>

      <p>This page helps you track:</p>

      <ul className="list-disc pl-6 text-slate-700 space-y-1">
        <li>Sales completed using third party payment methods</li>
        <li>Transaction amounts paid directly to suppliers</li>
        <li>Associated sales records</li>
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
        Impact on Supplier Payments
      </h2>

      <p>
        Once a third party payment transaction is completed:
      </p>

      <ul className="list-disc pl-6 text-slate-700 space-y-1">
        <li>
          A new transaction is automatically created in
          <strong> Manage Supplier Payments</strong>
        </li>
        <li>
          The paid amount is
          <strong> subtracted from the Supplier Account Balance</strong>
        </li>
        <li>
          The transaction ensures accurate supplier settlement tracking
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
        Third Party Payments in RetailiX simplify payment tracking when money is
        directly credited to vendors. The system automatically maintains sales
        records and supplier account balances, ensuring transparency and
        accurate financial management.
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
