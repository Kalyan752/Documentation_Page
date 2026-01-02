import React from "react";

// Images (order of appearance in document)
import img1 from "../../../assets/Supplier/SuppliersManagement/image1.png";
import img2 from "../../../assets/Supplier/SuppliersManagement/image2.png";
import img3 from "../../../assets/Supplier/SuppliersManagement/image3.png";
import img4 from "../../../assets/Supplier/SuppliersManagement/image4.png";
import img5 from "../../../assets/Supplier/SuppliersManagement/image5.png";
import img6 from "../../../assets/Supplier/SuppliersManagement/image6.png";
import img7 from "../../../assets/Supplier/SuppliersManagement/image7.png";

const SuppliersManagement: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          HOW TO MANAGE SUPPLIERS
      ============================ */}
      <h1 className="text-2xl font-bold">How to Manage Suppliers</h1>

      {/* Step 1 */}
      <h2 className="text-xl font-semibold">Step 1: Open Manage Suppliers</h2>
      <p>Go to “Supplier” and choose “Manage Suppliers.”</p>
      <img src={img1} className="rounded-md shadow" alt="Open Manage Suppliers" />

      {/* To Add Vendor */}
      <p>To Add Vendor</p>

      {/* Step 2 */}
      <h2 className="text-xl font-semibold">Step 2: Go to Add Vendor</h2>
      <p>Click the “Add Vendor” button at the top right corner.</p>
      <img src={img2} className="rounded-md shadow" alt="Add Vendor" />

      {/* Step 3 */}
      <h2 className="text-xl font-semibold">
        Step 3: Search Supplier/Vendor
      </h2>
      <p>Use the Search tab to find specific Supplier/Vendor</p>
      <img src={img3} className="rounded-md shadow" alt="Search Supplier" />

      {/* Step 4 */}
      <h2 className="text-xl font-semibold">Step 4: Change Supplier Status</h2>
      <p>Use the Status tab to update a supplier’s status.</p>
      <img src={img4} className="rounded-md shadow" alt="Supplier Status" />
      <img src={img5} className="rounded-md shadow" alt="Supplier Status Options" />

      {/* Step 5 */}
      <h2 className="text-xl font-semibold">
        Step 5: View, Edit, or Delete Suppliers
      </h2>
      <p>Use the Action button to:</p>
      <p>View Supplier’s details</p>
      <p>Edit Supplier’s information</p>
      <p>Delete a Supplier</p>
      <img src={img6} className="rounded-md shadow" alt="Supplier Actions" />

      {/* Step 6 */}
      <h2 className="text-xl font-semibold">Step 6: Export File (Optional)</h2>
      <p>
        Click “Export CSV” to upload supplier data from (download data in CSV
        (Comma-Separated Values) format.)
      </p>
      <img src={img7} className="rounded-md shadow" alt="Export Suppliers CSV" />

    </div>
  );
};

export default SuppliersManagement;
