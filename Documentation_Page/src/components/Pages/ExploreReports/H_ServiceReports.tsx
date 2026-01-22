import React from "react";

// Images
import img1 from "../../../assets/ExploreReports/ServiceReports/image1.png";
import img2 from "../../../assets/ExploreReports/ServiceReports/image2.png";
import img3 from "../../../assets/ExploreReports/ServiceReports/image3.png";
import img4 from "../../../assets/ExploreReports/ServiceReports/image4.png";
import img5 from "../../../assets/ExploreReports/ServiceReports/image5.png";
import img6 from "../../../assets/ExploreReports/ServiceReports/image6.png";
import img7 from "../../../assets/ExploreReports/ServiceReports/image7.png";
import img8 from "../../../assets/ExploreReports/ServiceReports/image8.png";

const ServiceReports: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Service Reports
      </h1>

      <p>
        <strong>Service Reports</strong> ka use karke
        aap services se related complete data
        easily analyze aur monitor kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Service reports overview" />

      <h2 className="text-xl font-semibold mt-6">
        Service Report Kya Hai?
      </h2>
      <p>
        Ye report service related information dikhata hai jaise
        <strong> Service Name</strong>,
        <strong> Service Status</strong>,
        <strong> Assigned Technician</strong> aur
        <strong> Completion Details</strong>.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Service report details" />

      <h2 className="text-xl font-semibold mt-6">
        Service Request Details
      </h2>
      <p>
        Is section me aap har
        <strong> Service Request</strong> ki
        complete details dekh sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Service request details" />

      <h2 className="text-xl font-semibold mt-6">
        Technician Wise Report
      </h2>
      <p>
        Yaha par
        <strong> Technician</strong> ke basis par
        services ka performance track kiya jaata hai.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Technician wise report" />

      <h2 className="text-xl font-semibold mt-6">
        Service Status Analysis
      </h2>
      <p>
        Service ka status jaise
        <strong> Pending</strong>,
        <strong> In Progress</strong> aur
        <strong> Completed</strong>
        yaha clearly dikhaya jaata hai.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Service status analysis" />

      <h2 className="text-xl font-semibold mt-6">
        Date Range Filter
      </h2>
      <p>
        Aap <strong>Date Range</strong> select karke
        kisi specific period ke liye
        service reports generate kar sakte ho.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Date range filter" />

      <h2 className="text-xl font-semibold mt-6">
        Service Summary
      </h2>
      <p>
        Ye section services ka
        <strong>Summary</strong> provide karta hai
        jisse overall service performance
        easily samajh me aata hai.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Service summary" />

      <h2 className="text-xl font-semibold mt-6">
        Export Service Report
      </h2>
      <p>
        Service report ko
        <strong> Export</strong> karke
        future reference aur analysis ke liye
        use kiya ja sakta hai.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Export service report" />

    </div>
  );
};

export default ServiceReports;
