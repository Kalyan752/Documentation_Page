import React from "react";

// Images
import img1 from "../../../../../assets/RetailixConfiguration/HumanResource/Designation/image1.png";
import img2 from "../../../../../assets/RetailixConfiguration/HumanResource/Designation/image2.png";

const AddDesignation: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Designation
      </h1>

      <p>
        <strong>Add Designation</strong> ka use karke
        aap organization ke liye
        alag-alag employee designations create
        aur manage kar sakte ho.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Add designation screen"
      />

      <h2 className="text-xl font-semibold mt-6">
        Designation Details Fill Karna
      </h2>

      <p>
        Yaha par aap:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Designation Name</strong> enter kar sakte ho
        </li>
        <li>
          Designation ke liye
          <strong> Description</strong> add kar sakte ho
        </li>
        <li>
          Designation ka
          <strong> Status (Active / Inactive)</strong>
          select kar sakte ho
        </li>
      </ul>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Designation details"
      />

      <p>
        Saari details fill karne ke baad
        <strong> Save</strong> button par click karo,
        jisse designation successfully add ho jaata hai.
      </p>

    </div>
  );
};

export default AddDesignation;
