import React from "react";

// Image
import img1 from "../../../../assets/Settings/SoftwareSettings/Language/image1.png";

const Language: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Language Management
      </h1>

      <p className="font-semibold">
        How to set “Language”
      </p>

      <h2 className="text-xl font-semibold">
        Step 1: Language Management
      </h2>

      <p>
        Navigate to <strong>Language Manager</strong>
      </p>
      <p>
        Click on the <strong>Language</strong> tab under{" "}
        <strong>Software Settings</strong>
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Language management screen"
      />

      <p>
        <strong>Add New Language:</strong> In the <strong>"Add New Language"</strong>{" "}
        section, enter the desired language name into the text field
      </p>

      <p>
        <strong>Save & Refresh:</strong> Click the <strong>Save Language</strong>{" "}
        button to update the system
      </p>
      <p>
        You can use the <strong>Refresh</strong> button to verify the update in
        the language list table
      </p>

    </div>
  );
};

export default Language;
