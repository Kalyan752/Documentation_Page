import React from "react";

// Images
import img1 from "../../../../assets/Settings/AI_BusinessAnalyst/AI_Settings/image1.png";
import img2 from "../../../../assets/Settings/AI_BusinessAnalyst/AI_Settings/image2.png";
import img3 from "../../../../assets/Settings/AI_BusinessAnalyst/AI_Settings/image3.png";

const AI_Settings: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        AI Business Analyst
      </h1>

      <p className="font-semibold">
        How to access “AI Business Analyst”
      </p>

      <h2 className="text-xl font-semibold">
        Step 1: Navigation
      </h2>

      <p>
        Navigate to the sidebar on the left and click on <strong>Settings</strong>
      </p>
      <p>
        Select <strong>Software Settings</strong>
      </p>
      <p>
        Under the Settings dropdown, click on <strong>Software Settings</strong>{" "}
        to reveal further options
      </p>
      <p>
        Open <strong>AI Business Analyst</strong>
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="AI Business Analyst navigation"
      />

      <h2 className="text-xl font-semibold">
        Step 2: Open AI Settings
      </h2>

      <p>
        Locate the <strong>AI Business Analyst</strong> section (highlighted in
        orange in the sidebar)
      </p>
      <p>
        Go to <strong>AI Settings</strong>
      </p>
      <p>
        Click on the <strong>AI Settings</strong> tab to open the configuration
        dashboard
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="AI settings dashboard"
      />

      <p>
        <strong>Initiate Edit Mode</strong>
      </p>
      <p>
        Look at the top right of the <strong>"AI Settings"</strong> card and click
        the <strong>Edit Settings</strong> button
      </p>

      <p>
        <strong>Configure API Credentials</strong>
      </p>
      <p>
        Enter your valid <strong>API Key</strong> into the{" "}
        <strong>API Configuration</strong> field
      </p>

      <p>
        <strong>Select AI Model</strong>
      </p>
      <p>
        Choose your preferred model (e.g., <strong>gpt-4</strong>) from the{" "}
        <strong>Model</strong> dropdown list
      </p>

      <h2 className="text-xl font-semibold">
        Step 3: Define Model Parameters
      </h2>

      <p>
        Set <strong>Temperature</strong>: Adjust the creativity / randomness
        (currently set to <strong>0.7</strong>)
      </p>
      <p>
        Set <strong>Max Tokens</strong>: Define the maximum length of the AI
        response (currently set to <strong>2000</strong>)
      </p>
      <p>
        Set <strong>Prompt Temperature</strong>: Fine-tune the specific prompt
        sensitivity (currently set to <strong>0.5</strong>)
      </p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="AI model parameters"
      />

      <h2 className="text-xl font-semibold">
        Step 4: Save & Validate
      </h2>

      <p>
        Save your changes and ensure the system displays the credentials as{" "}
        <strong>"Configured"</strong>
      </p>

    </div>
  );
};

export default AI_Settings;
