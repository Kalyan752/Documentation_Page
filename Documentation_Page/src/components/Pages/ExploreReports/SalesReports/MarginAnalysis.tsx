import React from "react";

// Images
import img1 from "../../../../assets/ExploreReports/SalesReports/MarginAnalysis/image1.png";
import img2 from "../../../../assets/ExploreReports/SalesReports/MarginAnalysis/image2.png";
import img3 from "../../../../assets/ExploreReports/SalesReports/MarginAnalysis/image3.png";
import img4 from "../../../../assets/ExploreReports/SalesReports/MarginAnalysis/image4.png";
import img5 from "../../../../assets/ExploreReports/SalesReports/MarginAnalysis/image5.png";
import img6 from "../../../../assets/ExploreReports/SalesReports/MarginAnalysis/image6.png";
import img7 from "../../../../assets/ExploreReports/SalesReports/MarginAnalysis/image7.png";

const MarginAnalysis: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Margin Analysis Report
      </h1>

      <p className="font-semibold">
        How to View Margin Analysis Report:
      </p>

      <p><strong>Step 1:</strong> Login to Retalix Business Suite</p>
      <p>Navigate to <strong>Reports Module</strong></p>
      <p>Click <strong>Reports</strong> from the left menu</p>
      <p>Select <strong>Sales Reports</strong></p>
      <p>Choose <strong>Margin Analysis</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Margin analysis navigation" />

      <p><strong>Step 2:</strong> Margin Analysis Report Screen Opens</p>
      <p>System displays summary cards:</p>
      <p>• <strong>Total Revenue</strong></p>
      <p>• <strong>Total Cost</strong></p>
      <p>• <strong>Total Margin</strong></p>
      <p>• <strong>Average Margin %</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Margin analysis summary cards" />

      <p><strong>Step 3:</strong> Apply Filters (Optional)</p>
      <p>Search by:</p>
      <p>• <strong>Product Name</strong></p>
      <p>• <strong>Category</strong></p>
      <p>Select:</p>
      <p>• <strong>From Date</strong></p>
      <p>• <strong>To Date</strong></p>
      <p>• <strong>Subcategory</strong></p>
      <p>System fetches data based on selected filters</p>
      <img src={img3} className="rounded-md shadow" alt="Margin analysis filters" />

      <p><strong>Step 4:</strong> View Margin Analysis Table</p>
      <p>Table displays:</p>
      <p>• <strong>Product Name</strong></p>
      <p>• <strong>Cost Price</strong></p>
      <p>• <strong>Selling Price</strong></p>
      <p>• <strong>Margin Amount</strong></p>
      <p>• <strong>Margin %</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Margin analysis table" />

      <p><strong>Step 5:</strong> Switch Chart View (Optional)</p>
      <p>View margin data in <strong>Bar Chart</strong> / <strong>Line Chart</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Margin analysis chart" />

      <p><strong>Step 6:</strong> Customize Columns (Optional)</p>
      <p>Click <strong>Columns</strong> to show or hide table fields</p>
      <img src={img6} className="rounded-md shadow" alt="Customize margin columns" />

      <p><strong>Step 7:</strong> Export Report (Optional)</p>
      <p>Click <strong>Export</strong></p>
      <p>Select export format</p>
      <p>Download margin analysis report</p>
      <img src={img7} className="rounded-md shadow" alt="Export margin analysis" />

      <p><strong>Process Completed</strong></p>

    </div>
  );
};

export default MarginAnalysis;
