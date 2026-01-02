import React from "react";

// Images
import img1 from "../../../assets/Accounts/ManageServicePayment/image1.png";
import img2 from "../../../assets/Accounts/ManageServicePayment/image2.png";
import img3 from "../../../assets/Accounts/ManageServicePayment/image3.png";
import img4 from "../../../assets/Accounts/ManageServicePayment/image4.png";
import img5 from "../../../assets/Accounts/ManageServicePayment/image5.png";
import img6 from "../../../assets/Accounts/ManageServicePayment/image6.png";
import img7 from "../../../assets/Accounts/ManageServicePayment/image7.png";

const ManageServicePayment: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        How to Manage Service Payment
      </h1>

      <p><strong>Step 1:</strong> Login to Retalix Business Suite</p>
      <p>Navigate to <strong>Accounts Module</strong></p>
      <p>From the left menu, click <strong>Accounts</strong></p>
      <p>Select <strong>Manage Service Payment</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Manage Service Payment navigation" />

      <p><strong>Step 2:</strong> Service Transaction Management Screen Opens</p>
      <p>System displays summary cards:</p>
      <p>• <strong>Total Transactions</strong></p>
      <p>• <strong>Total Amount</strong></p>
      <p>• <strong>Total Paid</strong></p>
      <p>• <strong>Fully Paid</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Service payment summary cards" />

      <p><strong>Step 3:</strong> Search Transactions (Optional)</p>
      <p>• Search by <strong>Transaction ID</strong> / <strong>Receipt No</strong> / <strong>Customer</strong></p>
      <p><strong>Apply Filters</strong> (Optional)</p>
      <p>• Select <strong>From Date – To Date</strong></p>
      <p>• Select <strong>Status</strong></p>
      <p>• Select <strong>Payment Method</strong></p>
      <p>• Sort by <strong>Created Date</strong></p>
      <img src={img3} className="rounded-md shadow" alt="Search and filter transactions" />

      <p><strong>Step 4:</strong> View Service Transaction List</p>
      <p>Columns displayed:</p>
      <p>• <strong>Transaction ID</strong></p>
      <p>• <strong>Receipt No</strong></p>
      <p>• <strong>Customer</strong></p>
      <p>• <strong>Total Amount</strong></p>
      <p>• <strong>Paid Amount</strong></p>
      <p>• <strong>Pending Amount</strong></p>
      <p>• <strong>Payment Method</strong></p>
      <p>• <strong>Status</strong></p>
      <p>• <strong>Created Date</strong></p>
      <p>• <strong>Actions</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Service transaction list" />

      <p><strong>Step 5:</strong> Perform Actions</p>
      <p>• <strong>View</strong> transaction details</p>
      <p>• Check <strong>payment status</strong></p>
      <p>• Review <strong>paid</strong> and <strong>pending</strong> amount</p>
      <img src={img5} className="rounded-md shadow" alt="Service transaction actions" />

      <p><strong>Step 6:</strong> Create New Transaction (Optional)</p>
      <p>• Click <strong>+ New Transaction</strong></p>
      <p>• Redirect to <strong>Create Service Payment Transaction</strong> screen</p>
      <img src={img6} className="rounded-md shadow" alt="Create new service transaction" />

      <p><strong>Step 7:</strong> Export Data (Optional)</p>
      <p>• Click <strong>Export</strong></p>
      <p>• Download <strong>transaction report</strong></p>
      <img src={img7} className="rounded-md shadow" alt="Export service payment data" />

      <p><strong>Process Completed</strong></p>

    </div>
  );
};

export default ManageServicePayment;
