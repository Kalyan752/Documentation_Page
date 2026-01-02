import React from "react";

// Images (order of appearance in document)
import img1 from "../../../assets/Customer/AddBulkCustomers/image1.png";
import img2 from "../../../assets/Customer/AddBulkCustomers/image2.png";
import img3 from "../../../assets/Customer/AddBulkCustomers/image3.png";
import img4 from "../../../assets/Customer/AddBulkCustomers/image4.png";
import img5 from "../../../assets/Customer/AddBulkCustomers/image5.png";
import img6 from "../../../assets/Customer/AddBulkCustomers/image6.png";
import img7 from "../../../assets/Customer/AddBulkCustomers/image7.png";
import img8 from "../../../assets/Customer/AddBulkCustomers/image8.png";

const AddBulkCustomers: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          HOW TO ADD BULK CUSTOMER’S
      ============================ */}
      <h1 className="text-2xl font-bold">How to Add Bulk Customer’s</h1>

      {/* Step 1 */}
      <h2 className="text-xl font-semibold">Step 1: Go to Add Bulk Customer</h2>
      <p>Click on the “Add Bulk Customer” tab.</p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Go to Add Bulk Customer"
      />

      {/* Step 2 */}
      <h2 className="text-xl font-semibold">Step 2: Select Customer Type</h2>
      <p>Choose the Customer Type from the dropdown.</p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Select customer type bulk"
      />

      {/* Step 3 */}
      <h2 className="text-xl font-semibold">Step 3: Enter Customer Details</h2>
      <p>Enter the customer’s Name and Mobile Number.</p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="Enter bulk customer details"
      />

      {/* Step 4 */}
      <h2 className="text-xl font-semibold">Step 4: Add More Rows</h2>
      <p>Click “Add Row” to insert additional customers.</p>
      <img
        src={img4}
        className="rounded-md shadow"
        alt="Add more rows bulk"
      />

      {/* Step 5 */}
      <h2 className="text-xl font-semibold">Step 5: Delete a Row</h2>
      <p>
        Use the Action tab and click the delete icon to remove entries.
      </p>
      <img
        src={img5}
        className="rounded-md shadow"
        alt="Delete bulk customer row"
      />

      {/* Step 6 */}
      <h2 className="text-xl font-semibold">Step 6: Save All</h2>
      <p>After completing all entries, click “Save All.”</p>
      <img
        src={img6}
        className="rounded-md shadow"
        alt="Save all bulk customers"
      />

      {/* Step 7 */}
      <h2 className="text-xl font-semibold">Step 7: Import Excel File</h2>
      <p>Click “Import Excel” to upload customer data.</p>
      <img
        src={img7}
        className="rounded-md shadow"
        alt="Import excel bulk customers"
      />

      {/* Step 8 */}
      <h2 className="text-xl font-semibold">Step 8: Download Template</h2>
      <p>
        Click “Download Template” to download the bulk upload format.
      </p>
      <img
        src={img8}
        className="rounded-md shadow"
        alt="Download bulk customer template"
      />

    </div>
  );
};

export default AddBulkCustomers;
