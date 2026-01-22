import React from "react";

// Images
import img1 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image1.png";
import img2 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image2.png";
import img3 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image3.png";
import img4 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image4.png";
import img5 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image5.png";
import img6 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image6.png";
import img7 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image7.png";
import img8 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image8.png";
import img9 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image9.png";
import img10 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image10.png";
import img11 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image11.png";
import img12 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image12.png";
import img13 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image13.png";
import img14 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image14.png";
import img15 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image15.png";
import img16 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddCategory/image16.png";

const AddCategory: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Category
      </h1>

      <p>
        <strong>Add Category</strong> feature ka use karke
        aap apne products ko
        different categories me organize kar sakte ho
        taaki inventory management easy ho jaaye.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add category overview" />

      <h2 className="text-xl font-semibold mt-6">
        Category Section Access Kaise Kare
      </h2>
      <p>
        Retailix Configuration ke andar
        <strong> Inventory Masters</strong> section me jaakar
        <strong> Category</strong> option select karo.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Access category section" />

      <h2 className="text-xl font-semibold mt-6">
        Add New Category
      </h2>
      <p>
        <strong>Add Category</strong> button par click karke
        aap nayi category create kar sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Add category button" />

      <h2 className="text-xl font-semibold mt-6">
        Category Details Fill Karna
      </h2>
      <p>
        Category create karte waqt
        <strong> Category Name</strong>,
        <strong> Description</strong> aur
        <strong> Status</strong>
        jaise details fill karni hoti hain.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Category details" />

      <h2 className="text-xl font-semibold mt-6">
        Category Save Karna
      </h2>
      <p>
        Sab details fill karne ke baad
        <strong> Save</strong> button par click karo
        jisse category successfully add ho jaati hai.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Save category" />

      <h2 className="text-xl font-semibold mt-6">
        Category List View
      </h2>
      <p>
        Added categories ko
        <strong> Category List</strong> me
        easily dekha ja sakta hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Category list" />

      <h2 className="text-xl font-semibold mt-6">
        Edit Category
      </h2>
      <p>
        Kisi bhi existing category ko
        <strong> Edit</strong> karke
        uski details update ki ja sakti hain.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Edit category" />

      <h2 className="text-xl font-semibold mt-6">
        Update Category
      </h2>
      <p>
        Required changes karne ke baad
        <strong> Update</strong> button par click karo.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Update category" />

      <h2 className="text-xl font-semibold mt-6">
        Category Status
      </h2>
      <p>
        Category ka
        <strong> Active</strong> ya
        <strong> Inactive</strong> status
        manage kiya ja sakta hai.
      </p>
      <img src={img9} className="rounded-md shadow" alt="Category status" />

      <h2 className="text-xl font-semibold mt-6">
        Search Category
      </h2>
      <p>
        <strong> Search</strong> option ka use karke
        specific category ko easily find kiya ja sakta hai.
      </p>
      <img src={img10} className="rounded-md shadow" alt="Search category" />

      <h2 className="text-xl font-semibold mt-6">
        Filter Category
      </h2>
      <p>
        Categories ko
        <strong> filters</strong> ke through
        sort aur manage kiya ja sakta hai.
      </p>
      <img src={img11} className="rounded-md shadow" alt="Filter category" />

      <h2 className="text-xl font-semibold mt-6">
        Category Usage
      </h2>
      <p>
        Categories products ke sath map hoti hain
        jisse reporting aur inventory tracking easy hoti hai.
      </p>
      <img src={img12} className="rounded-md shadow" alt="Category usage" />

      <h2 className="text-xl font-semibold mt-6">
        Category Validation
      </h2>
      <p>
        Duplicate category name
        <strong> allow nahi hota</strong>,
        system automatically validation karta hai.
      </p>
      <img src={img13} className="rounded-md shadow" alt="Category validation" />

      <h2 className="text-xl font-semibold mt-6">
        Delete Category
      </h2>
      <p>
        Agar category use me nahi hai
        to use
        <strong> delete</strong> bhi kiya ja sakta hai.
      </p>
      <img src={img14} className="rounded-md shadow" alt="Delete category" />

      <h2 className="text-xl font-semibold mt-6">
        Confirmation Popup
      </h2>
      <p>
        Delete karte waqt
        <strong> confirmation popup</strong>
        aata hai taaki galti se delete na ho.
      </p>
      <img src={img15} className="rounded-md shadow" alt="Confirmation popup" />

      <h2 className="text-xl font-semibold mt-6">
        Category Successfully Added
      </h2>
      <p>
        Successful action ke baad
        system
        <strong> success message</strong>
        display karta hai.
      </p>
      <img src={img16} className="rounded-md shadow" alt="Category success" />

    </div>
  );
};

export default AddCategory;
