import React from "react";

// Images
import img1 from "../../../../assets/ExploreReports/ThirdPartyReports/DetailedReport/image1.png";
import img2 from "../../../../assets/ExploreReports/ThirdPartyReports/DetailedReport/image2.png";
import img3 from "../../../../assets/ExploreReports/ThirdPartyReports/DetailedReport/image3.png";
import img4 from "../../../../assets/ExploreReports/ThirdPartyReports/DetailedReport/image4.png";
import img5 from "../../../../assets/ExploreReports/ThirdPartyReports/DetailedReport/image5.png";
import img6 from "../../../../assets/ExploreReports/ThirdPartyReports/DetailedReport/image6.png";
import img7 from "../../../../assets/ExploreReports/ThirdPartyReports/DetailedReport/image7.png";

const DetailedReport: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Detailed Report
      </h1>

      <p className="font-semibold">
        How to manage Third Party Reports (Detailed Report):
      </p>

      <p><strong>Step 1:</strong> Login to RetailiX Business Suite</p>
      <p>Navigate to <strong>Reports Module</strong></p>
      <p>→ Click <strong>Reports</strong> from the left navigation menu</p>
      <p>→ Select <strong>Third Party Reports</strong></p>
      <p>→ Click <strong>Detailed Report</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Detailed report navigation" />

      <p><strong>Step 2:</strong> Detailed Transactions Report Page Loads</p>
      <p><strong>Summary cards displayed:</strong></p>
      <p>• <strong>Total Transactions</strong></p>
      <p>• <strong>Total Amount</strong></p>
      <p>• <strong>Total Paid</strong></p>
      <p>• <strong>Total Pending</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Detailed report summary cards" />

      <p><strong>Step 3:</strong> Search Transaction (Optional)</p>
      <p>Search by:</p>
      <p>• <strong>Vendor Name</strong></p>
      <p>• <strong>Transaction ID</strong></p>
      <p>• <strong>Receipt Number</strong></p>
      <img src={img3} className="rounded-md shadow" alt="Search detailed report" />

      <p><strong>Step 4:</strong> Apply Filters (Optional)</p>
      <p>Select:</p>
      <p>• <strong>From Date</strong></p>
      <p>• <strong>To Date</strong></p>
      <p>• <strong>Status</strong> (Paid / Pending / All)</p>
      <img src={img4} className="rounded-md shadow" alt="Detailed report filters" />

      <p><strong>Step 5:</strong> Customize Columns (Optional)</p>
      <p>Click <strong>Columns</strong></p>
      <p>Select required fields</p>

      <p className="font-semibold">
        View Detailed Transaction Table
      </p>
      <p>• <strong>Vendor Name</strong></p>
      <p>• <strong>Email</strong></p>
      <p>• <strong>Transaction ID</strong></p>
      <p>• <strong>Receipt Number</strong></p>
      <p>• <strong>Total Amount</strong></p>
      <p>• <strong>Paid Amount</strong></p>
      <p>• <strong>Pending Amount</strong></p>
      <p>• <strong>Status</strong></p>
      <p>• <strong>Payment Method</strong></p>
      <p>• <strong>Date</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Detailed transaction table" />

      <p><strong>Step 6:</strong> Export Report (Optional)</p>
      <p>Click <strong>Export Report</strong></p>
      <p>Select export format (<strong>CSV / Excel / PDF</strong>)</p>
      <img src={img6} className="rounded-md shadow" alt="Export detailed report" />

      <p><strong>Step 7:</strong> Print Report (Optional)</p>
      <p>Click <strong>Print</strong> to generate printable report</p>
      <img src={img7} className="rounded-md shadow" alt="Print detailed report" />

    </div>
  );
};

export default DetailedReport;
