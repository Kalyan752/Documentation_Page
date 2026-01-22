import React from "react";

// Images
import img1 from "../../../assets/ExploreReports/InventoryStockReports/image1.png";
import img2 from "../../../assets/ExploreReports/InventoryStockReports/image2.png";
import img3 from "../../../assets/ExploreReports/InventoryStockReports/image3.png";
import img4 from "../../../assets/ExploreReports/InventoryStockReports/image4.png";
import img5 from "../../../assets/ExploreReports/InventoryStockReports/image5.png";
import img6 from "../../../assets/ExploreReports/InventoryStockReports/image6.png";

const InventoryStockReports: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Inventory Stock Reports
      </h1>

      <p>
        <strong>Inventory Stock Reports</strong> ka use karke
        aap inventory me available stock ki complete details
        easily track aur analyze kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Inventory stock report overview" />

      <h2 className="text-xl font-semibold mt-6">
        Inventory Stock Report Kya Dikhata Hai?
      </h2>
      <p>
        Ye report inventory me available products ki details dikhata hai jaise
        <strong> Product Name</strong>,
        <strong> Stock Quantity</strong>,
        <strong> Stock Value</strong> aur
        <strong> Stock Status</strong>.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Inventory stock details" />

      <h2 className="text-xl font-semibold mt-6">
        Warehouse / Store Select Karo
      </h2>
      <p>
        Aap <strong>Warehouse</strong> ya <strong>Store</strong> select karke
        specific location ka stock report dekh sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Select warehouse or store" />

      <h2 className="text-xl font-semibold mt-6">
        Stock Status Analysis
      </h2>
      <p>
        Yaha par stock ka status dikhaya jaata hai jaise
        <strong> In Stock</strong>,
        <strong> Low Stock</strong> aur
        <strong> Out of Stock</strong>.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Stock status analysis" />

      <h2 className="text-xl font-semibold mt-6">
        Inventory Summary
      </h2>
      <p>
        Ye section inventory ka
        <strong>Summary</strong> provide karta hai
        jisse overall stock position easily samajh me aati hai.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Inventory summary" />

      <h2 className="text-xl font-semibold mt-6">
        Export Inventory Stock Report
      </h2>
      <p>
        Inventory stock report ko
        <strong> Export</strong> karke
        future reference aur inventory planning ke liye
        use kiya ja sakta hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Export inventory stock report" />

    </div>
  );
};

export default InventoryStockReports;
