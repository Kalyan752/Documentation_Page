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

      <p>
        <strong>Restore Data</strong> feature ka use karke
        aap pehle se liye gaye
        <strong> backup data</strong> ko
        system me wapas restore kar sakte ho.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Restore data screen"
      />

      <p>
        Yaha par aap:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          Pehle se available
          <strong> backup file</strong> select kar sakte ho
        </li>
        <li>
          Selected backup se
          system ka data
          <strong> restore</strong> kar sakte ho
        </li>
      </ul>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Restore confirmation"
      />

      <p>
        Restore process complete hone ke baad,
        system automatically selected backup ke
        according data load kar lega.
        Is process ke dauraan
        system ko band na karein.
      </p>

    </div>
  );
};

export default RestoreData;
