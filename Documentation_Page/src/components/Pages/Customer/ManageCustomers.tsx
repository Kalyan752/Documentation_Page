import React from "react";

// Images (order of appearance in document)
import img1 from "../../../assets/Customer/ManageCustomers/image1.png";
import img2 from "../../../assets/Customer/ManageCustomers/image2.png";
import img3 from "../../../assets/Customer/ManageCustomers/image3.png";
import img4 from "../../../assets/Customer/ManageCustomers/image4.png";
import img5 from "../../../assets/Customer/ManageCustomers/image5.png";
import img6 from "../../../assets/Customer/ManageCustomers/image6.png";

const ManageCustomers: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          HOW TO MANAGE CUSTOMER’S
      ============================ */}
      <h1 className="text-2xl font-bold">How to Manage Customer’s</h1>

      {/* Step 1 */}
      <h2 className="text-xl font-semibold">Step 1: Open Manage Customer</h2>
      <p>Go to “Customers” and choose “Manage Customer.”</p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Open Manage Customer"
      />

      {/* Step 2 */}
      <h2 className="text-xl font-semibold">Step 2: Search Customers</h2>
      <p>Use the Search tab to find specific customers.</p>
      <p>Use Status filters to view customers based on their status.</p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Search customers"
      />

      {/* Step 3 */}
      <h2 className="text-xl font-semibold">Step 3: Add or Export Customers</h2>
      <p>Add single or multiple customers from this section.</p>
      <p>Click “Export” to download customer data.</p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="Add or export customers"
      />

      {/* Step 4 */}
      <h2 className="text-xl font-semibold">Step 4: Change Customer Status</h2>
      <p>Use the Status tab to update a customer’s status.</p>
      <img
        src={img4}
        className="rounded-md shadow"
        alt="Change customer status"
      />

      <img
        src={img5}
        className="rounded-md shadow"
        alt="View edit delete customers"
      />

      {/* Step 5 */}
      <h2 className="text-xl font-semibold">
        Step 5: View, Edit, or Delete Customers
      </h2>
      <p>Use the Action button to:</p>
      <p>View customer details</p>
      <p>Edit customer information</p>
      <p>Delete a customer</p>
      

      {/* Step 6 */}
      <img
        src={img6}
        className="rounded-md shadow"
        alt="Manage customers final view"
      />

    </div>
  );
};

export default ManageCustomers;
