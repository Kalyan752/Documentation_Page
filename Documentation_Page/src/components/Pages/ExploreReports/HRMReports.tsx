import React from "react";

// Images
import img1 from "../../../assets/ExploreReports/HRMReports/image1.png";
import img2 from "../../../assets/ExploreReports/HRMReports/image2.png";
import img3 from "../../../assets/ExploreReports/HRMReports/image3.png";
import img4 from "../../../assets/ExploreReports/HRMReports/image4.png";
import img5 from "../../../assets/ExploreReports/HRMReports/image5.png";
import img6 from "../../../assets/ExploreReports/HRMReports/image6.png";
import img7 from "../../../assets/ExploreReports/HRMReports/image7.png";

const HRMReports: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        HRM Reports
      </h1>

      <p className="font-semibold">
        How to manage HRM Report:
      </p>

      <p className="font-semibold">
        Employee Report – (Sub-category)
      </p>

      <p><strong>Step 1:</strong> Navigate to Reports</p>
      <p>Select <strong>HRM Reports</strong></p>
      <p>Click on <strong>Employee Report</strong></p>
      <p>System Loads <strong>Employee Report Dashboard</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Employee report navigation" />

      <p><strong>Step 2:</strong> Display Summary Cards</p>
      <p>• <strong>Total Employees</strong></p>
      <p>• <strong>Active Employees</strong></p>
      <p>• <strong>Inactive Employees</strong></p>
      <p>• <strong>Average Salary</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Employee summary cards" />

      <p><strong>Step 3:</strong> User Applies Filters (Optional)</p>
      <p>• Search by <strong>Name</strong> / <strong>Email</strong> / <strong>Phone</strong></p>
      <p>• Filter by <strong>Status</strong></p>
      <p>• Filter by <strong>Designation</strong></p>
      <p>• Filter by <strong>Performance</strong></p>
      <p>• Customize <strong>Columns</strong></p>
      <p>System Fetches Filtered Employee Data</p>
      <img src={img3} className="rounded-md shadow" alt="Employee report filters" />

      <p><strong>Step 4:</strong> Display Employee Table</p>
      <p>• <strong>Name</strong></p>
      <p>• <strong>Email</strong></p>
      <p>• <strong>Phone</strong></p>
      <p>• <strong>Status</strong></p>
      <p>• <strong>Designation</strong></p>
      <p>• <strong>Role</strong></p>
      <p>• <strong>Salary</strong></p>
      <p>• <strong>Performance</strong></p>
      <p>• <strong>Joining Date</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Employee table" />

      <p><strong>Step 5:</strong> Choose Report View</p>
      <p>• <strong>Table Report</strong> or</p>
      <p>• <strong>Graph Report</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Employee report view" />

      <p><strong>Step 6:</strong> System Processes Selected Action</p>
      <p>• <strong>Export Report</strong> (CSV / Excel / PDF) – Generate and download file</p>
      <p>• <strong>Print Report</strong></p>
      <img src={img6} className="rounded-md shadow" alt="Employee report actions" />

      <p className="font-semibold">
        Attendance Report
      </p>

      <p>Click on <strong>Reports</strong></p>
      <p>Select <strong>HRM Reports</strong></p>
      <p>Click <strong>Attendance Report</strong></p>
      <p>Through this user can manage the <strong>Employee’s Attendance Report</strong></p>
      <img src={img7} className="rounded-md shadow" alt="Attendance report" />

    </div>
  );
};

export default HRMReports;
