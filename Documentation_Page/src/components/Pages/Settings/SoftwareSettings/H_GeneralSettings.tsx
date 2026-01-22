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

      <p>
        <strong>General Settings</strong> section ka use karke
        aap application ke basic aur common settings
        easily configure kar sakte ho.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="General settings overview"
      />

      <h2 className="text-xl font-semibold mt-6">
        Application Preferences
      </h2>

      <p>
        Yaha par aap application ke
        common preferences set kar sakte ho,
        jaise default options aur behavior.
      </p>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Application preferences"
      />

      <h2 className="text-xl font-semibold mt-6">
        System Configuration
      </h2>

      <p>
        Is section me system related
        configurations available hoti hain
        jo application ke smooth working me help karti hain.
      </p>

      <img
        src={img3}
        className="rounded-md shadow"
        alt="System configuration"
      />

      <h2 className="text-xl font-semibold mt-6">
        Save General Settings
      </h2>

      <p>
        Saari settings configure karne ke baad,
        <strong> Save</strong> button par click karo
        jisse changes successfully apply ho jaate hain.
      </p>

      <img
        src={img4}
        className="rounded-md shadow"
        alt="Save general settings"
      />

    </div>
  );
};

export default GeneralSettings;
