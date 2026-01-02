import React from "react";

// Images
import img1 from "../../../../assets/ExploreReports/SalesReports/DailySales/image1.png";
import img2 from "../../../../assets/ExploreReports/SalesReports/DailySales/image2.png";
import img3 from "../../../../assets/ExploreReports/SalesReports/DailySales/image3.png";
import img4 from "../../../../assets/ExploreReports/SalesReports/DailySales/image4.png";
import img5 from "../../../../assets/ExploreReports/SalesReports/DailySales/image5.png";
import img6 from "../../../../assets/ExploreReports/SalesReports/DailySales/image6.png";

const DailySales: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Daily Sales Report
      </h1>

      <p className="font-semibold">
        How to View Daily Sales Report:
      </p>

      <p><strong>Step 1:</strong> Login to Retalix Business Suite</p>
      <p>Navigate to <strong>Reports Module</strong></p>
      <p>Click <strong>Reports</strong> from the left menu</p>
      <p>Select <strong>Sales Reports</strong></p>
      <p>Choose <strong>Daily Sales</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Daily sales navigation" />

      <p><strong>Step 2:</strong> Daily Sales Report Screen Opens</p>
      <p>System displays summary cards:</p>
      <p>• <strong>Total Sales</strong></p>
      <p>• <strong>Total Revenue</strong></p>
      <p>• <strong>Total Quantity</strong></p>
      <p>• <strong>Total Invoices</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Daily sales summary cards" />

      <p><strong>Step 3:</strong> Select Date</p>
      <p>Choose <strong>Date</strong> to view sales for a specific day</p>
      <p>System fetches data based on selected date</p>
      <img src={img3} className="rounded-md shadow" alt="Select date" />

      <p><strong>Step 4:</strong> Apply Filters (Optional)</p>
      <p>Search by:</p>
      <p>• <strong>Invoice Number</strong></p>
      <p>• <strong>Customer Name</strong></p>
      <p>• <strong>Product Name</strong></p>
      <p>Filter by <strong>Status</strong></p>
      <p>Sales data updates automatically</p>
      <img src={img4} className="rounded-md shadow" alt="Daily sales filters" />

      <p><strong>Step 5:</strong> View Daily Sales Table</p>
      <p>Table displays:</p>
      <p>• <strong>Invoice Number</strong></p>
      <p>• <strong>Customer</strong></p>
      <p>• <strong>Items Sold</strong></p>
      <p>• <strong>Total Amount</strong></p>
      <p>• <strong>Payment Status</strong></p>
      <p>• <strong>Date</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Daily sales table" />

      <p><strong>Step 6:</strong> Export Daily Sales Report (Optional)</p>
      <p>Click <strong>Export</strong></p>
      <p>Select required format</p>
      <p>Download daily sales report</p>
      <img src={img6} className="rounded-md shadow" alt="Export daily sales report" />

      <p><strong>Process Completed</strong></p>

    </div>
  );
};

export default DailySales;
