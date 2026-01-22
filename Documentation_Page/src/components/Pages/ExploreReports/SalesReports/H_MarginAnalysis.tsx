import React from "react";

// Images
import img1 from "../../../../assets/ExploreReports/SalesReports/MarginAnalysis/image1.png";
import img2 from "../../../../assets/ExploreReports/SalesReports/MarginAnalysis/image2.png";
import img3 from "../../../../assets/ExploreReports/SalesReports/MarginAnalysis/image3.png";
import img4 from "../../../../assets/ExploreReports/SalesReports/MarginAnalysis/image4.png";
import img5 from "../../../../assets/ExploreReports/SalesReports/MarginAnalysis/image5.png";
import img6 from "../../../../assets/ExploreReports/SalesReports/MarginAnalysis/image6.png";
import img7 from "../../../../assets/ExploreReports/SalesReports/MarginAnalysis/image7.png";

const MarginAnalysis: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Margin Analysis
      </h1>

      <p>
        <strong>Margin Analysis Report</strong> ka use karke
        aap apne products ki profit margin ko
        clearly analyze kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Margin analysis overview" />

      <h2 className="text-xl font-semibold mt-6">
        Margin Analysis Report Kya Dikhata Hai?
      </h2>
      <p>
        Ye report product ki
        <strong> Cost Price</strong>,
        <strong> Selling Price</strong> aur
        <strong> Profit Margin</strong> ka detailed view
        provide karta hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Margin analysis details" />

      <h2 className="text-xl font-semibold mt-6">
        Date Range Select Karo
      </h2>
      <p>
        Aap <strong>Date Range</strong> select karke
        kisi specific period ke liye
        margin analysis dekh sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Select date range" />

      <h2 className="text-xl font-semibold mt-6">
        Product Wise Margin
      </h2>
      <p>
        Yaha par har product ka
        <strong>Margin</strong> dikhaya jaata hai
        jisse aap samajh sakte ho
        kaunsa product zyada profitable hai.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Product wise margin" />

      <h2 className="text-xl font-semibold mt-6">
        Low Aur High Margin Products
      </h2>
      <p>
        Is section me aap
        <strong>Low Margin</strong> aur
        <strong>High Margin</strong> products
        easily identify kar sakte ho.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Low high margin products" />

      <h2 className="text-xl font-semibold mt-6">
        Business Decision Support
      </h2>
      <p>
        Margin analysis aapko better
        <strong>Pricing Strategy</strong> aur
        <strong>Inventory Planning</strong> lene me
        madad karta hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Business decision support" />

      <h2 className="text-xl font-semibold mt-6">
        Export Margin Analysis Report
      </h2>
      <p>
        Margin analysis report ko
        <strong> Export</strong> karke
        future reference aur reporting ke liye
        use kiya ja sakta hai.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Export margin analysis report" />

    </div>
  );
};

export default MarginAnalysis;
