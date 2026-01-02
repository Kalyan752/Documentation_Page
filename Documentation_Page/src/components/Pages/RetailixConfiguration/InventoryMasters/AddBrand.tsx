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
        Brand
      </h1>

      <p className="font-semibold">
        How to access Brand
      </p>

      <p>
        Go to <strong>Retailix Configuration</strong> →{" "}
        <strong>Inventory Masters</strong> → <strong>Brand</strong>
      </p>
      <p>
        You will see the <strong>Brand management page</strong> listing all brands
      </p>
      <img src={img1} className="rounded-md shadow" alt="Brand management page" />

      <h2 className="text-xl font-semibold">
        Adding a New Brand
      </h2>

      <p>
        On the Brand page, click the <strong>"Add Brand"</strong> button (orange
        button, top-right)
      </p>
      <img src={img2} className="rounded-md shadow" alt="Add brand button" />

      <p>
        The <strong>"Add Brand"</strong> window will appear
      </p>
      <img src={img3} className="rounded-md shadow" alt="Add brand window" />

      <p>
        Click the image upload area with the <strong>(+)</strong> icon to select a
        brand logo or image
      </p>
      <p>• Select a <strong>JPEG</strong> or <strong>PNG</strong> file (max <strong>2 MB</strong>)</p>
      <p>• Alternatively, drag and drop an image onto the area</p>
      <img src={img4} className="rounded-md shadow" alt="Upload brand image" />

      <p>
        Once the image is uploaded, you'll see a <strong>preview</strong>
      </p>
      <img src={img5} className="rounded-md shadow" alt="Brand image preview" />

      <p>
        In the <strong>"Brand Name"</strong> field, enter the official brand name
        (e.g., <strong>"Samsung"</strong>)
      </p>
      <img src={img6} className="rounded-md shadow" alt="Brand name field" />

      <p>
        Verify the <strong>Status</strong> toggle is in the <strong>ON</strong>{" "}
        position (green) if you want the brand to be active
      </p>
      <img src={img7} className="rounded-md shadow" alt="Brand status toggle" />

      <p>
        Click the <strong>"Add"</strong> button (orange) to save the new brand
      </p>
      <img src={img8} className="rounded-md shadow" alt="Save brand" />

      <p>
        A <strong>success message</strong> will confirm the brand has been created
      </p>
      <img src={img9} className="rounded-md shadow" alt="Brand created success" />

      <p>
        The new brand will now appear in the <strong>Brand list</strong>
      </p>
      <img src={img10} className="rounded-md shadow" alt="Brand list updated" />

      <h2 className="text-xl font-semibold">
        Editing a Brand
      </h2>

      <p>
        On the Brand list page, locate the brand you want to edit
      </p>
      <p>
        Click the <strong>Edit</strong> icon or <strong>"Edit"</strong> option in
        the Actions column
      </p>
      <img src={img11} className="rounded-md shadow" alt="Edit brand" />

      <p>
        A form will appear with the current brand details:
      </p>
      <p>• <strong>Current brand image</strong></p>
      <p>• <strong>Brand name</strong></p>
      <p>• <strong>Status</strong></p>
      <img src={img12} className="rounded-md shadow" alt="Edit brand form" />

      <p>
        Make the necessary changes:
      </p>
      <p>• Change the image: Click on the current image to replace it</p>
      <p>• Change the name: Edit the brand name field</p>
      <p>• Toggle status: Turn the status ON or OFF as needed</p>

      <p>
        Click the <strong>"Update"</strong> or{" "}
        <strong>"Save Changes"</strong> button
      </p>
      <img src={img13} className="rounded-md shadow" alt="Save brand changes" />

      <p>
        The changes will be saved and reflected in the list immediately
      </p>

      <h2 className="text-xl font-semibold">
        Deactivating / Activating a Brand
      </h2>

      <p>
        On the Brand list page, find the brand to deactivate
      </p>
      <p>
        Click the <strong>Edit</strong> icon or <strong>"Edit"</strong> option
      </p>

      <p>
        Click the <strong>Status</strong> toggle at bottom to turn it{" "}
        <strong>OFF / ON</strong> (gray / green)
      </p>

      <p>
        Click the <strong>"Save Changes"</strong> button
      </p>

      <p>
        The Brand will move to <strong>"Inactive"</strong> status and will not
        appear in product creation dropdowns
      </p>

      <h2 className="text-xl font-semibold">
        Deleting a Brand
      </h2>

      <p>
        Locate the Brand in the list
      </p>
      <p>
        Click the <strong>Delete</strong> icon or <strong>"Delete"</strong> option
        in the Actions column
      </p>

      <p>
        A confirmation dialog will appear asking{" "}
        <strong>"Are you sure you want to delete this Brand?"</strong>
      </p>
      <p>
        Click <strong>"Confirm"</strong> or{" "}
        <strong>"Yes, Delete"</strong> to permanently remove the brand
      </p>
      <img src={img14} className="rounded-md shadow" alt="Delete brand confirmation" />

      <p className="font-semibold">
        Note: This action cannot be undone
      </p>

    </div>
  );
};

export default AddBrand;
