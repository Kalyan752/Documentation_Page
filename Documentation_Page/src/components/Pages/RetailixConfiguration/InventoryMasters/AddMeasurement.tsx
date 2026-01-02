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
        Units Of Measurement
      </h1>

      <p className="font-semibold">
        How to access Units
      </p>

      <p>
        Go to <strong>Retailix Configuration</strong> →{" "}
        <strong>Inventory Masters</strong> →{" "}
        <strong>Units Of Measurements</strong>
      </p>
      <p>
        You will see the <strong>Units management page</strong> listing all units
      </p>
      <img src={img1} className="rounded-md shadow" alt="Units management page" />

      <h2 className="text-xl font-semibold">
        Adding a New Unit
      </h2>

      <p>
        On the Unit page, click the <strong>"Add Unit"</strong> button (orange button, top-right)
      </p>
      <img src={img2} className="rounded-md shadow" alt="Add unit button" />

      <p>
        The window titled <strong>"Add Unit"</strong> will appear
      </p>
      <img src={img3} className="rounded-md shadow" alt="Add unit modal" />

      <p>
        In the <strong>Unit Name</strong> field, enter your unit name:
      </p>
      <p>• Example: for Mobile stores you can use units as <strong>“pieces”</strong> or <strong>“piece”</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Unit name field" />

      <p>
        In the <strong>Unit Code</strong> field set the unit code:
      </p>
      <p>• Example: code: <strong>pc</strong> for unit: <strong>pieces</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Unit code field" />

      <p>
        From the <strong>Unit Type</strong> dropdown field select the relevant unit type:
      </p>
      <p>• Example: for given unit select type <strong>Quantity</strong></p>
      <img src={img6} className="rounded-md shadow" alt="Unit type dropdown" />

      <p>
        In the <strong>Symbol</strong> field enter the symbol:
      </p>
      <p>• Example: for given unit <strong>“pc”</strong></p>
      <img src={img7} className="rounded-md shadow" alt="Unit symbol field" />

      <p>
        (Optional) In the <strong>Description</strong> field enter the description
      </p>
      <img src={img8} className="rounded-md shadow" alt="Unit description" />

      <p>
        Ensure the <strong>Status</strong> toggle is <strong>ON</strong> (green) if you want the unit to be active
      </p>
      <img src={img9} className="rounded-md shadow" alt="Unit status toggle" />

      <p>
        Click the <strong>Add</strong> button (orange) to save
      </p>
      <img src={img10} className="rounded-md shadow" alt="Save unit" />

      <p>
        A <strong>success message</strong> will confirm the unit has been created
      </p>
      <img src={img11} className="rounded-md shadow" alt="Unit created success" />

      <p>
        The new unit will appear in the <strong>Units list</strong>
      </p>
      <img src={img12} className="rounded-md shadow" alt="Units list updated" />

      <h2 className="text-xl font-semibold">
        Editing / Deactivating / Deleting a Unit
      </h2>

      <p>
        On the Units list page, locate the Unit
      </p>
      <p>
        Click the <strong>Edit</strong> icon or <strong>“Edit”</strong> option in the Actions column
      </p>

      <p>
        A form will appear with the current Unit details pre-filled
      </p>
      <p>• <strong>Unit name</strong></p>
      <p>• <strong>Unit Code</strong></p>
      <p>• <strong>Unit Type</strong></p>
      <p>• <strong>Symbol</strong></p>
      <p>• <strong>Description</strong></p>
      <p>• <strong>Status</strong></p>

      <p>
        Click the <strong>“Update”</strong> or <strong>“Save Changes”</strong> button
      </p>

      <p>
        To deactivate or activate, toggle the <strong>Status</strong> <strong>OFF / ON</strong> (gray / green)
      </p>

      <p>
        To delete, click the <strong>Delete</strong> option and confirm
      </p>
      <img src={img13} className="rounded-md shadow" alt="Edit or delete unit" />

      <p className="font-semibold">
        Note: This action cannot be undone
      </p>

    </div>
  );
};

export default AddMeasurement;
