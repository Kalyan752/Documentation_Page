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
        Category
      </h1>

      <p className="font-semibold">
        How to access Category
      </p>

      <p>Go to <strong>Retailix Configuration</strong> → <strong>Inventory Masters</strong> → <strong>Category</strong></p>
      <p>You will see the <strong>Category management page</strong> with all existing categories listed</p>
      <img src={img1} className="rounded-md shadow" alt="Category management page" />

      <h2 className="text-xl font-semibold">
        Adding a New Category
      </h2>

      <p>Click the <strong>"Add Category"</strong> button on the Category management page</p>
      <img src={img2} className="rounded-md shadow" alt="Add category button" />

      <p>The window titled <strong>"Add Category"</strong> will appear</p>
      <img src={img3} className="rounded-md shadow" alt="Add category modal" />

      <p>In the <strong>"Category"</strong> field, enter the category name (e.g., <strong>"Electronics"</strong>)</p>
      <img src={img4} className="rounded-md shadow" alt="Category name field" />

      <p>The <strong>"Category Slug"</strong> field will auto-populate (e.g., <strong>"electronics"</strong>), but you can edit it if needed</p>
      <img src={img5} className="rounded-md shadow" alt="Category slug field" />

      <p>Ensure the <strong>"Status"</strong> toggle is in the <strong>ON</strong> position (green) if you want the category to be immediately active</p>
      <img src={img6} className="rounded-md shadow" alt="Category status toggle" />

      <p>Click the <strong>"Add Category"</strong> button (orange) to save the new category</p>
      <img src={img7} className="rounded-md shadow" alt="Save category" />

      <p>A <strong>success message</strong> will appear, confirming the category has been created</p>
      <img src={img8} className="rounded-md shadow" alt="Category created success" />

      <p>The new category will now appear in the <strong>category list</strong></p>
      <img src={img9} className="rounded-md shadow" alt="Category list updated" />

      <h2 className="text-xl font-semibold">
        Editing a Category
      </h2>

      <p>On the Category list page, locate the category you want to edit</p>
      <p>Click the <strong>Edit</strong> icon or <strong>"Edit"</strong> option in the Actions column</p>
      <img src={img10} className="rounded-md shadow" alt="Edit category option" />

      <p>A form will appear with the current category details pre-filled</p>
      <img src={img11} className="rounded-md shadow" alt="Edit category form" />

      <p>Make the necessary changes to:</p>
      <p>• <strong>Category name</strong></p>
      <p>• <strong>Category slug</strong></p>
      <p>• <strong>Status</strong></p>

      <p>Click the <strong>"Save Changes"</strong> button</p>
      <img src={img12} className="rounded-md shadow" alt="Save category changes" />

      <p>The changes will be saved and reflected in the list</p>
      <img src={img13} className="rounded-md shadow" alt="Updated category list" />

      <h2 className="text-xl font-semibold">
        Deactivating a Category
      </h2>

      <p>On the Category list page, find the category to deactivate</p>
      <p>Click the <strong>Edit</strong> icon or <strong>"Edit"</strong> option in the Actions column</p>

      <p>A form will appear with the current category details pre-filled</p>
      <p>Click the <strong>Status</strong> toggle at bottom to turn it <strong>OFF</strong> (gray)</p>
      <img src={img14} className="rounded-md shadow" alt="Deactivate category" />

      <p>Click the <strong>"Save Changes"</strong> button</p>
      <p>The changes will be saved and reflected in the list</p>

      <p>The category will move to <strong>"Inactive"</strong> status and will not appear in product creation dropdowns</p>
      <img src={img15} className="rounded-md shadow" alt="Inactive category" />

      <h2 className="text-xl font-semibold">
        Deleting a Category
      </h2>

      <p>Locate the category in the list</p>
      <p>Click the <strong>Delete</strong> icon or <strong>"Delete"</strong> option in the Actions column</p>

      <p>A confirmation dialog will appear asking <strong>"Are you sure you want to delete this category?"</strong></p>
      <p>Click <strong>"Confirm"</strong> or <strong>"Yes, Delete"</strong> to permanently remove the category</p>
      <img src={img16} className="rounded-md shadow" alt="Delete category confirmation" />

      <p className="font-semibold">
        Note: This action cannot be undone
      </p>

    </div>
  );
};

export default AddCategory;
