import React from "react";

// Images
import img1 from "../../../assets/Supplier/AddSupplier/image1.png";
import img2 from "../../../assets/Supplier/AddSupplier/image2.png";

const AddSupplier: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Supplier
      </h1>

      <p>
        <strong>Add Supplier</strong> ko access karne ke liye
        <strong> Supplier → Add Supplier</strong> par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add supplier navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Supplier Details Add Karo
      </h2>
      <p>
        Yaha par supplier ke complete details enter karo jaise
        <strong> Supplier Name</strong>,
        <strong> Contact Number</strong>,
        <strong> Email Address</strong> aur
        <strong> Address</strong>.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Supplier details form" />

    </div>
  );
};

export default AddSupplier;
