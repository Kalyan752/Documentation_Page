import React from "react";

// Images
import img1 from "../../../../assets/ExploreReports/SalesReports/SalesByItems/image1.png";
import img2 from "../../../../assets/ExploreReports/SalesReports/SalesByItems/image2.png";
import img3 from "../../../../assets/ExploreReports/SalesReports/SalesByItems/image3.png";
import img4 from "../../../../assets/ExploreReports/SalesReports/SalesByItems/image4.png";
import img5 from "../../../../assets/ExploreReports/SalesReports/SalesByItems/image5.png";
import img6 from "../../../../assets/ExploreReports/SalesReports/SalesByItems/image6.png";

const SalesByItems: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Sales by Items Report
      </h1>

      <p className="font-semibold">
        How to View Sales by Items Report:
      </p>

      <p><strong>Step 1:</strong> Login to Retalix Business Suite</p>
      <p>Navigate to <strong>Reports Module</strong></p>
      <p>Click <strong>Reports</strong> from the left menu</p>
      <p>Select <strong>Sales Reports</strong></p>
      <p>Choose <strong>Sales by Items</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Sales by items navigation" />

      <p><strong>Step 2:</strong> Sales by Items Report Screen Opens</p>
      <p>System displays summary cards:</p>
      <p>• <strong>Total Items Sold</strong></p>
      <p>• <strong>Total Revenue</strong></p>
      <p>• <strong>Total Quantity</strong></p>
      <p>• <strong>Average Price</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Sales by items summary" />

      <p><strong>Step 3:</strong> Apply Filters (Optional)</p>
      <p>Search by:</p>
      <p>• <strong>Item Name</strong></p>
      <p>• <strong>SKU</strong></p>
      <p>Select:</p>
      <p>• <strong>From Date</strong></p>
      <p>• <strong>To Date</strong></p>
      <p>• <strong>Category</strong></p>
      <p>• <strong>Subcategory</strong></p>
      <p>System fetches data based on selected filters</p>
      <img src={img3} className="rounded-md shadow" alt="Sales by items filters" />

      <p><strong>Step 4:</strong> View Sales by Items Table</p>
      <p>Table displays:</p>
      <p>• <strong>Item Name</strong></p>
      <p>• <strong>SKU</strong></p>
      <p>• <strong>Quantity Sold</strong></p>
      <p>• <strong>Total Revenue</strong></p>
      <p>• <strong>Average Price</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Sales by items table" />

      <p><strong>Step 5:</strong> Switch Chart View (Optional)</p>
      <p>View item-wise sales in <strong>Bar Chart</strong> / <strong>Pie Chart</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Sales by items chart" />

      <p><strong>Step 6:</strong> Export Report (Optional)</p>
      <p>Click <strong>Export</strong></p>
      <p>Download sales by items report</p>
      <img src={img6} className="rounded-md shadow" alt="Export sales by items" />

      <p><strong>Process Completed</strong></p>

    </div>
  );
};

export default SalesByItems;
