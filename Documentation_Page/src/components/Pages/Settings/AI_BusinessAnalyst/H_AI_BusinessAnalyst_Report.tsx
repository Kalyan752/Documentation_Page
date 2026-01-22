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

      <p>
        <strong>AI Business Analyst Report</strong> ka use karke
        aap apne business ka
        <strong> smart analysis</strong>
        aur
        <strong> insights</strong>
        dekh sakte ho,
        jo AI ke through automatically generate hote hain.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="AI business analyst overview"
      />

      <h2 className="text-xl font-semibold mt-6">
        Business Performance Insights
      </h2>

      <p>
        Is report me aapko
        sales, purchase aur overall performance se related
        <strong> important insights</strong>
        milte hain,
        jisse decision making easy ho jaati hai.
      </p>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Business insights"
      />

      <h2 className="text-xl font-semibold mt-6">
        AI Generated Suggestions
      </h2>

      <p>
        Yaha par AI aapko
        business improve karne ke liye
        <strong> recommendations</strong>
        aur
        <strong> suggestions</strong>
        deta hai,
        jo data analysis ke base par hote hain.
      </p>

      <img
        src={img3}
        className="rounded-md shadow"
        alt="AI suggestions"
      />

      <p>
        In reports ka use karke
        aap apne business decisions
        aur zyada accurate aur effective bana sakte ho.
      </p>

    </div>
  );
};

export default AI_BusinessAnalyst_Report;
