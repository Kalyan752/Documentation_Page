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
        Stores
      </h1>

      <p className="font-semibold">
        How to access Stores
      </p>

      <p>
        Go to <strong>Retailix Configuration</strong> →{" "}
        <strong>Inventory Masters</strong> → <strong>Stores</strong>
      </p>
      <p>
        You will see the <strong>Store management page</strong> listing all stores
      </p>
      <img src={img1} className="rounded-md shadow" alt="Stores management page" />

      <h2 className="text-xl font-semibold">
        Adding a New Store
      </h2>

      <p>
        On the Stores page, click the <strong>"Add Store"</strong> button (orange button, top-right)
      </p>
      <img src={img2} className="rounded-md shadow" alt="Add store button" />

      <p>
        The window titled <strong>"Add Store"</strong> will appear
      </p>
      <img src={img3} className="rounded-md shadow" alt="Add store modal" />

      <p>
        In the <strong>"Store Name"</strong> field, enter your store name:
      </p>
      <p>• Example: <strong>"GMA (Great Mobile Accessories)"</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Store name field" />

      <p>
        In the <strong>"Username"</strong> field set the username:
      </p>
      <p>• Example: <strong>danish123</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Username field" />

      <p>
        In the <strong>"Email"</strong> field enter the email address:
      </p>
      <p>• Example: <strong>danish123@gmamobile.com</strong></p>
      <img src={img6} className="rounded-md shadow" alt="Email field" />

      <p>
        In the <strong>"Phone"</strong> field enter the phone number:
      </p>
      <p>• Example: <strong>1234567809</strong></p>
      <img src={img7} className="rounded-md shadow" alt="Phone field" />

      <p>
        Set the password in the <strong>"Password"</strong> field
      </p>
      <img src={img8} className="rounded-md shadow" alt="Password field" />

      <p>
        Ensure the <strong>"Status"</strong> toggle is <strong>ON</strong> (green) if you want the store to be active
      </p>
      <img src={img9} className="rounded-md shadow" alt="Store status toggle" />

      <p>
        Click the <strong>"Add"</strong> button (orange) to save
      </p>
      <img src={img10} className="rounded-md shadow" alt="Save store" />

      <p>
        A <strong>success message</strong> will confirm the store has been created
      </p>
      <p>
        The new store will appear in the <strong>Stores list</strong>
      </p>
      <img src={img11} className="rounded-md shadow" alt="Store created success" />

      <h2 className="text-xl font-semibold">
        Editing a Store
      </h2>

      <p>
        On the Store list page, locate the Store you want to edit
      </p>
      <p>
        Click the <strong>Edit</strong> icon or <strong>"Edit"</strong> option in the Actions column
      </p>
      <img src={img12} className="rounded-md shadow" alt="Edit store" />

      <p>
        A form will appear with the current Store details pre-filled
      </p>
      <p>
        Make the necessary changes to:
      </p>
      <p>• <strong>Store name</strong></p>
      <p>• <strong>Username</strong></p>
      <p>• <strong>Email</strong></p>
      <p>• <strong>Phone</strong></p>
      <p>• <strong>Password</strong></p>
      <p>• <strong>Status</strong></p>

      <p>
        Click the <strong>"Update"</strong> or <strong>"Save Changes"</strong> button
      </p>

      <p>
        The changes will be saved and reflected in the list
      </p>

      <h2 className="text-xl font-semibold">
        Deactivating / Activating a Store
      </h2>

      <p>
        On the Stores list page, find the Store to deactivate
      </p>
      <p>
        Click the <strong>Edit</strong> icon or <strong>"Edit"</strong> option
      </p>

      <p>
        Click the <strong>Status</strong> toggle at bottom to turn it <strong>OFF / ON</strong> (gray / green)
      </p>

      <p>
        Click the <strong>"Update"</strong> button
      </p>

      <p>
        The changes will be saved and reflected in the list
      </p>

      <h2 className="text-xl font-semibold">
        Deleting a Store
      </h2>

      <p>
        Locate the Store in the list
      </p>
      <p>
        Click the <strong>Delete</strong> icon or <strong>"Delete"</strong> option in the Actions column
      </p>

      <p>
        A confirmation dialog will appear asking{" "}
        <strong>"Are you sure you want to delete this Store?"</strong>
      </p>
      <p>
        Click <strong>"Confirm"</strong> or <strong>"Yes, Delete"</strong> to permanently remove the Store
      </p>
      <img src={img13} className="rounded-md shadow" alt="Delete store confirmation" />

      <p className="font-semibold">
        Note: This action cannot be undone
      </p>

    </div>
  );
};

export default AddStores;
