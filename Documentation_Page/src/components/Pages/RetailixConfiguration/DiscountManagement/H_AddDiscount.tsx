import React from "react";

// Images
import img1 from "../../../../assets/RetailixConfiguration/DiscountManagement/image1.png";
import img2 from "../../../../assets/RetailixConfiguration/DiscountManagement/image2.png";

const AddDiscount: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Discount
      </h1>

      <p>
        <strong>Add Discount</strong> feature ka use karke
        aap apne products ya services ke liye
        discount rules easily create kar sakte ho.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Add discount screen"
      />

      <p>
        Yaha par aap discount ki
        <strong> basic details</strong> enter karte ho
        jaise discount name aur type.
      </p>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Discount details"
      />

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Discount Type</strong> select kar sakte ho
          (Percentage ya Flat Amount)
        </li>
        <li>
          <strong>Discount Value</strong> define kar sakte ho
        </li>
        <li>
          Discount ko <strong>Active ya Inactive</strong>
          rakh sakte ho
        </li>
      </ul>

      <p>
        Saari details fill karne ke baad
        <strong> Save</strong> button par click karke
        discount successfully add ho jaata hai.
      </p>

    </div>
  );
};

export default AddDiscount;
