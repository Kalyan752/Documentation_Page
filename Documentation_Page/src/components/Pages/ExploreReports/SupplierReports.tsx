import React from "react";

// Images
import img1 from "../../../assets/ExploreReports/SupplierReports/image1.png";
import img2 from "../../../assets/ExploreReports/SupplierReports/image2.png";
import img3 from "../../../assets/ExploreReports/SupplierReports/image3.png";
import img4 from "../../../assets/ExploreReports/SupplierReports/image4.png";
import img5 from "../../../assets/ExploreReports/SupplierReports/image5.png";
import img6 from "../../../assets/ExploreReports/SupplierReports/image6.png";
import img7 from "../../../assets/ExploreReports/SupplierReports/image7.png";

const SupplierReports: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Supplier Report
      </h1>

      <p className="font-semibold">
        How to manage Supplier Report:
      </p>

      <p><strong>Step 1:</strong> Navigate to Reports</p>
      <p>Click <strong>Reports</strong> from the left-hand menu</p>
      <p>Select <strong>Supplier Reports</strong></p>
      <p>Expand <strong>Supplier Reports</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Supplier reports navigation" />

      <p><strong>Step 2:</strong> Open Supplier Transactions Report</p>
      <p>Click <strong>Supplier Txn Report</strong></p>
      <p>Supplier Transactions Page Loads</p>
      <p>System displays:</p>

      <p><strong>KPI summary cards:</strong></p>
      <p>• <strong>Total Bills (CR)</strong></p>
      <p>• <strong>Total Paid (DR)</strong></p>
      <p>• <strong>Sales Related</strong></p>
      <p>• <strong>Manual Payments</strong></p>
      <p>• <strong>Search bar</strong></p>
      <p>• <strong>Date filters</strong></p>
      <p>• <strong>Transactions table</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Supplier transactions overview" />

      <p><strong>Step 3:</strong> Select Report View (Optional)</p>
      <p>Choose:</p>
      <p>• <strong>Table Report</strong></p>
      <p>• <strong>Graph Report</strong></p>
      <img src={img3} className="rounded-md shadow" alt="Supplier report view options" />

      <p><strong>Step 4:</strong> Search Supplier / Transaction (Optional)</p>
      <p>Search by:</p>
      <p>• <strong>Supplier name</strong></p>
      <p>• <strong>Email</strong></p>
      <p>• <strong>PO number</strong></p>
      <p>• <strong>Reference number</strong></p>

      <p><strong>Apply Date Filters (Optional)</strong></p>
      <p>Select:</p>
      <p>• <strong>From date</strong></p>
      <p>• <strong>To date</strong></p>

      <p>System Processes Data</p>
      <p>Fetches supplier transaction history</p>
      <p>Calculates running balances</p>
      <img src={img4} className="rounded-md shadow" alt="Supplier search and filters" />

      <p><strong>Step 5:</strong> View Supplier Transactions</p>
      <p>Displays:</p>
      <p>• <strong>Date</strong></p>
      <p>• <strong>Supplier</strong></p>
      <p>• <strong>Reference #</strong></p>
      <p>• <strong>Transaction Type</strong></p>
      <p>• <strong>Amount</strong></p>
      <p>• <strong>Paid Amount</strong></p>
      <p>• <strong>Balance</strong></p>
      <p>• <strong>Items</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Supplier transactions table" />

      <p><strong>Step 6:</strong> Customize Columns (Optional)</p>
      <p>Show / hide columns as required</p>
      <img src={img6} className="rounded-md shadow" alt="Customize supplier report columns" />

      <p><strong>Step 7:</strong> Export Report (Optional)</p>
      <p>Click <strong>Export Report</strong></p>
      <p>Select export format (<strong>CSV / Excel / PDF</strong>)</p>
      <p>Report will be <strong>Downloaded Successfully</strong></p>
      <img src={img7} className="rounded-md shadow" alt="Export supplier report" />

    </div>
  );
};

export default SupplierReports;
