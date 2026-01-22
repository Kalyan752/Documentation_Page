import React from "react";

// Images
import img1 from "../../../../assets/ExploreReports/SalesReports/SalesByCategory/image1.png";
import img2 from "../../../../assets/ExploreReports/SalesReports/SalesByCategory/image2.png";
import img3 from "../../../../assets/ExploreReports/SalesReports/SalesByCategory/image3.png";
import img4 from "../../../../assets/ExploreReports/SalesReports/SalesByCategory/image4.png";
import img5 from "../../../../assets/ExploreReports/SalesReports/SalesByCategory/image5.png";
import img6 from "../../../../assets/ExploreReports/SalesReports/SalesByCategory/image6.png";

const SalesByCategory: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Sales By Category
      </h1>

      <p>
        <strong>Sales By Category Report</strong> ka use karke
        aap category-wise sales performance ko
        easily analyze kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Sales by category overview" />

      <h2 className="text-xl font-semibold mt-6">
        Sales By Category Report Kya Dikhata Hai?
      </h2>
      <p>
        Ye report har category ki sales details dikhata hai jaise
        <strong> Category Name</strong>,
        <strong> Total Sales</strong>,
        <strong> Quantity Sold</strong> aur
        <strong> Revenue</strong>.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Category sales details" />

      <h2 className="text-xl font-semibold mt-6">
        Date Range Select Karo
      </h2>
      <p>
        Aap <strong>Date Range</strong> select karke
        kisi specific period ke liye
        category-wise sales report dekh sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Select date range" />

      <h2 className="text-xl font-semibold mt-6">
        Category Wise Performance
      </h2>
      <p>
        Ye section aapko har category ki
        <strong>Performance</strong> dikhata hai
        jisse aap high aur low performing categories
        identify kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Category performance" />

      <h2 className="text-xl font-semibold mt-6">
        Comparison Aur Analysis
      </h2>
      <p>
        Aap different categories ka
        <strong>Comparison</strong> karke
        better inventory aur sales planning
        kar sakte ho.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Category comparison" />

      <h2 className="text-xl font-semibold mt-6">
        Export Sales By Category Report
      </h2>
      <p>
        Sales by category report ko
        <strong> Export</strong> karke
        future reference aur business analysis ke liye
        use kiya ja sakta hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Export sales by category report" />

    </div>
  );
};

export default SalesByCategory;
