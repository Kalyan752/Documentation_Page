import React from "react";

// Images
import img1 from "../../../../assets/Settings/SoftwareSettings/InvoiceSettings/image1.png";
import img2 from "../../../../assets/Settings/SoftwareSettings/InvoiceSettings/image2.png";
import img3 from "../../../../assets/Settings/SoftwareSettings/InvoiceSettings/image3.png";
import img4 from "../../../../assets/Settings/SoftwareSettings/InvoiceSettings/image4.png";
import img5 from "../../../../assets/Settings/SoftwareSettings/InvoiceSettings/image5.png";

const InvoiceSettings: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Invoice Settings
      </h1>

      <p className="font-semibold">
        How to configure “Invoice Settings”
      </p>

      {/* =========================
          1. Navigation Phase
      ========================== */}
      <h2 className="text-xl font-semibold">
        1. Navigation Phase
      </h2>

      <p>
        <strong>Step 1:</strong> Access the <strong>Settings</strong> dropdown menu
        on the left sidebar.
      </p>
      <p>
        <strong>Step 2:</strong> Select <strong>Software Settings</strong> to
        expand the sub-menu.
      </p>
      <p>
        <strong>Step 3:</strong> Click on <strong>Invoice Settings</strong> to
        open the configuration dashboard.
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Navigate to Invoice Settings"
      />

      {/* =========================
          2. Review Phase
      ========================== */}
      <h2 className="text-xl font-semibold">
        2. Review Phase
      </h2>

      <p>
        <strong>Step 4:</strong> Review current <strong>Company Information</strong>:
      </p>
      <p>• <strong>Name</strong></p>
      <p>• <strong>Email</strong></p>
      <p>• <strong>Phone</strong></p>
      <p>• <strong>Address</strong></p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Company information review"
      />

      <p>
        <strong>Step 5:</strong> Check <strong>Invoice Numbering</strong>
      </p>
      <p>• <strong>Prefix</strong></p>
      <p>• <strong>Starting Number</strong></p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="Invoice numbering"
      />

      <p>
        <strong>Step 6:</strong> Inspect <strong>Invoice Content</strong>
      </p>
      <p>• <strong>Tax Rate</strong></p>
      <p>• <strong>Header</strong></p>
      <p>• <strong>Footer / Notes</strong></p>

      <p>
        <strong>Step 7:</strong> Verify <strong>Appearance</strong>
      </p>
      <p>• <strong>Primary Color (Hex Code)</strong></p>
      <img
        src={img4}
        className="rounded-md shadow"
        alt="Invoice content and appearance"
      />

      {/* =========================
          3. Action Phase
      ========================== */}
      <h2 className="text-xl font-semibold">
        3. Action Phase
      </h2>

      <p>
        <strong>Step 8:</strong> Click the orange <strong>Edit Settings</strong>{" "}
        button (top right) to enable modification mode.
      </p>

      <p>
        <strong>Step 9:</strong> Enter or update missing details (for example,
        change <strong>“Not set”</strong> fields to your business details).
      </p>

      <p>
        <strong>Step 10:</strong> Click <strong>Save / Update</strong> (this button
        typically appears after clicking <strong>Edit</strong>).
      </p>
      <img
        src={img5}
        className="rounded-md shadow"
        alt="Edit and save invoice settings"
      />

      {/* =========================
          4. Verification Phase
      ========================== */}
      <h2 className="text-xl font-semibold">
        4. Verification Phase
      </h2>

      <p>
        <strong>Step 11:</strong> Click the <strong>Refresh</strong> button to
        ensure the dashboard reflects the new changes.
      </p>

    </div>
  );
};

export default InvoiceSettings;
