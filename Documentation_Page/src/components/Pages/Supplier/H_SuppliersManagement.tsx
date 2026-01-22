import React from "react";

// Images
import img1 from "../../../assets/Supplier/SuppliersManagement/image1.png";
import img2 from "../../../assets/Supplier/SuppliersManagement/image2.png";
import img3 from "../../../assets/Supplier/SuppliersManagement/image3.png";
import img4 from "../../../assets/Supplier/SuppliersManagement/image4.png";
import img5 from "../../../assets/Supplier/SuppliersManagement/image5.png";
import img6 from "../../../assets/Supplier/SuppliersManagement/image6.png";
import img7 from "../../../assets/Supplier/SuppliersManagement/image7.png";

const SuppliersManagement: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Suppliers Management
      </h1>

      <p>
        <strong>Suppliers Management</strong> ko access karne ke liye
        <strong> Supplier → Suppliers Management</strong> par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Suppliers management navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Suppliers Management Kya Hai?
      </h2>
      <p>
        <strong>Suppliers Management</strong> ka use suppliers ke records ko
        view, update aur track karne ke liye hota hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Suppliers management overview" />

      <h2 className="text-xl font-semibold mt-6">
        Suppliers List
      </h2>
      <p>
        Yaha par sabhi suppliers ki list show hoti hai jisme
        <strong> Supplier Name</strong>,
        <strong> Contact Details</strong> aur
        <strong> Status</strong> visible hota hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Suppliers list" />

      <h2 className="text-xl font-semibold mt-6">
        Search aur Filter Suppliers
      </h2>
      <p>
        Aap suppliers ko <strong>Name</strong>,
        <strong> Phone Number</strong> ya
        <strong> Status</strong> ke basis par search aur filter kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Search suppliers" />

      <h2 className="text-xl font-semibold mt-6">
        Supplier Actions
      </h2>
      <p>
        Har supplier ke liye <strong>Actions</strong> available hote hain jaise
        <strong> View</strong>,
        <strong> Edit</strong> aur
        <strong> Delete</strong>.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Supplier actions" />
      <img src={img6} className="rounded-md shadow" alt="Supplier actions continued" />

      <h2 className="text-xl font-semibold mt-6">
        Supplier Records Manage Karo
      </h2>
      <p>
        Is tarah se aap sabhi suppliers ke records ko
        effectively manage aur maintain kar sakte ho.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Suppliers management complete" />

    </div>
  );
};

export default SuppliersManagement;
