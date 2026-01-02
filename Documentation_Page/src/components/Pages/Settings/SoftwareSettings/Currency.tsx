import React from "react";

// Image
import img1 from "../../../../assets/Settings/SoftwareSettings/Currency/image1.png";

const Currency: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Currency Management
      </h1>

      <p className="font-semibold">
        How to set “Currency”
      </p>

      <p>
        <strong>Open Software Settings:</strong> Click the{" "}
        <strong>Software Settings</strong> dropdown in the sidebar
      </p>

      <p>
        <strong>Access Currency Management:</strong> Navigate to the{" "}
        <strong>Currency Management</strong> dashboard to manage and track all
        currencies
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Currency management dashboard"
      />

      <p>
        <strong>View Existing Data:</strong> The system displays a list with
        columns for:
      </p>
      <p>• <strong>SL</strong></p>
      <p>• <strong>Currency Name</strong></p>
      <p>• <strong>Currency Code</strong></p>
      <p>• <strong>Symbol</strong></p>
      <p>• <strong>Actions</strong></p>

      <p>
        <strong>Note:</strong> If no data is present, the screen displays{" "}
        <strong>"No currencies found"</strong>
      </p>

      <p>
        <strong>Search / Refresh:</strong> Use the <strong>search bar</strong> to
        filter by name, code, or symbol, or click the{" "}
        <strong>Refresh</strong> button to update the list
      </p>

      <p>
        <strong>Initiate "Add Currency":</strong> Click the orange{" "}
        <strong>+ Add Currency</strong> button to open the creation form
      </p>

      <p>
        <strong>Submit New Currency:</strong> Input the required currency details
        and save to update the management list
      </p>

    </div>
  );
};

export default Currency;
