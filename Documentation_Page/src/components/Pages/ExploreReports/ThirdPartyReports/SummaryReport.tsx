import React from "react";

// Images
import img1 from "../../../../assets/ExploreReports/ThirdPartyReports/SummaryReport/image1.png";
import img2 from "../../../../assets/ExploreReports/ThirdPartyReports/SummaryReport/image2.png";
import img3 from "../../../../assets/ExploreReports/ThirdPartyReports/SummaryReport/image3.png";
import img4 from "../../../../assets/ExploreReports/ThirdPartyReports/SummaryReport/image4.png";
import img5 from "../../../../assets/ExploreReports/ThirdPartyReports/SummaryReport/image5.png";
import img6 from "../../../../assets/ExploreReports/ThirdPartyReports/SummaryReport/image6.png";

const SummaryReport: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Summary Report
      </h1>

      <p className="font-semibold">
        How to manage Third Party Reports (Summary Report):
      </p>

      <p><strong>Step 1:</strong> Login to RetailiX Business Suite</p>
      <p>Navigate to <strong>Reports Module</strong></p>
      <p>→ Click <strong>Reports</strong> from the left navigation menu</p>
      <p>Open <strong>Third-Party Reports</strong></p>
      <p>→ Select <strong>Third Party Reports</strong></p>
      <p>→ Click <strong>Summary Report</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Summary report navigation" />

      <p><strong>Step 2:</strong> Third-Party Transactions Report Page Loads</p>
      <p><strong>View Summary Cards</strong></p>
      <p>• <strong>Total Vendors</strong></p>
      <p>• <strong>Total To Pay</strong></p>
      <p>• <strong>Total Paid</strong></p>
      <p>• <strong>Total Pending</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Summary cards" />

      <p><strong>Step 3:</strong> Search Vendor (Optional)</p>
      <p>Enter vendor <strong>name</strong> or <strong>email</strong> in search box</p>
      <img src={img3} className="rounded-md shadow" alt="Search vendor" />

      <p><strong>Step 4:</strong> Select Date Range (Optional)</p>
      <p>Choose <strong>From date</strong></p>
      <p>Choose <strong>To date</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Date filter" />

      <p><strong>Step 5:</strong> Customize Columns (Optional)</p>
      <p>Click <strong>Columns</strong></p>
      <p>Enable / Disable required columns</p>

      <p className="font-semibold">
        View Transaction Details Table
      </p>
      <p>• <strong>Vendor Name</strong></p>
      <p>• <strong>Email</strong></p>
      <p>• <strong>Total To Pay</strong></p>
      <p>• <strong>Total Paid</strong></p>
      <p>• <strong>Total Pending</strong></p>
      <p>• <strong>Transaction Count</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Transaction details table" />

      <p><strong>Step 6:</strong> Export Report (Optional)</p>
      <p>Click <strong>Export Report</strong></p>
      <p>Select export format</p>
      <img src={img6} className="rounded-md shadow" alt="Export summary report" />

    </div>
  );
};

export default SummaryReport;
