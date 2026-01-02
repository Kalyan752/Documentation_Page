import React from "react";

// Images
import img1 from "../../../../assets/Settings/DataSync/BackupData/image1.png";
import img2 from "../../../../assets/Settings/DataSync/BackupData/image2.png";

const BackupData: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Backup Data
      </h1>

      <p className="font-semibold">
        How to “Backup Data”
      </p>

      <h2 className="text-xl font-semibold">
        Step 1: Access the Backup Module
      </h2>

      <p>
        Locate the <strong>Data Sync</strong> menu in the sidebar and select the{" "}
        <strong>Backup Data</strong> option (currently highlighted in orange).
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Access Backup Data module"
      />

      <h2 className="text-xl font-semibold">
        Step 2: Verify Backup Format
      </h2>

      <p>
        Note the information banner stating that the system will provide a complete
        backup of your database specifically in <strong>JSON format</strong> for
        safekeeping.
      </p>

      <p>
        <strong>Initiate Download:</strong> Click the orange button labeled{" "}
        <strong>Download JSON</strong> located within the main content area.
      </p>

      <p>
        <strong>Finalize Storage:</strong> Once the file is downloaded by your
        browser, ensure it is moved to a secure external drive or cloud storage to
        prevent local data loss.
      </p>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Download JSON backup"
      />

    </div>
  );
};

export default BackupData;
