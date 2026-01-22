import React from "react";

// Images
import img1 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarehouses/image1.png";
import img2 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarehouses/image2.png";
import img3 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarehouses/image3.png";
import img4 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarehouses/image4.png";
import img5 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarehouses/image5.png";
import img6 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarehouses/image6.png";
import img7 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarehouses/image7.png";

const AddWarehouses: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Warehouses
      </h1>

      <p>
        <strong>Add Warehouses</strong> feature ka use karke
        aap apne business ke liye
        multiple warehouses create aur manage kar sakte ho,
        jisse inventory storage aur tracking easy ho jaati hai.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add warehouses overview" />

      <h2 className="text-xl font-semibold mt-6">
        Warehouses Section Access Kaise Kare
      </h2>
      <p>
        Retailix Configuration ke
        <strong> Inventory Masters</strong> section me jaakar
        <strong> Warehouses</strong> option select karo.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Access warehouses section" />

      <h2 className="text-xl font-semibold mt-6">
        Add New Warehouse
      </h2>
      <p>
        <strong>Add Warehouse</strong> button par click karke
        naya warehouse create kiya ja sakta hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Add warehouse button" />

      <h2 className="text-xl font-semibold mt-6">
        Warehouse Details Fill Karna
      </h2>
      <p>
        Warehouse add karte waqt
        <strong> Warehouse Name</strong>,
        <strong> Warehouse Code</strong>,
        <strong> Address</strong> aur
        <strong> Contact Details</strong>
        jaise information fill karni hoti hai.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Warehouse details" />

      <h2 className="text-xl font-semibold mt-6">
        Warehouse Location Select Karna
      </h2>
      <p>
        Yaha par warehouse ki
        <strong> Location</strong>
        select ya enter ki jaati hai
        taaki accurate inventory mapping ho sake.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Warehouse location" />

      <h2 className="text-xl font-semibold mt-6">
        Save Warehouse
      </h2>
      <p>
        Sab details fill karne ke baad
        <strong> Save</strong> button par click karo
        jisse warehouse successfully add ho jaata hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Save warehouse" />

      <h2 className="text-xl font-semibold mt-6">
        Warehouse Successfully Added
      </h2>
      <p>
        Successful action ke baad
        system
        <strong> success message</strong>
        display karta hai
        aur warehouse list me show hota hai.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Warehouse success" />

    </div>
  );
};

export default AddWarehouses;
