import React from "react";

// Images
import img1 from "../../../../assets/ExploreReports/SalesReports/TopBottomSellers/image1.png";
import img2 from "../../../../assets/ExploreReports/SalesReports/TopBottomSellers/image2.png";
import img3 from "../../../../assets/ExploreReports/SalesReports/TopBottomSellers/image3.png";
import img4 from "../../../../assets/ExploreReports/SalesReports/TopBottomSellers/image4.png";
import img5 from "../../../../assets/ExploreReports/SalesReports/TopBottomSellers/image5.png";
import img6 from "../../../../assets/ExploreReports/SalesReports/TopBottomSellers/image6.png";
import img7 from "../../../../assets/ExploreReports/SalesReports/TopBottomSellers/image7.png";

const TopBottomSellers: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Top / Bottom Sellers Report
      </h1>

      <p className="font-semibold">
        How to View Top / Bottom Sellers Report:
      </p>

      <p><strong>Step 1:</strong> Login to Retalix Business Suite</p>
      <p>Navigate to <strong>Reports Module</strong></p>
      <p>Click <strong>Reports</strong> from the left menu</p>
      <p>Select <strong>Sales Reports</strong></p>
      <p>Choose <strong>Top / Bottom Sellers</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Top bottom sellers navigation" />

      <p><strong>Step 2:</strong> Top / Bottom Sellers Report Screen Opens</p>
      <p>System displays:</p>
      <p>• <strong>Top Selling Products</strong></p>
      <p>• <strong>Bottom Selling Products</strong></p>
      <p>• <strong>Total Quantity Sold</strong></p>
      <p>• <strong>Total Revenue</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Top bottom sellers summary" />

      <p><strong>Step 3:</strong> Select Report Type</p>
      <p>Choose <strong>Top Sellers</strong> or <strong>Bottom Sellers</strong></p>
      <img src={img3} className="rounded-md shadow" alt="Select report type" />

      <p><strong>Step 4:</strong> Apply Filters (Optional)</p>
      <p>Search by:</p>
      <p>• <strong>Product Name</strong></p>
      <p>• <strong>Category</strong></p>
      <p>Select:</p>
      <p>• <strong>From Date</strong></p>
      <p>• <strong>To Date</strong></p>
      <p>• <strong>Subcategory</strong></p>
      <p>System fetches data based on selected filters</p>
      <img src={img4} className="rounded-md shadow" alt="Top bottom sellers filters" />

      <p><strong>Step 5:</strong> View Sellers Data Table</p>
      <p>Table displays:</p>
      <p>• <strong>Product Name</strong></p>
      <p>• <strong>Category</strong></p>
      <p>• <strong>Quantity Sold</strong></p>
      <p>• <strong>Total Revenue</strong></p>
      <p>• <strong>Contribution %</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Top bottom sellers table" />

      <p><strong>Step 6:</strong> Switch Chart View (Optional)</p>
      <p>View sellers data in <strong>Bar Chart</strong> / <strong>Pie Chart</strong></p>
      <img src={img6} className="rounded-md shadow" alt="Chart view" />

      <p><strong>Step 7:</strong> Export Report (Optional)</p>
      <p>Click <strong>Export</strong></p>
      <p>Download top / bottom sellers report</p>
      <img src={img7} className="rounded-md shadow" alt="Export report" />

      <p><strong>Process Completed</strong></p>

    </div>
  );
};

export default TopBottomSellers;
