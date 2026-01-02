import React from "react";

// Images
import img1 from "../../../../assets/Settings/SoftwareSettings/PrintSettings/image1.png";
import img2 from "../../../../assets/Settings/SoftwareSettings/PrintSettings/image2.png";
import img3 from "../../../../assets/Settings/SoftwareSettings/PrintSettings/image3.png";

const PrintSettings: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Print Settings
      </h1>

      <p className="font-semibold">
        How to manage “Print Settings”
      </p>

      <h2 className="text-xl font-semibold">
        Step 1: Navigation
      </h2>

      <p>
        Open the sidebar and navigate to{" "}
        <strong>Settings</strong> → <strong>Software Settings</strong> →{" "}
        <strong>Print Settings</strong>
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Navigate to Print Settings"
      />

      <h2 className="text-xl font-semibold">
        Step 2: Initiate Edit
      </h2>

      <p>
        Click the orange <strong>Edit Settings</strong> button in the top right
        corner to enable form fields
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Edit print settings"
      />

      <h2 className="text-xl font-semibold">
        Step 3: Print Configuration
      </h2>

      <p>
        <strong>Header Config:</strong> Locate the <strong>Page Margins</strong>{" "}
        section and enter the desired numerical value for the{" "}
        <strong>Header Margin</strong> (measured in px)
      </p>

      <p>
        <strong>Footer Config:</strong> Enter the desired numerical value for the{" "}
        <strong>Footer Margin</strong> (measured in px)
      </p>

      <p>
        <strong>Review:</strong> Verify that the margins align with your document
        templates under the <strong>Print Configuration</strong> header
      </p>

      <p>
        <strong>Save / Submit:</strong> Submit the changes to update the system
        defaults
      </p>

      <img
        src={img3}
        className="rounded-md shadow"
        alt="Save print settings"
      />

    </div>
  );
};

export default PrintSettings;
