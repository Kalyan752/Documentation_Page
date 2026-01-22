import React from "react";

// Images
import img1 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarranty/image1.png";
import img2 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarranty/image2.png";
import img3 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarranty/image3.png";
import img4 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarranty/image4.png";
import img5 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarranty/image5.png";
import img6 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarranty/image6.png";
import img7 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarranty/image7.png";
import img8 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarranty/image8.png";
import img9 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarranty/image9.png";
import img10 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarranty/image10.png";
import img11 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarranty/image11.png";
import img12 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarranty/image12.png";
import img13 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddWarranty/image13.png";

const AddWarranty: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Warranty
      </h1>

      <p>
        <strong>Add Warranty</strong> feature ka use karke
        aap products ke liye
        warranty details define aur manage kar sakte ho
        jisse customer trust aur service process better hota hai.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add warranty overview" />

      <h2 className="text-xl font-semibold mt-6">
        Warranty Section Access Kaise Kare
      </h2>
      <p>
        Retailix Configuration ke
        <strong> Inventory Masters</strong> section me jaakar
        <strong> Warranty</strong> option select karo.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Access warranty section" />

      <h2 className="text-xl font-semibold mt-6">
        Add New Warranty
      </h2>
      <p>
        <strong>Add Warranty</strong> button par click karke
        aap nayi warranty add kar sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Add warranty button" />

      <h2 className="text-xl font-semibold mt-6">
        Warranty Details Fill Karna
      </h2>
      <p>
        Warranty add karte waqt
        <strong> Warranty Name</strong>,
        <strong> Duration</strong> aur
        <strong> Description</strong>
        jaise details fill karni hoti hain.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Warranty details" />

      <h2 className="text-xl font-semibold mt-6">
        Warranty Duration Set Karna
      </h2>
      <p>
        Yaha par warranty ki
        <strong> time period</strong>
        select ki jaati hai jaise months ya years.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Warranty duration" />

      <h2 className="text-xl font-semibold mt-6">
        Warranty Save Karna
      </h2>
      <p>
        Sab details fill karne ke baad
        <strong> Save</strong> button par click karo
        jisse warranty successfully add ho jaati hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Save warranty" />

      <h2 className="text-xl font-semibold mt-6">
        Warranty List View
      </h2>
      <p>
        Added warranties ko
        <strong> Warranty List</strong> me
        easily dekha ja sakta hai.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Warranty list" />

      <h2 className="text-xl font-semibold mt-6">
        Edit Warranty
      </h2>
      <p>
        Kisi bhi existing warranty ko
        <strong> Edit</strong> karke
        uski details update ki ja sakti hain.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Edit warranty" />

      <h2 className="text-xl font-semibold mt-6">
        Update Warranty
      </h2>
      <p>
        Required changes ke baad
        <strong> Update</strong> button par click karo.
      </p>
      <img src={img9} className="rounded-md shadow" alt="Update warranty" />

      <h2 className="text-xl font-semibold mt-6">
        Warranty Status
      </h2>
      <p>
        Warranty ka
        <strong> Active</strong> ya
        <strong> Inactive</strong> status
        manage kiya ja sakta hai.
      </p>
      <img src={img10} className="rounded-md shadow" alt="Warranty status" />

      <h2 className="text-xl font-semibold mt-6">
        Search Warranty
      </h2>
      <p>
        <strong> Search</strong> option ka use karke
        specific warranty easily find ki ja sakti hai.
      </p>
      <img src={img11} className="rounded-md shadow" alt="Search warranty" />

      <h2 className="text-xl font-semibold mt-6">
        Delete Warranty
      </h2>
      <p>
        Agar warranty use me nahi hai
        to use
        <strong> delete</strong> bhi kiya ja sakta hai.
      </p>
      <img src={img12} className="rounded-md shadow" alt="Delete warranty" />

      <h2 className="text-xl font-semibold mt-6">
        Warranty Successfully Added
      </h2>
      <p>
        Successful action ke baad
        system
        <strong> success message</strong>
        display karta hai.
      </p>
      <img src={img13} className="rounded-md shadow" alt="Warranty success" />

    </div>
  );
};

export default AddWarranty;
