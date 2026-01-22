import React from "react";

// Images
import img1 from "../../../../assets/Settings/AI_BusinessAnalyst/AI_Settings/image1.png";
import img2 from "../../../../assets/Settings/AI_BusinessAnalyst/AI_Settings/image2.png";
import img3 from "../../../../assets/Settings/AI_BusinessAnalyst/AI_Settings/image3.png";

const AI_Settings: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        AI Settings
      </h1>

      <p>
        <strong>AI Settings</strong> section ka use karke
        aap Retailix ke
        <strong> AI Business Analyst</strong>
        related configurations ko manage kar sakte ho.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="AI settings overview"
      />

      <h2 className="text-xl font-semibold mt-6">
        AI Feature Configuration
      </h2>

      <p>
        Yaha par aap
        AI based features ko
        <strong> enable ya disable</strong>
        kar sakte ho
        apni business requirement ke hisaab se.
      </p>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="AI feature configuration"
      />

      <h2 className="text-xl font-semibold mt-6">
        Data & Analysis Settings
      </h2>

      <p>
        Is section me aap
        AI ke liye use hone wale
        <strong> data sources</strong>,
        <strong> analysis preferences</strong>
        aur
        <strong> reporting options</strong>
        configure kar sakte ho.
      </p>

      <img
        src={img3}
        className="rounded-md shadow"
        alt="AI data analysis settings"
      />

      <p>
        Saari AI settings configure karne ke baad,
        <strong> Save</strong> button par click karo
        jisse AI Business Analyst
        selected settings ke according kaam karega.
      </p>

    </div>
  );
};

export default AI_Settings;
