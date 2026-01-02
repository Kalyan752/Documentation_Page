import React from "react";

// Images
import img1 from "../../../../assets/RetailixConfiguration/Bank/ManagePaymentMethods/image1.png";
import img2 from "../../../../assets/RetailixConfiguration/Bank/ManagePaymentMethods/image2.png";
import img3 from "../../../../assets/RetailixConfiguration/Bank/ManagePaymentMethods/image3.png";
import img4 from "../../../../assets/RetailixConfiguration/Bank/ManagePaymentMethods/image4.png";

const ManagePaymentMethods: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Payment Methods
      </h1>

      <p className="font-semibold">
        How to Manage Payment Methods
      </p>

      <h2 className="text-xl font-semibold">
        Step 1: Navigate to Configuration
      </h2>

      <p>
        Go to the <strong>RetailiX Configuration</strong> section in the sidebar
      </p>
      <p>
        Expand the <strong>Bank</strong> dropdown
      </p>
      <p>
        Select <strong>Manage Payment Methods</strong>
      </p>
      <img src={img1} className="rounded-md shadow" alt="Navigate to manage payment methods" />

      <h2 className="text-xl font-semibold">
        Step 2: Review Summary
      </h2>

      <p>
        At the top of the page, review the summary cards showing:
      </p>
      <p>• <strong>Total</strong> payment methods</p>
      <p>• <strong>Active</strong> payment methods</p>
      <p>• <strong>Inactive</strong> payment methods</p>
      <img src={img2} className="rounded-md shadow" alt="Payment methods summary cards" />

      <h2 className="text-xl font-semibold">
        Step 3: View Payment Methods List
      </h2>

      <p>
        Scroll down to view the list of available payment methods
      </p>
      <p>
        Each row displays method details along with <strong>Status</strong> and <strong>Actions</strong>
      </p>
      <img src={img3} className="rounded-md shadow" alt="Payment methods list" />

      <h2 className="text-xl font-semibold">
        Step 4: Organize the View
      </h2>

      <p>
        Use the <strong>Search</strong> bar to find a specific payment method
      </p>
      <p>
        Use the <strong>Columns</strong> toggle to customize visible fields such as:
      </p>
      <p>• <strong>Created</strong></p>
      <p>• <strong>Status</strong></p>
      <p>• <strong>Actions</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Search and column settings" />

      <h2 className="text-xl font-semibold">
        Step 5: Add New Payment Method
      </h2>

      <p>
        If the list is empty, click the <strong>Create New Method</strong> button displayed at the center
      </p>
      <p>
        Alternatively, click the <strong>+ New Payment Method</strong> button in the top-right corner
      </p>

      <p className="font-semibold">
        The new payment method will be added and reflected in the list
      </p>

    </div>
  );
};

export default ManagePaymentMethods;
