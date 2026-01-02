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
        To access <strong>Exchange Management</strong>, go to
        <strong> Sales and Exchange → Manage Exchange</strong>.
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
        What is Exchange Management?
      </h2>

      <p>
        <strong>Exchange Management</strong> allows you to view, track, and manage
        all product exchange transactions performed in the system.
      </p>

      <p className="text-slate-600 text-sm">
        This page provides a consolidated view of every exchange along with its
        current status.
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
        The <strong>Manage Exchange</strong> page displays:
      </p>

      <ul className="list-disc pl-6 text-slate-700 space-y-1">
        <li>Summary of all exchange transactions</li>
        <li>Complete list of exchange records</li>
        <li>Customer and invoice-related exchange details</li>
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
        Search & Filter Exchange Records
      </h2>

      <p>
        You can filter exchange transactions using:
      </p>

      <ul className="list-disc pl-6 text-slate-700 space-y-1">
        <li><strong>Invoice Number</strong></li>
        <li><strong>Customer Name</strong></li>
        <li><strong>PO Number</strong></li>
      </ul>

      <p className="text-slate-600 text-sm">
        Filters help quickly locate specific exchange records even in large datasets.
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
        View or Cancel an Exchange
      </h2>

      <p>
        Click the <strong>View</strong> button to see complete exchange details,
        including customer information and exchanged items.
      </p>

      <p>
        If required, you can cancel an exchange by clicking the
        <strong> Delete</strong> button.
      </p>

      <p className="text-slate-600 text-sm">
        Note: Cancelling an exchange will reverse the transaction and update
        related inventory and financial records.
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
        Exchange Management in RetailiX provides a centralized system to monitor,
        search, view, and cancel exchange transactions, ensuring accurate records
        and smooth operational control.
      </p>

    </div>
  );
};

export default ExchangeManagement;
