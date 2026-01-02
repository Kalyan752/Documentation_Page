import React from "react";

// Images
import img1 from "../../../../assets/ExploreReports/SalesReports/SalesPerformance/image1.png";
import img2 from "../../../../assets/ExploreReports/SalesReports/SalesPerformance/image2.png";
import img3 from "../../../../assets/ExploreReports/SalesReports/SalesPerformance/image3.png";
import img4 from "../../../../assets/ExploreReports/SalesReports/SalesPerformance/image4.png";
import img5 from "../../../../assets/ExploreReports/SalesReports/SalesPerformance/image5.png";
import img6 from "../../../../assets/ExploreReports/SalesReports/SalesPerformance/image6.png";

const SalesPerformance: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Sales Performance Report
      </h1>

      <p className="font-semibold">
        How to Manage Sales Performance Report:
      </p>

      <p><strong>Step 1:</strong> User Login to Retalix Business Suite</p>
      <p>Navigate to <strong>Reports Module</strong></p>
      <p>Click <strong>Reports</strong> from the left navigation menu</p>
      <p>Select <strong>Sales Reports</strong></p>
      <p>Choose <strong>Sales Performance</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Sales Performance navigation" />

      <p><strong>Step 2:</strong> Sales Performance Report Page Loads</p>
      <p>System displays:</p>
      <p>• <strong>Total Sales</strong></p>
      <p>• <strong>Total Revenue</strong></p>
      <p>• <strong>Total Quantity Sold</strong></p>
      <p>• <strong>Average Sale Amount</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Sales performance KPI cards" />

      <p><strong>Step 3:</strong> Choose Report View</p>
      <p>Select <strong>Table Report</strong> or <strong>Graph Report</strong></p>
      <img src={img3} className="rounded-md shadow" alt="Report view selection" />

      <p><strong>Step 4:</strong> Apply Filters (Optional)</p>
      <p>Enter search criteria:</p>
      <p>• <strong>Product Name</strong> / <strong>Invoice Number</strong> / <strong>Customer Name</strong></p>
      <p>Select:</p>
      <p>• <strong>From Date</strong></p>
      <p>• <strong>To Date</strong></p>
      <p>• <strong>Subcategory</strong></p>
      <p>• <strong>Status</strong></p>
      <p>System Fetches Filtered Data</p>
      <p>Sales data updates based on selected filters</p>
      <img src={img4} className="rounded-md shadow" alt="Sales performance filters" />

      <p><strong>Step 5:</strong> View Sales Details Table</p>
      <p>Displays:</p>
      <p>• <strong>Invoice Number</strong></p>
      <p>• <strong>Product Name</strong></p>
      <p>• <strong>Quantity</strong></p>
      <p>• <strong>Paid Amount</strong></p>
      <p>• <strong>Customer Name</strong></p>
      <p>• <strong>Date</strong></p>
      <p>• <strong>Status</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Sales details table" />

      <p><strong>Step 6:</strong> Customize Columns (Optional)</p>
      <p>Click <strong>Columns</strong> to show or hide table fields</p>
      <img src={img6} className="rounded-md shadow" alt="Customize columns" />

      <p><strong>Step 7:</strong> Export Report (Optional)</p>
      <p>Click <strong>Export Report</strong></p>
      <p>Select export format (<strong>CSV / Excel / PDF</strong>)</p>
      <p>Report will <strong>Successfully Exported</strong></p>

    </div>
  );
};

export default SalesPerformance;
