import React from "react";

// Images (order of appearance in document)
import img1 from "../../../assets/Accounts/ManageSuppliersPayment/image1.png";
import img2 from "../../../assets/Accounts/ManageSuppliersPayment/image2.png";
import img3 from "../../../assets/Accounts/ManageSuppliersPayment/image3.png";
import img4 from "../../../assets/Accounts/ManageSuppliersPayment/image4.png";
import img5 from "../../../assets/Accounts/ManageSuppliersPayment/image5.png";
import img6 from "../../../assets/Accounts/ManageSuppliersPayment/image6.png";
import img7 from "../../../assets/Accounts/ManageSuppliersPayment/image7.png";

const ManageSuppliersPayment: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          SUPPLIER TRANSACTION
      ============================ */}
      <h1 className="text-2xl font-bold">Supplier Transaction:</h1>

      <p>
        To Access the “Supplier Transactions”, go to
        <strong> “Sale and Exchange” ‘Manage Supplier Payment”</strong>.
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Access Manage Supplier Payment"
      />

      <p>
        This page includes Summary of Supplier Payments and Supplier Payment Transactions.
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Supplier payments summary"
      />

      <p>
        Click on New Payment To make payment to any Supplier.
      </p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="New supplier payment"
      />

      <p>
        To find any Payment Transaction you can search by Transaction ID,
        Receipt, Vendor, or Purchase Source
      </p>
      <img
        src={img4}
        className="rounded-md shadow"
        alt="Search supplier payment"
      />

      <p>
        Click the view button to view and print the Receipt of Payment.
      </p>
      <img
        src={img5}
        className="rounded-md shadow"
        alt="View and print receipt"
      />

      <p>
        Click on Delete Button to Delete the Purchase Record.
      </p>
      <img
        src={img6}
        className="rounded-md shadow"
        alt="Delete supplier payment"
      />

      <p>
        Confirm by Clicking on Delete.
      </p>
      <p>
        <strong>Note:</strong> Deleted Transactions Can be Restored.
      </p>
      <img
        src={img7}
        className="rounded-md shadow"
        alt="Delete confirmation note"
      />

    </div>
  );
};

export default ManageSuppliersPayment;
