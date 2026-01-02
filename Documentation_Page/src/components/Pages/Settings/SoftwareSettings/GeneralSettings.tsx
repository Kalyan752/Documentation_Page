import React from "react";

// Images
import img1 from "../../../../assets/Settings/SoftwareSettings/GeneralSettings/image1.png";
import img2 from "../../../../assets/Settings/SoftwareSettings/GeneralSettings/image2.png";
import img3 from "../../../../assets/Settings/SoftwareSettings/GeneralSettings/image3.png";
import img4 from "../../../../assets/Settings/SoftwareSettings/GeneralSettings/image4.png";

const GeneralSettings: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        General Settings
      </h1>

      <p className="font-semibold">
        How to manage “General Settings”
      </p>

      <h2 className="text-xl font-semibold">
        Step 1: Navigate to General Settings
      </h2>

      <p>
        Select <strong>Settings</strong> → <strong>Software Settings</strong> →{" "}
        <strong>General Settings</strong> from the side navigation menu
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Navigate to General Settings"
      />

      <h2 className="text-xl font-semibold">
        Step 2: Configure Branding
      </h2>

      <p>
        Upload a <strong>Logo</strong> and a <strong>Sale Logo</strong>
      </p>
      <p>
        Upload a <strong>Favicon</strong>
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Branding configuration"
      />

      <h2 className="text-xl font-semibold">
        Step 3: Set Regional Preferences
      </h2>

      <p>
        Select the default <strong>Currency</strong> from the dropdown menu
      </p>
      <p>
        Select the system <strong>Language</strong>
      </p>
      <p>
        Choose the <strong>Text Direction</strong> (e.g., Left to Right)
      </p>
      <p>
        Enter custom <strong>Footer Text</strong>
      </p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="Regional preferences"
      />

      <h2 className="text-xl font-semibold">
        Step 4: Configure System Features
      </h2>

      <p>
        Toggle features like:
      </p>
      <p>• <strong>Enable Invoice QR Code</strong></p>
      <p>• <strong>Auto Approve Invoice Voucher</strong></p>
      <img
        src={img4}
        className="rounded-md shadow"
        alt="System feature toggles"
      />

      <h2 className="text-xl font-semibold">
        Finalize Setup
      </h2>

      <p>
        Click <strong>Create Settings</strong> to save the configuration
      </p>
      <p>
        Click <strong>Cancel</strong> to discard changes
      </p>

    </div>
  );
};

export default GeneralSettings;
