import React from "react";

// Image
import img1 from "../../../../assets/RetailixConfiguration/TaxManagement/AddTax/image1.png";

const AddTax: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Tax
      </h1>

      <p>
        <strong>Add Tax</strong> option ka use karke
        aap apne business ke liye
        naye tax rules easily create
        aur manage kar sakte ho.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Add tax screen"
      />

      <p>
        Yaha par aap:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Tax Name</strong> enter kar sakte ho
        </li>
        <li>
          <strong>Tax Percentage</strong> define kar sakte ho
        </li>
        <li>
          Tax ko <strong>Enable ya Disable</strong> kar sakte ho
        </li>
      </ul>

      <p>
        Saari details fill karne ke baad,
        <strong> Save</strong> button par click karke
        tax successfully add ho jaata hai.
      </p>

    </div>
  );
};

export default AddTax;
