import React from "react";

// Images
import img1 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddBrand/image1.png";
import img2 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddBrand/image2.png";
import img3 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddBrand/image3.png";
import img4 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddBrand/image4.png";
import img5 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddBrand/image5.png";
import img6 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddBrand/image6.png";
import img7 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddBrand/image7.png";
import img8 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddBrand/image8.png";
import img9 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddBrand/image9.png";
import img10 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddBrand/image10.png";
import img11 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddBrand/image11.png";
import img12 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddBrand/image12.png";
import img13 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddBrand/image13.png";
import img14 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddBrand/image14.png";

const AddBrand: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Brand
      </h1>

      <p>
        <strong>Add Brand</strong> feature ka use karke
        aap products ke liye
        alag-alag brands create aur manage kar sakte ho
        jisse inventory aur reporting easy ho jaati hai.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add brand overview" />

      <h2 className="text-xl font-semibold mt-6">
        Brand Section Access Kaise Kare
      </h2>
      <p>
        Retailix Configuration ke
        <strong> Inventory Masters</strong> section me jaakar
        <strong> Brand</strong> option select karo.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Access brand section" />

      <h2 className="text-xl font-semibold mt-6">
        Add New Brand
      </h2>
      <p>
        <strong>Add Brand</strong> button par click karke
        aap naya brand create kar sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Add brand button" />

      <h2 className="text-xl font-semibold mt-6">
        Brand Details Fill Karna
      </h2>
      <p>
        Brand add karte waqt
        <strong> Brand Name</strong>,
        <strong> Description</strong> aur
        <strong> Status</strong>
        jaise details fill karni hoti hain.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Brand details" />

      <h2 className="text-xl font-semibold mt-6">
        Brand Save Karna
      </h2>
      <p>
        Sab details fill karne ke baad
        <strong> Save</strong> button par click karo
        jisse brand successfully add ho jaata hai.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Save brand" />

      <h2 className="text-xl font-semibold mt-6">
        Brand List View
      </h2>
      <p>
        Added brands ko
        <strong> Brand List</strong> me
        easily dekha ja sakta hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Brand list" />

      <h2 className="text-xl font-semibold mt-6">
        Edit Brand
      </h2>
      <p>
        Kisi bhi existing brand ko
        <strong> Edit</strong> karke
        uski details update ki ja sakti hain.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Edit brand" />

      <h2 className="text-xl font-semibold mt-6">
        Update Brand
      </h2>
      <p>
        Required changes ke baad
        <strong> Update</strong> button par click karo.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Update brand" />

      <h2 className="text-xl font-semibold mt-6">
        Brand Status
      </h2>
      <p>
        Brand ka
        <strong> Active</strong> ya
        <strong> Inactive</strong> status
        manage kiya ja sakta hai.
      </p>
      <img src={img9} className="rounded-md shadow" alt="Brand status" />

      <h2 className="text-xl font-semibold mt-6">
        Search Brand
      </h2>
      <p>
        <strong> Search</strong> option ka use karke
        specific brand easily find kiya ja sakta hai.
      </p>
      <img src={img10} className="rounded-md shadow" alt="Search brand" />

      <h2 className="text-xl font-semibold mt-6">
        Filter Brand
      </h2>
      <p>
        Brands ko
        <strong> filters</strong> ke through
        sort aur manage kiya ja sakta hai.
      </p>
      <img src={img11} className="rounded-md shadow" alt="Filter brand" />

      <h2 className="text-xl font-semibold mt-6">
        Brand Usage
      </h2>
      <p>
        Brands products ke saath map hote hain
        jisse inventory tracking aur reports accurate hoti hain.
      </p>
      <img src={img12} className="rounded-md shadow" alt="Brand usage" />

      <h2 className="text-xl font-semibold mt-6">
        Validation Check
      </h2>
      <p>
        Duplicate brand name
        <strong> allow nahi hota</strong>,
        system automatically validation karta hai.
      </p>
      <img src={img13} className="rounded-md shadow" alt="Brand validation" />

      <h2 className="text-xl font-semibold mt-6">
        Brand Successfully Added
      </h2>
      <p>
        Successful action ke baad
        system
        <strong> success message</strong>
        display karta hai.
      </p>
      <img src={img14} className="rounded-md shadow" alt="Brand success" />

    </div>
  );
};

export default AddBrand;
