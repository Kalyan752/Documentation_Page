import React from "react";

// Images
import img1 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddStores/image1.png";
import img2 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddStores/image2.png";
import img3 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddStores/image3.png";
import img4 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddStores/image4.png";
import img5 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddStores/image5.png";
import img6 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddStores/image6.png";
import img7 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddStores/image7.png";
import img8 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddStores/image8.png";
import img9 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddStores/image9.png";
import img10 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddStores/image10.png";
import img11 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddStores/image11.png";
import img12 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddStores/image12.png";
import img13 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddStores/image13.png";

const AddStores: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Stores
      </h1>

      <p>
        <strong>Add Stores</strong> feature ka use karke
        aap apne business ke liye
        multiple stores create aur manage kar sakte ho
        jisse inventory aur sales tracking easy ho jaati hai.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add stores overview" />

      <h2 className="text-xl font-semibold mt-6">
        Stores Section Access Kaise Kare
      </h2>
      <p>
        Retailix Configuration ke
        <strong> Inventory Masters</strong> section me jaakar
        <strong> Stores</strong> option select karo.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Access stores section" />

      <h2 className="text-xl font-semibold mt-6">
        Add New Store
      </h2>
      <p>
        <strong>Add Store</strong> button par click karke
        aap naya store create kar sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Add store button" />

      <h2 className="text-xl font-semibold mt-6">
        Store Details Fill Karna
      </h2>
      <p>
        Store add karte waqt
        <strong> Store Name</strong>,
        <strong> Store Code</strong>,
        <strong> Address</strong> aur
        <strong> Contact Details</strong>
        jaise information fill karni hoti hai.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Store details" />

      <h2 className="text-xl font-semibold mt-6">
        Store Location Select Karna
      </h2>
      <p>
        Yaha par store ki
        <strong> Location</strong>
        select ya enter ki jaati hai
        taaki accurate mapping ho sake.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Store location" />

      <h2 className="text-xl font-semibold mt-6">
        Store Save Karna
      </h2>
      <p>
        Sab details fill karne ke baad
        <strong> Save</strong> button par click karo
        jisse store successfully add ho jaata hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Save store" />

      <h2 className="text-xl font-semibold mt-6">
        Store List View
      </h2>
      <p>
        Added stores ko
        <strong> Store List</strong> me
        easily dekha ja sakta hai.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Store list" />

      <h2 className="text-xl font-semibold mt-6">
        Edit Store
      </h2>
      <p>
        Kisi bhi existing store ko
        <strong> Edit</strong> karke
        uski details update ki ja sakti hain.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Edit store" />

      <h2 className="text-xl font-semibold mt-6">
        Update Store
      </h2>
      <p>
        Required changes ke baad
        <strong> Update</strong> button par click karo.
      </p>
      <img src={img9} className="rounded-md shadow" alt="Update store" />

      <h2 className="text-xl font-semibold mt-6">
        Store Status
      </h2>
      <p>
        Store ka
        <strong> Active</strong> ya
        <strong> Inactive</strong> status
        manage kiya ja sakta hai.
      </p>
      <img src={img10} className="rounded-md shadow" alt="Store status" />

      <h2 className="text-xl font-semibold mt-6">
        Search Store
      </h2>
      <p>
        <strong> Search</strong> option ka use karke
        specific store easily find kiya ja sakta hai.
      </p>
      <img src={img11} className="rounded-md shadow" alt="Search store" />

      <h2 className="text-xl font-semibold mt-6">
        Validation Check
      </h2>
      <p>
        Duplicate store code
        <strong> allow nahi hota</strong>,
        system automatically validation karta hai.
      </p>
      <img src={img12} className="rounded-md shadow" alt="Store validation" />

      <h2 className="text-xl font-semibold mt-6">
        Store Successfully Added
      </h2>
      <p>
        Successful action ke baad
        system
        <strong> success message</strong>
        display karta hai.
      </p>
      <img src={img13} className="rounded-md shadow" alt="Store success" />

    </div>
  );
};

export default AddStores;
