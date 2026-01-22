import React from "react";

// Images
import img1 from "../../../assets/Accounts/ManageSuppliersPayment/image1.png";
import img2 from "../../../assets/Accounts/ManageSuppliersPayment/image2.png";
import img3 from "../../../assets/Accounts/ManageSuppliersPayment/image3.png";
import img4 from "../../../assets/Accounts/ManageSuppliersPayment/image4.png";
import img5 from "../../../assets/Accounts/ManageSuppliersPayment/image5.png";
import img6 from "../../../assets/Accounts/ManageSuppliersPayment/image6.png";
import img7 from "../../../assets/Accounts/ManageSuppliersPayment/image7.png";

const ManageSuppliersPayment: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Suppliers Payment
      </h1>

      <p>
        <strong>Manage Suppliers Payment</strong> section ko access karne ke liye
        <strong> Accounts → Manage Suppliers Payment</strong> par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Manage suppliers payment navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Suppliers Payment Management
      </h2>
      <p>
        Is section me aap sabhi <strong>supplier payments</strong> ko
        view, track aur manage kar sakte ho.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Suppliers payment overview" />

      <h2 className="text-xl font-semibold mt-6">
        Payment List View
      </h2>
      <p>
        Yaha par sabhi supplier payments ki list dikhai deti hai jisme
        <strong> Supplier Name</strong>,
        <strong> Payment Date</strong>,
        <strong> Paid Amount</strong> aur
        <strong> Balance Amount</strong> show hota hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Payment list" />

      <h2 className="text-xl font-semibold mt-6">
        Search aur Filter Payments
      </h2>
      <p>
        Aap payments ko <strong>Supplier</strong>,
        <strong> Date</strong> ya
        <strong> Status</strong> ke basis par search aur filter kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Search payments" />

      <h2 className="text-xl font-semibold mt-6">
        Payment Details Dekho
      </h2>
      <p>
        Kisi bhi payment ke complete details dekhne ke liye
        <strong> View</strong> option ka use karo.
      </p>
      <img src={img5} className="rounded-md shadow" alt="View payment details" />

      <h2 className="text-xl font-semibold mt-6">
        Edit aur Delete Payment
      </h2>
      <p>
        Agar required ho to aap payment ko
        <strong> Edit</strong> ya
        <strong> Delete</strong> bhi kar sakte ho.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Edit delete payment" />

      <h2 className="text-xl font-semibold mt-6">
        Supplier Payments Track Karo
      </h2>
      <p>
        Is tarah se aap suppliers ke saare payments ko
        accurately track aur manage kar sakte ho.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Manage suppliers payment complete" />

    </div>
  );
};

export default ManageSuppliersPayment;
