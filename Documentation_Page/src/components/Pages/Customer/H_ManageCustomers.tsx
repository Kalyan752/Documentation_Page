import React from "react";

// Images
import img1 from "../../../assets/Customer/ManageCustomers/image1.png";
import img2 from "../../../assets/Customer/ManageCustomers/image2.png";
import img3 from "../../../assets/Customer/ManageCustomers/image3.png";
import img4 from "../../../assets/Customer/ManageCustomers/image4.png";
import img5 from "../../../assets/Customer/ManageCustomers/image5.png";
import img6 from "../../../assets/Customer/ManageCustomers/image6.png";

const ManageCustomers: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Customers
      </h1>

      <p>
        <strong>Manage Customers</strong> section ko access karne ke liye,
        <strong> Customers → Manage Customers</strong> par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Manage customers navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Manage Customers ka Use Kya Hai?
      </h2>
      <p>
        <strong>Manage Customers</strong> section ka use existing customers ke
        details ko view, update aur manage karne ke liye hota hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Manage customers overview" />

      <h2 className="text-xl font-semibold mt-6">
        Customer List View
      </h2>
      <p>
        Yaha par sabhi customers ki list show hoti hai jisme
        <strong> Name, Mobile Number, Email</strong> aur
        <strong> Status</strong> visible hota hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Customer list" />

      <h2 className="text-xl font-semibold mt-6">
        Search & Filter Customers
      </h2>
      <p>
        Aap <strong>Search bar</strong> ka use karke customer ko
        <strong> Name</strong> ya <strong>Mobile Number</strong> ke through
        easily find kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Search customer" />

      <h2 className="text-xl font-semibold mt-6">
        Edit Customer Details
      </h2>
      <p>
        Kisi bhi customer ke details update karne ke liye
        <strong> Edit</strong> icon par click karo.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Edit customer" />

      <h2 className="text-xl font-semibold mt-6">
        Customer Status Manage Karo
      </h2>
      <p>
        Customer ko <strong>Active</strong> ya <strong>Inactive</strong>
        karne ke liye status toggle ka use karo.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Customer status" />

    </div>
  );
};

export default ManageCustomers;
