import React from "react";

// Images (order of appearance in document)
import img1 from "../../../assets/Inventory/InventoryManagement/image1.png";
import img2 from "../../../assets/Inventory/InventoryManagement/image2.png";
import img3 from "../../../assets/Inventory/InventoryManagement/image3.png";
import img4 from "../../../assets/Inventory/InventoryManagement/image4.png";
import img5 from "../../../assets/Inventory/InventoryManagement/image5.png";
import img6 from "../../../assets/Inventory/InventoryManagement/image6.png";

const InventoryManagement: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          INVENTORY MANAGEMENT
      ============================ */}
      <h1 className="text-2xl font-bold">Inventory Management</h1>

      <p>Go to Inventory → Inventory Management</p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Access Inventory Management"
      />

      <p>
        Inventory Management will only include the purchased products to track inventory.
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Purchased products tracking"
      />

      <p>
        This page is having Summary and list of purchased products.
      </p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="Inventory summary and list"
      />

      <p>
        Click on “Add Item” to add the product to Inventory.
      </p>
      <img
        src={img4}
        className="rounded-md shadow"
        alt="Add item to inventory"
      />

      <p>
        Create Purchase page will open, Click here to know how to Create Purchase?
      </p>
      <img
        src={img5}
        className="rounded-md shadow"
        alt="Create purchase page"
      />

      <p>
        To view the Inventory details of any Product, click on the view button.
      </p>
      <img
        src={img6}
        className="rounded-md shadow"
        alt="View inventory details"
      />

    </div>
  );
};

export default InventoryManagement;
