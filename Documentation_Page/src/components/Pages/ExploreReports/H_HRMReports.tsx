import React from "react";

// Images
import img1 from "../../../assets/ExploreReports/HRMReports/image1.png";
import img2 from "../../../assets/ExploreReports/HRMReports/image2.png";
import img3 from "../../../assets/ExploreReports/HRMReports/image3.png";
import img4 from "../../../assets/ExploreReports/HRMReports/image4.png";
import img5 from "../../../assets/ExploreReports/HRMReports/image5.png";
import img6 from "../../../assets/ExploreReports/HRMReports/image6.png";
import img7 from "../../../assets/ExploreReports/HRMReports/image7.png";

const HRMReports: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        HRM Reports
      </h1>

      <p>
        <strong>HRM Reports</strong> ka use karke
        aap employees aur attendance se related data ko
        easily analyze kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="HRM reports overview" />

      <h2 className="text-xl font-semibold mt-6">
        HRM Report Kya Dikhata Hai?
      </h2>
      <p>
        Ye report human resource management se related
        important details dikhata hai jaise
        <strong> Employee Details</strong>,
        <strong> Attendance</strong> aur
        <strong> Work Performance</strong>.
      </p>
      <img src={img2} className="rounded-md shadow" alt="HRM report details" />

      <h2 className="text-xl font-semibold mt-6">
        Employee Report
      </h2>
      <p>
        <strong>Employee Report</strong> ke through
        aap employees ki complete information
        aur status dekh sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Employee report" />

      <h2 className="text-xl font-semibold mt-6">
        Attendance Report
      </h2>
      <p>
        <strong>Attendance Report</strong> ka use karke
        aap employees ki present, absent aur leave details
        analyze kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Attendance report" />

      <h2 className="text-xl font-semibold mt-6">
        Date Range Select Karo
      </h2>
      <p>
        Aap <strong>Date Range</strong> select karke
        kisi specific period ke liye
        HRM reports generate kar sakte ho.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Select date range" />

      <h2 className="text-xl font-semibold mt-6">
        HRM Summary
      </h2>
      <p>
        Ye section HRM ka
        <strong>Summary</strong> provide karta hai
        jisse overall employee aur attendance status
        easily samajh me aata hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="HRM summary" />

      <h2 className="text-xl font-semibold mt-6">
        Export HRM Report
      </h2>
      <p>
        HRM report ko
        <strong> Export</strong> karke
        future reference aur HR planning ke liye
        use kiya ja sakta hai.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Export HRM report" />

    </div>
  );
};

export default HRMReports;
