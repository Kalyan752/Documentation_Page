import React from "react";

// Images
import img1 from "../../../../../assets/RetailixConfiguration/HumanResource/Designation/image1.png";
import img2 from "../../../../../assets/RetailixConfiguration/HumanResource/Designation/image2.png";

const AddDesignation: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Designation
      </h1>

      <p className="font-semibold">
        How to Access HR (Human Resource)
      </p>

      <p>
        Go to <strong>Retailix Configuration</strong> in left panel
      </p>
      <p>
        Drop down <strong>Retailix Configuration</strong>
      </p>
      <p>
        Select <strong>Human Resource</strong> → <strong>Designation</strong> →{" "}
        <strong>Add Designation</strong>
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Access Add Designation"
      />

      <h2 className="text-xl font-semibold">
        Add Designation
      </h2>

      <p>
        Enter the required designation details
      </p>

      <p>
        Click on <strong>Add Designation</strong> to save the designation
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Add designation form"
      />

      <h2 className="text-xl font-semibold">
        Manage Designation
      </h2>

      <p>
        <strong>Edit or Update</strong>
      </p>

      <p>
        Click on <strong>Manage Designation</strong> to check or update your
        Employee details
      </p>

      <p>
        Click on <strong>Edit</strong> to update the employee details
      </p>

    </div>
  );
};

export default AddDesignation;
