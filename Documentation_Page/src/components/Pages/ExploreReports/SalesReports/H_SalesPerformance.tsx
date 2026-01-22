import React from "react";

// Images
import img1 from "../../../../assets/ExploreReports/SalesReports/SalesPerformance/image1.png";
import img2 from "../../../../assets/ExploreReports/SalesReports/SalesPerformance/image2.png";
import img3 from "../../../../assets/ExploreReports/SalesReports/SalesPerformance/image3.png";
import img4 from "../../../../assets/ExploreReports/SalesReports/SalesPerformance/image4.png";
import img5 from "../../../../assets/ExploreReports/SalesReports/SalesPerformance/image5.png";
import img6 from "../../../../assets/ExploreReports/SalesReports/SalesPerformance/image6.png";

const SalesPerformance: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Sales Performance
      </h1>

      <p>
        <strong>Sales Performance Report</strong> ka use karke
        aap apne business ki overall sales performance ko
        clearly analyze kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Sales performance overview" />

      <h2 className="text-xl font-semibold mt-6">
        Sales Performance Report Kya Dikhata Hai?
      </h2>
      <p>
        Ye report sales ke important metrics dikhata hai jaise
        <strong> Total Sales</strong>,
        <strong> Revenue</strong>,
        <strong> Growth</strong> aur
        <strong> Profitability</strong>.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Sales performance metrics" />

      <h2 className="text-xl font-semibold mt-6">
        Date Range Select Karo
      </h2>
      <p>
        Aap <strong>Date Range</strong> select karke
        kisi specific period ki sales performance
        analyze kar sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Select date range" />

      <h2 className="text-xl font-semibold mt-6">
        Sales Trend Analysis
      </h2>
      <p>
        Ye section aapko sales ka <strong>Trend</strong> dikhata hai
        jisse aap samajh sakte ho ki sales increase ho rahi hai
        ya decrease.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Sales trend analysis" />

      <h2 className="text-xl font-semibold mt-6">
        Performance Comparison
      </h2>
      <p>
        Aap different time periods ki sales ko
        <strong>Compare</strong> karke
        better business decisions le sakte ho.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Performance comparison" />

      <h2 className="text-xl font-semibold mt-6">
        Export Sales Performance Report
      </h2>
      <p>
        Sales performance report ko
        <strong> Export</strong> karke
        aap future reference ya analysis ke liye
        use kar sakte ho.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Export sales performance report" />

    </div>
  );
};

export default SalesPerformance;
