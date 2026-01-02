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
      <h1 className="text-2xl font-bold">Sales Management</h1>
      <p>
        To access <strong>Sales Management</strong>, go to  
        <strong> Sales and Exchange → Manage Sales</strong>.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Manage Sales navigation" />

      {/* ===========================
          SALES OVERVIEW
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Sales Overview</h2>
      <p>
        The Sales Management page provides a complete overview of:
      </p>
      <ul className="list-disc ml-6 text-slate-700">
        <li>Sales Summary</li>
        <li>Sales Records</li>
      </ul>
      <img src={img2} className="rounded-md shadow" alt="Sales overview" />

      {/* ===========================
          CREATE NEW SALE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Create a New Sale</h2>
      <p>
        Click on <strong>New Sale</strong> or <strong>+ POS Sale</strong> to create
        a new sales entry.
      </p>
      <img src={img3} className="rounded-md shadow" alt="New sale button" />

      {/* ===========================
          FILTER SALES
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Filter Sales Records</h2>
      <p>
        You can easily find a specific sale by applying filters such as:
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
      <h2 className="text-xl font-semibold mt-6">View Invoice</h2>
      <p>
        Click on the <strong>View</strong> button to open and review the invoice
        for a particular sale.
      </p>
      <img src={img5} className="rounded-md shadow" alt="View invoice" />

      {/* ===========================
          PRINT INVOICE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Print Invoice</h2>
      <p>
        Click on <strong>Print Invoice</strong> to print a physical copy of the invoice.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Print invoice" />

      {/* ===========================
          VIEW PRODUCT LIST
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">View Products in Sale</h2>
      <p>
        Click on the <strong>List</strong> button to view the products included
        in a particular sale.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Product list in sale" />

      {/* ===========================
          CANCEL SALE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Cancel a Sale</h2>
      <p>
        To cancel a sale, click on the <strong>Delete</strong> button.
      </p>
      <p className="text-sm text-slate-600">
        Note: Once cancelled, the sale will be marked as cancelled and the
        product sale will be reversed.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Cancel sale" />

    </div>
  );
};

export default SaleManagement;
