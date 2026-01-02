import React from "react";

// Images
import img1 from "../../../../assets/Settings/DataSync/RestoreData/image1.png";
import img2 from "../../../../assets/Settings/DataSync/RestoreData/image2.png";

const RestoreData: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Restore Data
      </h1>

      <p className="font-semibold">
        How to “Restore Data”
      </p>

      <h2 className="text-xl font-semibold">
        1. Access Data Sync
      </h2>

      <p>
        Navigate to <strong>Settings &gt; Data Sync</strong> in the sidebar to manage your database state.
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Access Data Sync"
      />

      <h2 className="text-xl font-semibold">
        2. Restore Data
      </h2>

      <p>
        Select <strong>Restore Data</strong>. Upload a backup file to populate the system with existing records.
      </p>
      <p className="text-red-600 font-semibold">
        Warning: This will overwrite current data.
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Restore data process"
      />

    </div>
  );
};

export default RestoreData;
