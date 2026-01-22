import React from "react";

// Images
import img1 from "../../../assets/Inventory/InventoryManagement/image1.png";
import img2 from "../../../assets/Inventory/InventoryManagement/image2.png";
import img3 from "../../../assets/Inventory/InventoryManagement/image3.png";
import img4 from "../../../assets/Inventory/InventoryManagement/image4.png";
import img5 from "../../../assets/Inventory/InventoryManagement/image5.png";
import img6 from "../../../assets/Inventory/InventoryManagement/image6.png";

const InventoryManagement: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Inventory Management
      </h1>

      <p>
        <strong>Inventory Management</strong> ko access karne ke liye
        <strong> Inventory → Inventory Management</strong> par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Inventory management navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Inventory Management Kya Hai?
      </h2>
      <p>
        <strong>Inventory Management</strong> ka matlab hai products ke
        stock levels ko track, control aur optimize karna.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Inventory management overview" />

      <h2 className="text-xl font-semibold mt-6">
        Stock Tracking
      </h2>
      <p>
        Yaha par aap real-time me <strong>Stock In</strong>,
        <strong> Stock Out</strong> aur
        <strong> Available Quantity</strong> check kar sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Stock tracking" />

      <h2 className="text-xl font-semibold mt-6">
        Low Stock Alert
      </h2>
      <p>
        Jab kisi product ka stock minimum level se neeche jata hai,
        system automatically <strong>Low Stock Alert</strong> dikhata hai.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Low stock alert" />

      <h2 className="text-xl font-semibold mt-6">
        Inventory Reports
      </h2>
      <p>
        Inventory ke related reports generate karke
        <strong> Stock Analysis</strong> aur
        <strong> Inventory Performance</strong> samajh sakte ho.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Inventory reports" />

      <h2 className="text-xl font-semibold mt-6">
        Inventory Control Complete
      </h2>
      <p>
        Is tarah se <strong>Inventory Management</strong> aapko
        stock ko effectively manage karne me help karta hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Inventory management complete" />

    </div>
  );
};

export default InventoryManagement;
