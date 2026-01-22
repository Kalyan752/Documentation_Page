import React from "react";

// Images
import img1 from "../../../../assets/ExploreReports/ThirdPartyReports/SummaryReport/image1.png";
import img2 from "../../../../assets/ExploreReports/ThirdPartyReports/SummaryReport/image2.png";
import img3 from "../../../../assets/ExploreReports/ThirdPartyReports/SummaryReport/image3.png";
import img4 from "../../../../assets/ExploreReports/ThirdPartyReports/SummaryReport/image4.png";
import img5 from "../../../../assets/ExploreReports/ThirdPartyReports/SummaryReport/image5.png";
import img6 from "../../../../assets/ExploreReports/ThirdPartyReports/SummaryReport/image6.png";

const SummaryReport: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Summary Report
      </h1>

      <p>
        <strong>Summary Report</strong> ka use karke
        aap third party transactions ka
        ek clear aur short overview dekh sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Summary report overview" />

      <h2 className="text-xl font-semibold mt-6">
        Summary Report Kya Hai?
      </h2>
      <p>
        Ye report third party transactions ka
        <strong> consolidated summary</strong> dikhata hai
        jisme total amount, payment mode aur
        transaction count shamil hota hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Summary report details" />

      <h2 className="text-xl font-semibold mt-6">
        Transaction Overview
      </h2>
      <p>
        Is section me aap
        <strong> transaction overview</strong> dekh sakte ho
        jisse total inflow aur outflow easily samajh aata hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Transaction overview" />

      <h2 className="text-xl font-semibold mt-6">
        Payment Mode Wise Summary
      </h2>
      <p>
        Yaha par transactions ko
        <strong> payment modes</strong> ke basis par
        group karke dikhaya jaata hai
        jaise Cash, Card, UPI, etc.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Payment mode summary" />

      <h2 className="text-xl font-semibold mt-6">
        Date Range Filter
      </h2>
      <p>
        Aap <strong>Date Range</strong> select karke
        kisi specific period ke liye
        summary report generate kar sakte ho.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Date range filter" />

      <h2 className="text-xl font-semibold mt-6">
        Export Summary Report
      </h2>
      <p>
        Summary report ko
        <strong> Export</strong> karke
        future reference aur accounting ke liye
        use kiya ja sakta hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Export summary report" />

    </div>
  );
};

export default SummaryReport;
