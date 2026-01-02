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
        Warranty
      </h1>

      <p className="font-semibold">
        How to access Warranty
      </p>

      <p>
        Go to <strong>Retailix Configuration</strong> →{" "}
        <strong>Inventory Masters</strong> → <strong>Warranty</strong>
      </p>
      <p>
        You will see the <strong>Warranty management page</strong> with all existing warranties listed
      </p>
      <img src={img1} className="rounded-md shadow" alt="Warranty management page" />

      <h2 className="text-xl font-semibold">
        Adding a New Warranty
      </h2>

      <p>
        Click the <strong>"Add Warranty"</strong> button
      </p>
      <img src={img2} className="rounded-md shadow" alt="Add warranty button" />

      <p>
        The <strong>"Add Warranty"</strong> window will appear
      </p>
      <img src={img3} className="rounded-md shadow" alt="Add warranty modal" />

      <p>
        Enter the <strong>Warranty Name</strong>
      </p>
      <img src={img4} className="rounded-md shadow" alt="Warranty name field" />

      <p>
        Enter the <strong>Warranty Duration</strong>
      </p>
      <img src={img5} className="rounded-md shadow" alt="Warranty duration field" />

      <p>
        Select the <strong>Duration Type</strong> (Days / Months / Years)
      </p>
      <img src={img6} className="rounded-md shadow" alt="Duration type selection" />

      <p>
        Enter the <strong>Description</strong> (optional)
      </p>
      <img src={img7} className="rounded-md shadow" alt="Warranty description" />

      <p>
        Ensure the <strong>Status</strong> toggle is set to <strong>ON</strong>
      </p>
      <img src={img8} className="rounded-md shadow" alt="Warranty status toggle" />

      <p>
        Click <strong>"Add Warranty"</strong> to save
      </p>
      <img src={img9} className="rounded-md shadow" alt="Save warranty" />

      <p>
        A <strong>success message</strong> will be displayed
      </p>
      <img src={img10} className="rounded-md shadow" alt="Warranty success message" />

      <h2 className="text-xl font-semibold">
        Editing a Warranty
      </h2>

      <p>
        Locate the warranty and click the <strong>Edit</strong> option
      </p>
      <img src={img11} className="rounded-md shadow" alt="Edit warranty" />

      <p>
        Update and click <strong>"Save Changes"</strong>
      </p>
      <img src={img12} className="rounded-md shadow" alt="Save warranty changes" />

      <h2 className="text-xl font-semibold">
        Deleting a Warranty
      </h2>

      <p>
        Click <strong>Delete</strong> and confirm the action
      </p>
      <img src={img13} className="rounded-md shadow" alt="Delete warranty confirmation" />

      <p className="font-semibold">
        Note: This action cannot be undone
      </p>

    </div>
  );
};

export default AddWarranty;
