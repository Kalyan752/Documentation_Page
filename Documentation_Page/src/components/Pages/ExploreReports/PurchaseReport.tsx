import React from "react";

// Images
import img1 from "../../../assets/ExploreReports/PurchaseReports/image1.png";
import img2 from "../../../assets/ExploreReports/PurchaseReports/image2.png";
import img3 from "../../../assets/ExploreReports/PurchaseReports/image3.png";
import img4 from "../../../assets/ExploreReports/PurchaseReports/image4.png";
import img5 from "../../../assets/ExploreReports/PurchaseReports/image5.png";
import img6 from "../../../assets/ExploreReports/PurchaseReports/image6.png";

const PurchaseReports: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Purchase Report
      </h1>

      <p className="font-semibold">
        How to manage Purchase Report:
      </p>

      <p><strong>Step 1:</strong> User Login to Retalix Business Suite</p>
      <p>Navigate to <strong>Reports Module</strong></p>
      <p>Click <strong>Reports</strong> from the left sidebar</p>
      <img src={img1} className="rounded-md shadow" alt="Reports module navigation" />

      <p><strong>Step 2:</strong> Click <strong>Purchase Transactions</strong></p>
      <p>Purchase Transactions Page Loads</p>
      <p>System displays:</p>
      <p><strong>KPI summary cards:</strong></p>
      <p>• <strong>Total Transactions</strong></p>
      <p>• <strong>Half Payments</strong></p>
      <p>• <strong>Pending</strong></p>
      <p>• <strong>Received</strong></p>
      <p>• <strong>Total Amount</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Purchase report KPI cards" />

      <p><strong>Step 4:</strong> Choose Report View (If Available)</p>
      <p>• <strong>Table Report</strong></p>
      <p>• <strong>Graph Report</strong></p>
      <img src={img3} className="rounded-md shadow" alt="Purchase report view options" />

      <p><strong>Step 5:</strong> Apply Filters (Optional)</p>
      <p>• <strong>Date range</strong> (From / To)</p>
      <p>• <strong>Category</strong> / <strong>Subcategory</strong> / <strong>Status</strong></p>
      <p>• Search by <strong>name</strong>, <strong>invoice</strong>, <strong>product</strong>, <strong>customer</strong>, etc.</p>
      <p>System Processes Data</p>
      <p>Fetches and calculates data based on filters</p>
      <p><strong>View Report Data</strong></p>
      <p>Displays filtered results in table or graph format</p>
      <img src={img4} className="rounded-md shadow" alt="Purchase report filters" />

      <p><strong>Step 6:</strong> Customize Columns (Optional)</p>
      <p>Show or hide required columns</p>
      <img src={img5} className="rounded-md shadow" alt="Customize purchase report columns" />

      <p><strong>Step 8:</strong> Export Report (Optional)</p>
      <p>Click <strong>Export Report</strong></p>
      <p>Select format (<strong>CSV / Excel / PDF</strong>)</p>
      <p>Report will be <strong>Downloaded Successfully</strong></p>
      <img src={img6} className="rounded-md shadow" alt="Export purchase report" />

    </div>
  );
};

export default PurchaseReports;
