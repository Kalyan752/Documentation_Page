import React from "react";

// Images
import img1 from "../../../assets/Purchase/PurchaseManagement/image1.png";
import img2 from "../../../assets/Purchase/PurchaseManagement/image2.png";
import img3 from "../../../assets/Purchase/PurchaseManagement/image3.png";
import img4 from "../../../assets/Purchase/PurchaseManagement/image4.png";
import img5 from "../../../assets/Purchase/PurchaseManagement/image5.png";
import img6 from "../../../assets/Purchase/PurchaseManagement/image6.png";
import img7 from "../../../assets/Purchase/PurchaseManagement/image7.png";
import img8 from "../../../assets/Purchase/PurchaseManagement/image8.png";

const PurchaseManagement: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Purchase Management
      </h1>

      <p>
        <strong>Purchase Management</strong> section ko access karne ke liye
        <strong> Purchase → Purchase Management</strong> par jao.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Purchase management navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Purchase Management Ka Use
      </h2>
      <p>
        <strong>Purchase Management</strong> ka use sabhi purchase records ko
        view, track aur manage karne ke liye hota hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Purchase management overview" />

      <h2 className="text-xl font-semibold mt-6">
        Purchase List View
      </h2>
      <p>
        Yaha par sabhi purchases ki list show hoti hai jisme
        <strong> Supplier Name, Purchase Date</strong> aur
        <strong> Total Amount</strong> dikhai deta hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Purchase list" />

      <h2 className="text-xl font-semibold mt-6">
        Search aur Filter Purchases
      </h2>
      <p>
        Aap purchases ko <strong>Supplier</strong>,
        <strong> Date</strong> ya
        <strong> Status</strong> ke basis par search aur filter kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Search and filter purchases" />

      <h2 className="text-xl font-semibold mt-6">
        Purchase Details Dekho
      </h2>
      <p>
        Kisi bhi purchase ke complete details dekhne ke liye
        <strong> View</strong> option ka use karo.
      </p>
      <img src={img5} className="rounded-md shadow" alt="View purchase details" />

      <h2 className="text-xl font-semibold mt-6">
        Purchase Edit Karo
      </h2>
      <p>
        Purchase record me changes karne ke liye
        <strong> Edit</strong> option ka use karo.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Edit purchase" />

      <h2 className="text-xl font-semibold mt-6">
        Purchase Delete Karo
      </h2>
      <p>
        Agar koi purchase galat add ho gayi ho to
        <strong> Delete</strong> option ka use karke remove kar sakte ho.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Delete purchase" />

      <h2 className="text-xl font-semibold mt-6">
        Purchase Records Manage Karo
      </h2>
      <p>
        Is tarah se aap sabhi purchase transactions ko
        easily manage aur track kar sakte ho.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Purchase management complete" />

    </div>
  );
};

export default PurchaseManagement;
