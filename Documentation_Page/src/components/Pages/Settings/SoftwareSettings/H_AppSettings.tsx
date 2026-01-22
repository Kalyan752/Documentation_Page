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
        App Settings
      </h1>

      <p>
        <strong>App Settings</strong> ka use karke
        aap Retailix application ke
        overall behavior aur preferences
        ko customize kar sakte ho.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="App settings overview"
      />

      <h2 className="text-xl font-semibold mt-6">
        Application Preferences
      </h2>

      <p>
        Yaha par aap application ke
        common options jaise
        <strong> default settings</strong> aur
        <strong> user preferences</strong>
        configure kar sakte ho.
      </p>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Application preferences"
      />

      <h2 className="text-xl font-semibold mt-6">
        Feature Configuration
      </h2>

      <p>
        Is section me aap
        different application features ko
        <strong> enable ya disable</strong>
        kar sakte ho
        apni business requirement ke hisaab se.
      </p>

      <img
        src={img3}
        className="rounded-md shadow"
        alt="Feature configuration"
      />

      <h2 className="text-xl font-semibold mt-6">
        Notification & Alerts
      </h2>

      <p>
        Yaha par aap
        application ke
        <strong> notifications</strong> aur
        <strong> alerts</strong>
        related settings manage kar sakte ho.
      </p>

      <img
        src={img4}
        className="rounded-md shadow"
        alt="Notifications and alerts"
      />

      <h2 className="text-xl font-semibold mt-6">
        Save App Settings
      </h2>

      <p>
        Saari app settings configure karne ke baad,
        <strong> Save</strong> button par click karo
        jisse changes successfully apply ho jaate hain.
      </p>

      <img
        src={img5}
        className="rounded-md shadow"
        alt="Save app settings"
      />

    </div>
  );
};

export default AppSettings;
