import React from "react";

// Images
import img1 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddMeasurement/image1.png";
import img2 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddMeasurement/image2.png";
import img3 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddMeasurement/image3.png";
import img4 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddMeasurement/image4.png";
import img5 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddMeasurement/image5.png";
import img6 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddMeasurement/image6.png";
import img7 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddMeasurement/image7.png";
import img8 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddMeasurement/image8.png";
import img9 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddMeasurement/image9.png";
import img10 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddMeasurement/image10.png";
import img11 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddMeasurement/image11.png";
import img12 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddMeasurement/image12.png";
import img13 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddMeasurement/image13.png";

const AddMeasurement: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Measurement
      </h1>

      <p>
        <strong>Add Measurement</strong> ka use karke
        aap products ke liye
        alag-alag units of measurement define kar sakte ho
        jaise Kg, Litre, Piece, etc.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add measurement overview" />

      <h2 className="text-xl font-semibold mt-6">
        Measurement Section Access Kaise Kare
      </h2>
      <p>
        Retailix Configuration ke
        <strong> Inventory Masters</strong> section me jaakar
        <strong> Unit of Measurement</strong> option select karo.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Access measurement section" />

      <h2 className="text-xl font-semibold mt-6">
        Add New Measurement
      </h2>
      <p>
        <strong>Add Measurement</strong> button par click karke
        aap naya unit of measurement add kar sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Add measurement button" />

      <h2 className="text-xl font-semibold mt-6">
        Measurement Details Fill Karna
      </h2>
      <p>
        Yaha par
        <strong> Measurement Name</strong>,
        <strong> Short Code</strong> aur
        <strong> Description</strong>
        jaise details fill karni hoti hain.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Measurement details" />

      <h2 className="text-xl font-semibold mt-6">
        Measurement Save Karna
      </h2>
      <p>
        Sab details fill karne ke baad
        <strong> Save</strong> button par click karo
        jisse measurement successfully add ho jaata hai.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Save measurement" />

      <h2 className="text-xl font-semibold mt-6">
        Measurement List View
      </h2>
      <p>
        Added measurements ko
        <strong> Measurement List</strong> me
        easily dekha ja sakta hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Measurement list" />

      <h2 className="text-xl font-semibold mt-6">
        Edit Measurement
      </h2>
      <p>
        Kisi bhi existing measurement ko
        <strong> Edit</strong> karke
        uski details update ki ja sakti hain.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Edit measurement" />

      <h2 className="text-xl font-semibold mt-6">
        Update Measurement
      </h2>
      <p>
        Required changes ke baad
        <strong> Update</strong> button par click karo.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Update measurement" />

      <h2 className="text-xl font-semibold mt-6">
        Measurement Status
      </h2>
      <p>
        Measurement ka
        <strong> Active</strong> ya
        <strong> Inactive</strong> status
        manage kiya ja sakta hai.
      </p>
      <img src={img9} className="rounded-md shadow" alt="Measurement status" />

      <h2 className="text-xl font-semibold mt-6">
        Search Measurement
      </h2>
      <p>
        <strong> Search</strong> option ka use karke
        specific measurement easily find ki ja sakti hai.
      </p>
      <img src={img10} className="rounded-md shadow" alt="Search measurement" />

      <h2 className="text-xl font-semibold mt-6">
        Validation Check
      </h2>
      <p>
        Duplicate measurement name
        <strong> allow nahi hota</strong>,
        system automatic validation karta hai.
      </p>
      <img src={img11} className="rounded-md shadow" alt="Validation check" />

      <h2 className="text-xl font-semibold mt-6">
        Delete Measurement
      </h2>
      <p>
        Agar measurement use me nahi hai
        to use
        <strong> delete</strong> bhi kiya ja sakta hai.
      </p>
      <img src={img12} className="rounded-md shadow" alt="Delete measurement" />

      <h2 className="text-xl font-semibold mt-6">
        Measurement Successfully Added
      </h2>
      <p>
        Successful action ke baad
        system
        <strong> success message</strong>
        display karta hai.
      </p>
      <img src={img13} className="rounded-md shadow" alt="Measurement success" />

    </div>
  );
};

export default AddMeasurement;
