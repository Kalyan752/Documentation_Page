import React from "react";

// Images
import img1 from "../../../assets/ExploreReports/CustomerReports/image1.png";
import img2 from "../../../assets/ExploreReports/CustomerReports/image2.png";
import img3 from "../../../assets/ExploreReports/CustomerReports/image3.png";
import img4 from "../../../assets/ExploreReports/CustomerReports/image4.png";
import img5 from "../../../assets/ExploreReports/CustomerReports/image5.png";
import img6 from "../../../assets/ExploreReports/CustomerReports/image6.png";
import img7 from "../../../assets/ExploreReports/CustomerReports/image7.png";

const CustomerReports: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Customer Report
      </h1>

      <p className="font-semibold">
        How to manage Customer Report:
      </p>

      <p><strong>Step 1:</strong> User Login to Retalix Business Suite</p>
      <p>Navigate to <strong>Reports Module</strong></p>
      <p>Click <strong>Reports</strong> from the left navigation menu</p>
      <p>Open <strong>Customer Reports</strong></p>
      <p>Select <strong>Customer Reports</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Customer reports navigation" />

      <p><strong>Step 2:</strong> Select Customer Report</p>
      <p>Click <strong>Customer Report</strong></p>
      <p>Customer Report Page Loads</p>
      <p>System displays KPI cards:</p>
      <p>• <strong>Total Customers</strong></p>
      <p>• <strong>Active Customers</strong></p>
      <p>• <strong>Total Revenue</strong></p>
      <p>• <strong>Total Orders</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Customer report KPI cards" />

      <p><strong>Step 3:</strong> Choose Report View</p>
      <p>Select <strong>Table Report</strong> or <strong>Graph Report</strong></p>
      <img src={img3} className="rounded-md shadow" alt="Customer report view selection" />

      <p><strong>Step 4:</strong> Apply Filters (Optional)</p>
      <p>Search by <strong>Customer Name</strong> / <strong>Email</strong> / <strong>Phone</strong></p>
      <p>Select:</p>
      <p>• <strong>From Date</strong></p>
      <p>• <strong>To Date</strong></p>
      <p>• <strong>State</strong></p>
      <p>• <strong>Status</strong></p>
      <p>Sort by (e.g., <strong>Total Revenue</strong>)</p>
      <img src={img4} className="rounded-md shadow" alt="Customer report filters" />

      <p><strong>Step 4:</strong> System Processes Customer Data</p>
      <p>Aggregates customer activity, orders, and revenue</p>
      <p><strong>View Customer Details Table</strong></p>
      <p>Displays customer-wise information based on selected columns</p>
      <img src={img5} className="rounded-md shadow" alt="Customer details table" />

      <p><strong>Step 5:</strong> Customize Columns (Optional)</p>
      <p>Click <strong>Columns</strong> to show or hide required fields</p>
      <img src={img6} className="rounded-md shadow" alt="Customize customer report columns" />

      <p><strong>Step 6:</strong> Export Report (Optional)</p>
      <p>Click <strong>Export Report</strong></p>
      <p>Choose export format (<strong>CSV / Excel / PDF</strong>)</p>
      <p>Report will be <strong>Exported Successfully</strong></p>
      <img src={img7} className="rounded-md shadow" alt="Export customer report" />

    </div>
  );
};

export default CustomerReports;
