import React from "react";

// Images
import img1 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image1.png";
import img2 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image2.png";
import img3 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image3.png";
import img4 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image4.png";
import img5 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image5.png";
import img6 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image6.png";
import img7 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image7.png";
import img8 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image8.png";
import img9 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image9.png";
import img10 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image10.png";
import img11 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image11.png";
import img12 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image12.png";
import img13 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image13.png";
import img14 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image14.png";
import img15 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image15.png";
import img16 from "../../../../assets/RetailixConfiguration/InventoryMasters/AddSubCategory/image16.png";

const AddSubCategory: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Sub Category
      </h1>

      <p className="font-semibold">
        How to access Sub Category
      </p>

      <p>
        Go to <strong>Retailix Configuration</strong> →{" "}
        <strong>Inventory Masters</strong> → <strong>Sub Category</strong>
      </p>
      <p>
        You will see the <strong>Sub Category management page</strong> with all
        existing sub categories listed
      </p>
      <img src={img1} className="rounded-md shadow" alt="Sub category list page" />

      <h2 className="text-xl font-semibold">
        Adding a New Sub Category
      </h2>

      <p>
        Click the <strong>"Add Sub Category"</strong> button
      </p>
      <img src={img2} className="rounded-md shadow" alt="Add sub category button" />

      <p>
        The <strong>"Add Sub Category"</strong> window will appear
      </p>
      <img src={img3} className="rounded-md shadow" alt="Add sub category modal" />

      <p>
        Select the <strong>Category</strong> from the dropdown
      </p>
      <img src={img4} className="rounded-md shadow" alt="Select category" />

      <p>
        Enter the <strong>Sub Category Name</strong>
      </p>
      <img src={img5} className="rounded-md shadow" alt="Sub category name" />

      <p>
        The <strong>Sub Category Slug</strong> will auto-generate and can be edited
      </p>
      <img src={img6} className="rounded-md shadow" alt="Sub category slug" />

      <p>
        Ensure the <strong>Status</strong> toggle is <strong>ON</strong>
      </p>
      <img src={img7} className="rounded-md shadow" alt="Sub category status" />

      <p>
        Click <strong>"Add Sub Category"</strong> to save
      </p>
      <img src={img8} className="rounded-md shadow" alt="Save sub category" />

      <p>
        A <strong>success message</strong> will be displayed
      </p>
      <img src={img9} className="rounded-md shadow" alt="Sub category success" />

      <h2 className="text-xl font-semibold">
        Editing a Sub Category
      </h2>

      <p>
        Locate the sub category and click the <strong>Edit</strong> option
      </p>
      <img src={img10} className="rounded-md shadow" alt="Edit sub category" />

      <p>
        Update required fields
      </p>
      <img src={img11} className="rounded-md shadow" alt="Edit form" />

      <p>
        Click <strong>"Save Changes"</strong>
      </p>
      <img src={img12} className="rounded-md shadow" alt="Save changes" />

      <p>
        Updated data will reflect in the list
      </p>
      <img src={img13} className="rounded-md shadow" alt="Updated list" />

      <h2 className="text-xl font-semibold">
        Deactivating a Sub Category
      </h2>

      <p>
        Turn <strong>Status</strong> toggle <strong>OFF</strong> and save
      </p>
      <img src={img14} className="rounded-md shadow" alt="Deactivate sub category" />

      <p>
        Sub category will move to <strong>Inactive</strong> state
      </p>
      <img src={img15} className="rounded-md shadow" alt="Inactive sub category" />

      <h2 className="text-xl font-semibold">
        Deleting a Sub Category
      </h2>

      <p>
        Click <strong>Delete</strong> and confirm the action
      </p>
      <img src={img16} className="rounded-md shadow" alt="Delete sub category" />

      <p className="font-semibold">
        Note: This action cannot be undone
      </p>

    </div>
  );
};

export default AddSubCategory;
