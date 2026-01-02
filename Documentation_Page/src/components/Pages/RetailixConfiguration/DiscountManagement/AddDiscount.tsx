import React from "react";

// Images
import img1 from "../../../../assets/RetailixConfiguration/DiscountManagement/image1.png";
import img2 from "../../../../assets/RetailixConfiguration/DiscountManagement/image2.png";

const AddDiscount: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Discount Management
      </h1>

      <p className="font-semibold">
        How to Add Discount
      </p>

      <p>
        Navigate to <strong>Retailix Configuration</strong>
      </p>
      <p>
        Select <strong>Discount Management</strong>
      </p>
      <p>
        Click on <strong>Add Discount</strong>
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Navigate to Add Discount"
      />

      <p>
        Enter the required discount details
      </p>

      <p>• <strong>Discount Name</strong></p>
      <p>• <strong>Discount Type</strong></p>
      <p>• <strong>Discount Value</strong></p>
      <p>• <strong>Status</strong></p>

      <p>
        Click on <strong>Add</strong> to save the discount
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Add discount form"
      />

      <p className="font-semibold">
        The added discount will be reflected in the discount list
      </p>

    </div>
  );
};

export default AddDiscount;
