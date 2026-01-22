import React from "react";

import img1 from "../../../assets/SaleManagement/SaleManagement_1.png";
import img2 from "../../../assets/SaleManagement/SaleManagement_2.png";
import img3 from "../../../assets/SaleManagement/SaleManagement_3.png";
import img4 from "../../../assets/SaleManagement/SaleManagement_4.png";
import img5 from "../../../assets/SaleManagement/SaleManagement_5.png";
import img6 from "../../../assets/SaleManagement/SaleManagement_6.png";
import img7 from "../../../assets/SaleManagement/SaleManagement_7.png";
import img8 from "../../../assets/SaleManagement/SaleManagement_8.png";

const SaleManagement: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          SECTION 1 : ACCESS
      ============================ */}
      <h1 className="text-2xl font-bold">
        Sales Management
      </h1>
      <p>
        <strong>Sales Management</strong> ko access karne ke liye jaaye:
        <strong> Sales and Exchange → Manage Sales</strong>.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Manage Sales navigation" />

      {/* ===========================
          SALES OVERVIEW
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Sales Overview
      </h2>
      <p>
        Sales Management page aapko complete overview provide karta hai:
      </p>
      <ul className="list-disc ml-6 text-slate-700">
        <li>Sales Summary</li>
        <li>Sales Records</li>
      </ul>
      <img src={img2} className="rounded-md shadow" alt="Sales overview" />

      {/* ===========================
          CREATE NEW SALE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        New Sale Create Karna
      </h2>
      <p>
        Naya sale create karne ke liye
        <strong> New Sale</strong> ya
        <strong> + POS Sale</strong> par click kare.
      </p>
      <img src={img3} className="rounded-md shadow" alt="New sale button" />

      {/* ===========================
          FILTER SALES
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Sales Records Filter Karna
      </h2>
      <p>
        Aap filters apply karke easily kisi specific sale ko search kar sakte ho,
        jaise:
      </p>
      <ul className="list-disc ml-6 text-slate-700">
        <li>Invoice Number</li>
        <li>Customer Name</li>
        <li>Sale By</li>
        <li>Date</li>
      </ul>
      <img src={img4} className="rounded-md shadow" alt="Filter sales" />

      {/* ===========================
          VIEW INVOICE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Invoice View Karna
      </h2>
      <p>
        Kisi particular sale ka invoice dekhne ke liye
        <strong> View</strong> button par click kare.
      </p>
      <img src={img5} className="rounded-md shadow" alt="View invoice" />

      {/* ===========================
          PRINT INVOICE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Invoice Print Karna
      </h2>
      <p>
        Invoice ka physical copy nikalne ke liye
        <strong> Print Invoice</strong> par click kare.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Print invoice" />

      {/* ===========================
          VIEW PRODUCT LIST
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Sale ke Products Dekhna
      </h2>
      <p>
        Kisi sale me include products ko dekhne ke liye
        <strong> List</strong> button par click kare.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Product list in sale" />

      {/* ===========================
          CANCEL SALE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Sale Cancel Karna
      </h2>
      <p>
        Sale cancel karne ke liye
        <strong> Delete</strong> button par click kare.
      </p>
      <p className="text-sm text-slate-600">
        Note: Sale cancel hone ke baad,
        sale status cancelled mark ho jaayega
        aur product sale reverse ho jaayegi.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Cancel sale" />

    </div>
  );
};

export default SaleManagement;
