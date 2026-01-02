import React from "react";

// Images
import img1 from "../../../../assets/Settings/AI_BusinessAnalyst/AI_BusinessAnalyst_Report/image1.png";
import img2 from "../../../../assets/Settings/AI_BusinessAnalyst/AI_BusinessAnalyst_Report/image2.png";
import img3 from "../../../../assets/Settings/AI_BusinessAnalyst/AI_BusinessAnalyst_Report/image3.png";

const AI_BusinessAnalyst_Report: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        AI Business Analyst Report
      </h1>

      <p className="font-semibold">
        How to access “AI Business Analyst Report”
      </p>

      <h2 className="text-xl font-semibold">
        Step 1: Configure AI Integration Settings
      </h2>

      <p>
        Before generating reports, the AI model must be properly linked to the software.
      </p>

      <p>
        Navigate to <strong>Settings</strong>: Click on the <strong>Settings</strong> menu in the left-hand sidebar.
      </p>
      <p>
        Select <strong>Software Settings</strong>: Click the <strong>Software Settings</strong> dropdown.
      </p>
      <p>
        Access <strong>AI Settings</strong>: Click on <strong>AI Business Analyst</strong> and then select the{" "}
        <strong>AI Settings</strong> tab.
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Configure AI integration settings"
      />

      <h2 className="text-xl font-semibold">
        Step 2: Configure Report Parameters
      </h2>

      <p>
        <strong>Select Report Type:</strong> Choose the category of data you want to analyze.
      </p>
      <p>
        <strong>Select Date:</strong> Pick the specific date or range for the data pull.
      </p>
      <p>
        <strong>Enter Question / Command:</strong> Type a specific prompt, such as{" "}
        <strong>"Ask something about your report..."</strong> to guide the AI's focus.
      </p>
      <p>
        <strong>Generate Report:</strong> Click the orange <strong>Generate Report</strong> button.
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Configure report parameters"
      />

      <h2 className="text-xl font-semibold">
        Step 3: Generate AI Business Analysis Report
      </h2>

      <p>
        <strong>Access Report Interface:</strong> Under the <strong>AI Business Analyst</strong> sidebar menu,
        select <strong>AI Business Analyst Report</strong>.
      </p>
      <p>
        <strong>Review Insights:</strong> Analyze the generated table (showing <strong>Product</strong>,
        <strong> Sales</strong>, <strong>Purchases</strong>, and <strong>Stock</strong>) and the{" "}
        <strong>"Key Insights"</strong> section for recommended actions.
      </p>
      <p>
        <strong>Export Data:</strong> Click the <strong>Download PDF</strong> button to save a hard copy of the analysis.
      </p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="AI business analyst report output"
      />

    </div>
  );
};

export default AI_BusinessAnalyst_Report;
