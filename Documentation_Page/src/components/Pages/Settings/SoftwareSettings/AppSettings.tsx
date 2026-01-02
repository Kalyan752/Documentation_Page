import React from "react";

// Images
import img1 from "../../../../assets/Settings/SoftwareSettings/AppSettings/image1.png";
import img2 from "../../../../assets/Settings/SoftwareSettings/AppSettings/image2.png";
import img3 from "../../../../assets/Settings/SoftwareSettings/AppSettings/image3.png";
import img4 from "../../../../assets/Settings/SoftwareSettings/AppSettings/image4.png";
import img5 from "../../../../assets/Settings/SoftwareSettings/AppSettings/image5.png";

const AppSettings: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        APP Settings
      </h1>

      <p className="font-semibold">
        How to manage “APP Settings”
      </p>

      {/* =========================
          1. Navigation Phase
      ========================== */}
      <h2 className="text-xl font-semibold">
        1. Navigation Phase
      </h2>

      <p>
        <strong>Step 1:</strong> Locate the <strong>Settings</strong> menu in the
        left-hand sidebar.
      </p>
      <p>
        <strong>Step 2:</strong> Click to expand the{" "}
        <strong>Software Settings</strong> category.
      </p>
      <p>
        <strong>Step 3:</strong> Select <strong>App Settings</strong> to open the
        main configuration dashboard.
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Navigate to App Settings"
      />

      {/* =========================
          2. Review Phase
      ========================== */}
      <h2 className="text-xl font-semibold">
        2. Review Phase
      </h2>

      <p>
        <strong>Step 4:</strong> Verify <strong>General Settings</strong>,
        including:
      </p>
      <p>• <strong>Application Name</strong> ("CRM System")</p>
      <p>• <strong>Timezone</strong> ("UTC")</p>
      <p>• <strong>Date / Time formats</strong></p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="General settings review"
      />

      <p>
        <strong>Step 5:</strong> Review <strong>Notification</strong> statuses:
      </p>
      <p>• <strong>Email</strong> (Enabled)</p>
      <p>• <strong>Push</strong> (Disabled)</p>
      <p>• <strong>SMS</strong> (Disabled)</p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="Notification settings"
      />

      <p>
        <strong>Step 6:</strong> Inspect <strong>Security</strong> protocols:
      </p>
      <p>• <strong>Two-Factor Authentication</strong> status</p>
      <p>• <strong>Session Timeout</strong> (30 minutes)</p>
      <p>• <strong>Password Expiry</strong> (90 days)</p>

      <p>
        <strong>Step 7:</strong> Check <strong>Appearance</strong> and{" "}
        <strong>System Settings</strong>:
      </p>
      <p>• <strong>Theme</strong> (Light)</p>
      <p>• <strong>Primary Color</strong> (#3b82f6)</p>
      <p>• <strong>Backup Frequency</strong></p>
      <p>• <strong>Max Upload Size</strong></p>
      <img
        src={img4}
        className="rounded-md shadow"
        alt="Appearance and system settings"
      />

      {/* =========================
          3. Edit Settings
      ========================== */}
      <h2 className="text-xl font-semibold">
        3. Edit Settings
      </h2>

      <p>
        <strong>Step 8:</strong> Click the orange{" "}
        <strong>Edit Settings</strong> button in the top right corner to modify
        any fields.
      </p>

      <p>
        <strong>Step 9:</strong> Click <strong>Save</strong> before exiting to
        ensure changes affect the entire CRM system.
      </p>
      <img
        src={img5}
        className="rounded-md shadow"
        alt="Edit and save app settings"
      />

    </div>
  );
};

export default AppSettings;
