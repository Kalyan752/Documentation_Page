import React from "react";

// Images (order of appearance in document)
import img1 from "../../../assets/Supplier/AddSupplier/image1.png";
import img2 from "../../../assets/Supplier/AddSupplier/image2.png";

const AddSupplier: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          HOW TO ADD SUPPLIER
      ============================ */}
      <h1 className="text-2xl font-bold">How to Add Supplier</h1>

      {/* Step 1 */}
      <h2 className="text-xl font-semibold">Step 1: Go to Add Supplier</h2>
      <p>Navigate to “Supplier” in the menu.</p>
      <p>Select “Add Supplier” from the dropdown.</p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Go to Add Supplier"
      />

      {/* Step 2 */}
      <h2 className="text-xl font-semibold">Step 2: Save Vendor</h2>
      <p>
        After entering all the vendor&apos;s details, click “Save Vendor.”
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Save supplier"
      />

    </div>
  );
};

export default AddSupplier;
