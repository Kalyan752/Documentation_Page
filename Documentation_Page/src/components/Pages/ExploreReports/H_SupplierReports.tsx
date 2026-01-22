import React from "react";

// Images
import img1 from "../../../assets/ExploreReports/SupplierReports/image1.png";
import img2 from "../../../assets/ExploreReports/SupplierReports/image2.png";
import img3 from "../../../assets/ExploreReports/SupplierReports/image3.png";
import img4 from "../../../assets/ExploreReports/SupplierReports/image4.png";
import img5 from "../../../assets/ExploreReports/SupplierReports/image5.png";
import img6 from "../../../assets/ExploreReports/SupplierReports/image6.png";
import img7 from "../../../assets/ExploreReports/SupplierReports/image7.png";

const SupplierReports: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Supplier Reports
      </h1>

      <p>
        <strong>Supplier Reports</strong> ka use karke
        aap suppliers se related transactions aur activities ko
        clearly analyze kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Supplier reports overview" />

      <h2 className="text-xl font-semibold mt-6">
        Supplier Report Kya Dikhata Hai?
      </h2>
      <p>
        Ye report supplier se related important details dikhata hai jaise
        <strong> Supplier Name</strong>,
        <strong> Total Purchases</strong>,
        <strong> Outstanding Amount</strong> aur
        <strong> Payment Status</strong>.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Supplier report details" />

      <h2 className="text-xl font-semibold mt-6">
        Date Range Select Karo
      </h2>
      <p>
        Aap <strong>Date Range</strong> select karke
        kisi specific period ke liye
        supplier reports dekh sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Select date range" />

      <h2 className="text-xl font-semibold mt-6">
        Supplier Wise Analysis
      </h2>
      <p>
        Is section me aap
        <strong>Supplier-wise</strong> purchase aur payment data
        analyze kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Supplier wise analysis" />

      <h2 className="text-xl font-semibold mt-6">
        Outstanding Payables
      </h2>
      <p>
        Yaha par suppliers ke
        <strong>Outstanding Payables</strong> dikhaye jaate hain
        jisse payment planning easy ho jaati hai.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Outstanding payables" />

      <h2 className="text-xl font-semibold mt-6">
        Supplier Transaction Summary
      </h2>
      <p>
        Ye section supplier ki
        <strong>Transaction Summary</strong> provide karta hai
        jisme purchases aur payments ka overview hota hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Supplier transaction summary" />

      <h2 className="text-xl font-semibold mt-6">
        Export Supplier Report
      </h2>
      <p>
        Supplier report ko
        <strong> Export</strong> karke
        future reference aur accounting purpose ke liye
        use kiya ja sakta hai.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Export supplier report" />

    </div>
  );
};

export default SupplierReports;
