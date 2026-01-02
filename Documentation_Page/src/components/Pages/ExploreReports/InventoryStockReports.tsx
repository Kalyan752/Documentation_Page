import React from "react";

// Images
import img1 from "../../../assets/ExploreReports/InventoryStockReports/image1.png";
import img2 from "../../../assets/ExploreReports/InventoryStockReports/image2.png";
import img3 from "../../../assets/ExploreReports/InventoryStockReports/image3.png";
import img4 from "../../../assets/ExploreReports/InventoryStockReports/image4.png";
import img5 from "../../../assets/ExploreReports/InventoryStockReports/image5.png";
import img6 from "../../../assets/ExploreReports/InventoryStockReports/image6.png";

const InventoryStockReports: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Inventory Stock Report
      </h1>

      <p className="font-semibold">
        How to manage Inventory Report:
      </p>

      <p><strong>Step 1:</strong> Login to RetailiX Business Suite</p>
      <p>Navigate to <strong>Reports Module</strong></p>
      <p>→ Click <strong>Reports</strong> from the left menu</p>
      <p>→ Select <strong>Inventory Reports</strong></p>
      <p>→ Click <strong>Inventory Reports</strong></p>
      <p>→ Select <strong>Inventory Stock Report</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Inventory stock report navigation" />

      <p><strong>Step 2:</strong> Inventory Management Dashboard Loads</p>
      <p>View <strong>Inventory Summary Cards</strong></p>
      <p>• <strong>Total Products</strong></p>
      <p>• <strong>In Stock</strong></p>
      <p>• <strong>Low Stock</strong></p>
      <p>• <strong>Out of Stock</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Inventory summary cards" />

      <p><strong>Step 3:</strong> Choose Report Type</p>
      <p>• Select <strong>Table Report</strong> OR</p>
      <p>• Select <strong>Graph Report</strong></p>
      <img src={img3} className="rounded-md shadow" alt="Choose report type" />

      <p><strong>Step 4:</strong> Apply Filters (Optional)</p>
      <p>• Search by <strong>Product Name</strong></p>
      <p>• Filter by <strong>Status</strong> (All / In Stock / Low Stock / Out of Stock)</p>
      <p>• Filter by <strong>Category</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Inventory filters" />

      <p><strong>Step 5:</strong> Customize Table View (Optional)</p>
      <p>Click <strong>Columns</strong></p>
      <p>Select / Deselect required columns</p>

      <p><strong>View Inventory Stock Details</strong></p>
      <p>• <strong>Product Name</strong></p>
      <p>• <strong>Category</strong></p>
      <p>• <strong>Current Stock</strong></p>
      <p>• <strong>Reorder Level</strong></p>
      <p>• <strong>Purchase Price</strong></p>
      <p>• <strong>Stock Value</strong></p>
      <p>• <strong>Status</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Inventory stock details table" />

      <p><strong>Step 6:</strong> Export Report (Optional)</p>
      <p>Click <strong>Export Report</strong></p>
      <p>Choose required export format</p>
      <img src={img6} className="rounded-md shadow" alt="Export inventory stock report" />

    </div>
  );
};

export default InventoryStockReports;
