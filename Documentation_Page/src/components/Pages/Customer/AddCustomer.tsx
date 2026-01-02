import React from "react";

// Images
import img1 from "../../../assets/Customer/AddCustomer/AddCustomer_1.png";
import img2 from "../../../assets/Customer/AddCustomer/AddCustomer_2.png";
import img3 from "../../../assets/Customer/AddCustomer/AddCustomer_3.png";
import img4 from "../../../assets/Customer/AddCustomer/AddCustomer_4.png";
import img5 from "../../../assets/Customer/AddCustomer/AddCustomer_5.png";
import img6 from "../../../assets/Customer/AddCustomer/AddCustomer_6.png";
import img7 from "../../../assets/Customer/AddCustomer/AddCustomer_7.png";
import img8 from "../../../assets/Customer/AddCustomer/AddCustomer_8.png";
import img9 from "../../../assets/Customer/AddCustomer/AddCustomer_9.png";
import img10 from "../../../assets/Customer/AddCustomer/AddCustomer_10.png";
import img11 from "../../../assets/Customer/AddCustomer/AddCustomer_11.png";

const AddCustomer: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          ADD CUSTOMER – SINGLE CUSTOMER
      ============================ */}

      <h1 className="text-2xl font-bold">How to Add a Single Customer</h1>

      {/* Step 1 */}
      <h2 className="text-xl font-semibold">Step 1: Go to Add Customer</h2>
      <p>Navigate to “Customers” in the menu.</p>
      <p>Select “Add Customer” from the dropdown.</p>
      <p>Click on the “Single Customer” tab.</p>
      <img src={img1} className="rounded-md shadow" alt="Go to Add Customer - Single" />

      {/* Step 2 */}
      <h2 className="text-xl font-semibold">Step 2: Select the Customer Type</h2>
      <p>Select the Customer Type from the dropdown.</p>
      <img src={img2} className="rounded-md shadow" alt="Select customer type single" />

      {/* Step 3 */}
      <h2 className="text-xl font-semibold">Step 3: Fill Customer Details</h2>
      <p>Fill in all required fields for the customer.</p>
      <p>Click “Save Customer Data” to finalize the entry.</p>
      <img src={img3} className="rounded-md shadow" alt="Fill single customer details" />

      {/* ===========================
          ADD CUSTOMER – MULTIPLE CUSTOMER
      ============================ */}

      <h1 className="text-2xl font-bold mt-10">
        How to Add Customer’s (Multiple Customer)
      </h1>

      {/* Step 1 */}
      <h2 className="text-xl font-semibold">Step 1: Go to Add Customer</h2>
      <p>Navigate to “Customers” → “Add Customer.”</p>
      <p>Click on the “Multiple Customer” tab.</p>
      <img src={img4} className="rounded-md shadow" alt="Go to Add Customer - Multiple" />

      {/* Step 2 */}
      <h2 className="text-xl font-semibold">Step 2: Select Customer Type</h2>
      <p>Select the Customer Type from the dropdown.</p>
      <img src={img5} className="rounded-md shadow" alt="Select customer type multiple" />

      {/* Step 3 */}
      <h2 className="text-xl font-semibold">Step 3: Enter Customer Details</h2>
      <p>Add the customer information (Name & Mobile Number).</p>
      <img src={img6} className="rounded-md shadow" alt="Enter multiple customer details" />

      {/* Step 4 */}
      <h2 className="text-xl font-semibold">Step 4: Add More Rows (Optional)</h2>
      <p>Click “Add Row” to include more customer entries.</p>
      <img src={img7} className="rounded-md shadow" alt="Add more rows" />

      {/* Step 5 */}
      <h2 className="text-xl font-semibold">Step 5: Delete Rows (Optional)</h2>
      <p>
        Under the Action column, click the delete icon to remove any entry.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Delete rows" />

      {/* Step 6 */}
      <h2 className="text-xl font-semibold">Step 6: Save All Customers</h2>
      <p>After entering all customer details, click “Save All.”</p>
      <img src={img9} className="rounded-md shadow" alt="Save all customers" />

      {/* Step 7 */}
      <h2 className="text-xl font-semibold">Step 7: Import Excel File (Optional)</h2>
      <p>Click “Import Excel” to upload customer data from an Excel file.</p>
      <img src={img10} className="rounded-md shadow" alt="Import excel" />

      {/* Step 8 */}
      <h2 className="text-xl font-semibold">Step 8: Download Template (Optional)</h2>
      <p>
        Click “Download Template” to download the Excel format for bulk entry.
      </p>
      <img src={img11} className="rounded-md shadow" alt="Download template" />

    </div>
  );
};

export default AddCustomer;
