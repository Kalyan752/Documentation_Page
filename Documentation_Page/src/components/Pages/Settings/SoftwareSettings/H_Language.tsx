import React from "react";

// Image
import img1 from "../../../../assets/Settings/SoftwareSettings/Language/image1.png";

const Language: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Language Settings
      </h1>

      <p>
        <strong>Language Settings</strong> ka use karke
        aap Retailix application ki
        display language ko easily change kar sakte ho.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Language settings screen"
      />

      <p>
        Is section me aap:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          Application ke liye
          <strong> preferred language</strong> select kar sakte ho
        </li>
        <li>
          Language change karke
          system ko apni convenience ke hisaab se use kar sakte ho
        </li>
      </ul>

      <p>
        Language select karne ke baad,
        settings automatically apply ho jaati hain
        aur application selected language me dikhai degi.
      </p>

    </div>
  );
};

export default Language;
