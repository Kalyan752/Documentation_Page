import React from "react";

// Image
import img1 from "../../../../assets/RetailixConfiguration/TaxManagement/AddTax/image1.png";

const AddTax: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Tax Management
      </h1>

      <p className="font-semibold">
        How to Add Tax
      </p>

      <p>
        Navigate to <strong>Retailix Configuration</strong>
      </p>
      <p>
        Select <strong>Tax Management</strong>
      </p>
      <p>
        Click on <strong>Add Tax</strong>
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add tax screen" />

      <p>
        Enter the required tax details
      </p>

      <p>• <strong>Tax Name</strong></p>
      <p>• <strong>Tax Percentage</strong></p>
      <p>• <strong>Status</strong></p>

      <p>
        Click on <strong>Add</strong> to save the tax
      </p>

      <p className="font-semibold">
        The added tax will be reflected in the tax list
      </p>

    </div>
  );
};

export default AddTax;
