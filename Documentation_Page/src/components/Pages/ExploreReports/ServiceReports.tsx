import React from "react";

// Images
import img1 from "../../../assets/ExploreReports/ServiceReports/image1.png";
import img2 from "../../../assets/ExploreReports/ServiceReports/image2.png";
import img3 from "../../../assets/ExploreReports/ServiceReports/image3.png";
import img4 from "../../../assets/ExploreReports/ServiceReports/image4.png";
import img5 from "../../../assets/ExploreReports/ServiceReports/image5.png";
import img6 from "../../../assets/ExploreReports/ServiceReports/image6.png";
import img7 from "../../../assets/ExploreReports/ServiceReports/image7.png";
import img8 from "../../../assets/ExploreReports/ServiceReports/image8.png";

const ServiceReports: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Service Report
      </h1>

      <p className="font-semibold">
        How to manage Service Report:
      </p>

      <p><strong>Step 1:</strong> Navigate to Reports</p>
      <p>Click <strong>Reports</strong> from the left navigation menu</p>
      <p>Select <strong>Service Reports</strong></p>
      <p>Expand <strong>Service Reports</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Service reports navigation" />

      <p><strong>Step 2:</strong> Open Service Report</p>
      <p>Click <strong>Service Report</strong></p>
      <p>Service Transactions Report Page Loads</p>
      <p>System displays:</p>

      <p><strong>Summary cards:</strong></p>
      <p>• <strong>Total Transactions</strong></p>
      <p>• <strong>Total Amount</strong></p>
      <p>• <strong>Total Paid</strong></p>
      <p>• <strong>Total Pending</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Service report summary cards" />

      <p><strong>Step 3:</strong> Select Report View (Optional)</p>
      <p>Choose:</p>
      <p>• <strong>Table Report</strong></p>
      <p>• <strong>Graph Report</strong></p>
      <img src={img3} className="rounded-md shadow" alt="Service report view options" />

      <p><strong>Step 4:</strong> Search Transactions (Optional)</p>
      <p>Search by:</p>
      <p>• <strong>Customer name</strong></p>
      <p>• <strong>Transaction ID</strong></p>
      <p>• <strong>Receipt number</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Search service transactions" />

      <p><strong>Step 5:</strong> Apply Filters (Optional)</p>
      <p>Select:</p>
      <p>• <strong>From date</strong></p>
      <p>• <strong>To date</strong></p>
      <p>• <strong>Status</strong> (Paid / Pending / All)</p>
      <img src={img5} className="rounded-md shadow" alt="Service report filters" />

      <p><strong>Step 6:</strong> System Fetches Data</p>
      <p>Retrieves service transaction records</p>
      <p>Calculates totals and pending amounts</p>

      <p className="font-semibold">
        View Transaction Details
      </p>
      <p>Displays:</p>
      <p>• <strong>Transaction ID</strong></p>
      <p>• <strong>Receipt No</strong></p>
      <p>• <strong>Amount</strong></p>
      <p>• <strong>Pending Amount</strong></p>
      <p>• <strong>Status</strong></p>
      <p>• <strong>Payment Method</strong></p>
      <p>• <strong>Admin Name & Email</strong></p>
      <p>• <strong>Service Status</strong></p>
      <p>• <strong>Date</strong></p>
      <img src={img6} className="rounded-md shadow" alt="Service transaction details table" />

      <p><strong>Step 7:</strong> Customize Columns (Optional)</p>
      <p>Show or hide columns using <strong>Columns</strong> option</p>
      <img src={img7} className="rounded-md shadow" alt="Customize service report columns" />

      <p><strong>Step 8:</strong> Export Report (Optional)</p>
      <p>Click <strong>Export Report</strong></p>
      <p>Select export format (<strong>CSV / Excel / PDF</strong>)</p>
      <p>Report will be <strong>Downloaded Successfully</strong></p>
      <img src={img8} className="rounded-md shadow" alt="Export service report" />

    </div>
  );
};

export default ServiceReports;
