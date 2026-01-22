import React from "react";

// Images
import img1 from "../../../../../assets/RetailixConfiguration/HumanResource/Shift/image1.png";
import img2 from "../../../../../assets/RetailixConfiguration/HumanResource/Shift/image2.png";

const AddShift: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Shift
      </h1>

      <p>
        <strong>Add Shift</strong> feature ka use karke
        aap employees ke liye
        working shifts define aur manage kar sakte ho,
        jaise Morning Shift, Evening Shift, Night Shift, etc.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Add shift screen"
      />

      <h2 className="text-xl font-semibold mt-6">
        Shift Details Fill Karna
      </h2>

      <p>
        Yaha par aap:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Shift Name</strong> enter kar sakte ho
        </li>
        <li>
          <strong>Shift Start Time</strong> aur
          <strong> End Time</strong> set kar sakte ho
        </li>
        <li>
          Shift ka
          <strong> Status (Active / Inactive)</strong>
          select kar sakte ho
        </li>
      </ul>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Shift details"
      />

      <p>
        Saari details fill karne ke baad
        <strong> Save</strong> button par click karo,
        jisse shift successfully add ho jaata hai
        aur employee attendance ke liye use ho sakta hai.
      </p>

    </div>
  );
};

export default AddShift;
