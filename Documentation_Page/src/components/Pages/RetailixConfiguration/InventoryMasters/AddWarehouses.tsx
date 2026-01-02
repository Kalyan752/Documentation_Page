import React from "react";

// Images
import img1 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarehouses/image1.png";
import img2 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarehouses/image2.png";
import img3 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarehouses/image3.png";
import img4 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarehouses/image4.png";
import img5 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarehouses/image5.png";
import img6 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarehouses/image6.png";
import img7 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarehouses/image7.png";

const AddWarehouses: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Warehouses
      </h1>

      <p className="font-semibold">
        How to manage Warehouse
      </p>

      <p><strong>Step 1:</strong> Login to <strong>RetailiX Business Suite</strong></p>
      <p>Navigate to <strong>Inventory Masters</strong></p>
      <p>From the left menu, click <strong>Inventory Masters</strong></p>
      <p>Select <strong>Warehouses</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Warehouses navigation" />

      <p><strong>Step 2:</strong> Warehouse Management Screen Opens</p>
      <p>System displays:</p>
      <p>• <strong>Search bar</strong> (Search by warehouse name)</p>
      <p>• <strong>Filter options</strong> (Status, Warehouse Name)</p>
      <p>• <strong>Column settings</strong></p>
      <p>• <strong>Export options</strong> (PDF, Excel)</p>
      <p>• <strong>Add Warehouse</strong> button</p>
      <img src={img2} className="rounded-md shadow" alt="Warehouse management screen" />

      <p><strong>Step 3:</strong> Check Existing Warehouses</p>
      <p><strong>Decision:</strong> Are warehouses available?</p>

      <p className="font-semibold">No</p>
      <p>Display message: <strong>“No warehouses found”</strong></p>
      <p>Prompt user to create a warehouse</p>
      <p>Option to click <strong>Add Warehouse</strong></p>
      <img src={img3} className="rounded-md shadow" alt="No warehouses found" />

      <p className="font-semibold">Yes</p>
      <p>Display warehouse list with details:</p>
      <p>• <strong>Warehouse Name</strong></p>
      <p>• <strong>Contact Person</strong></p>
      <p>• <strong>Phone</strong></p>
      <p>• <strong>City</strong></p>
      <p>• <strong>Created On</strong></p>
      <p>• <strong>Status</strong></p>
      <p>• <strong>Actions</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Warehouse list" />

      <p><strong>Step 4:</strong> Search Warehouses (Optional)</p>
      <p>Enter warehouse name in <strong>search bar</strong></p>
      <p><strong>Apply Filters (Optional)</strong></p>
      <p>• Select <strong>Status</strong></p>
      <p>• Sort by <strong>Warehouse Name</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Search warehouses" />

      <p><strong>Step 5:</strong> Perform Actions</p>
      <p>• View warehouse details</p>
      <p>• Edit warehouse information</p>
      <p>• Activate / Deactivate warehouse</p>
      <img src={img6} className="rounded-md shadow" alt="Warehouse actions" />

      <p><strong>Step 6:</strong> Add New Warehouse (Optional)</p>
      <p>Click <strong>Add Warehouse</strong></p>
      <p>Enter warehouse details</p>
      <p>Save warehouse</p>

      <p><strong>Step 7:</strong> Export Warehouse List (Optional)</p>
      <p>Click <strong>PDF</strong> or <strong>Excel</strong></p>
      <p>Download report</p>
      <img src={img7} className="rounded-md shadow" alt="Export warehouse list" />

      <p className="font-semibold">
        Process Completed
      </p>

    </div>
  );
};

export default AddWarehouses;
