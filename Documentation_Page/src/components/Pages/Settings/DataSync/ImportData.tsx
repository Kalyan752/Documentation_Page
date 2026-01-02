import React from "react";

// Images
import img1 from "../../../../assets/Settings/DataSync/ImportData/image1.png";
import img2 from "../../../../assets/Settings/DataSync/ImportData/image2.png";
import img3 from "../../../../assets/Settings/DataSync/ImportData/image3.png";
import img4 from "../../../../assets/Settings/DataSync/ImportData/image4.png";

const ImportData: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Import Data
      </h1>

      <p className="font-semibold">
        How “Import Data”
      </p>

      <h2 className="text-xl font-semibold">
        Step 1: Access the Module
      </h2>

      <p>
        On the left-hand navigation menu, scroll down to the{" "}
        <strong>Data Sync</strong> dropdown and select the{" "}
        <strong>Import Data</strong> sub-menu (currently highlighted in orange).
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Access Import Data module"
      />

      <h2 className="text-xl font-semibold">
        Step 2: Verify Safety Protocol
      </h2>

      <p>
        Note the green <strong>"Safe Import Operation"</strong> banner.
      </p>
      <p>
        This confirms that the action will <strong>add</strong> to your database
        rather than overwrite or delete existing records.
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Safe import operation banner"
      />

      <h2 className="text-xl font-semibold">
        Step 3: Select Source File
      </h2>

      <p>
        Click the <strong>Choose File</strong> button. A browser window will open
        for you to select your spreadsheet or data file.
      </p>
      <p>
        <strong>Confirm Selection:</strong> Ensure the text{" "}
        <strong>"No file chosen"</strong> changes to your specific filename.
      </p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="Select source file"
      />

      <h2 className="text-xl font-semibold">
        Step 4: Execute Import
      </h2>

      <p>
        Click the orange <strong>Import Data</strong> button at the bottom of the
        main white card to begin the processing.
      </p>
      <img
        src={img4}
        className="rounded-md shadow"
        alt="Execute import data"
      />

    </div>
  );
};

export default ImportData;
