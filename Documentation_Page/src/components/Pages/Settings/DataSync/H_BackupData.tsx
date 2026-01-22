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

      <p>
        <strong>Backup Data</strong> feature ka use karke
        aap apne system ke
        important data ka
        secure backup create kar sakte ho.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Backup data screen"
      />

      <p>
        Yaha par aap:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          System ke current data ka
          <strong> backup</strong> generate kar sakte ho
        </li>
        <li>
          Generated backup ko
          future restore ke liye
          <strong> safely store</strong>
          kar sakte ho
        </li>
      </ul>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Backup confirmation"
      />

      <p>
        Regular backup lena recommended hai
        taaki kisi bhi unexpected issue ke case me
        data loss se bachaya ja sake.
      </p>

    </div>
  );
};

export default BackupData;
