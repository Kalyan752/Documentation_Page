import React from "react";

// Images
import img1 from "../../../../assets/ExploreReports/SalesReports/SalesByItems/image1.png";
import img2 from "../../../../assets/ExploreReports/SalesReports/SalesByItems/image2.png";
import img3 from "../../../../assets/ExploreReports/SalesReports/SalesByItems/image3.png";
import img4 from "../../../../assets/ExploreReports/SalesReports/SalesByItems/image4.png";
import img5 from "../../../../assets/ExploreReports/SalesReports/SalesByItems/image5.png";
import img6 from "../../../../assets/ExploreReports/SalesReports/SalesByItems/image6.png";

const SalesByItems: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Sales By Items
      </h1>

      <p>
        <strong>Sales By Items Report</strong> ka use karke
        aap har ek item ki sales performance ko
        detail me analyze kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Sales by items overview" />

      <h2 className="text-xl font-semibold mt-6">
        Sales By Items Report Kya Dikhata Hai?
      </h2>
      <p>
        Ye report item-wise sales details dikhata hai jaise
        <strong> Item Name</strong>,
        <strong> Quantity Sold</strong>,
        <strong> Total Sales Amount</strong> aur
        <strong> Profit</strong>.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Item sales details" />

      <h2 className="text-xl font-semibold mt-6">
        Date Range Select Karo
      </h2>
      <p>
        Aap <strong>Date Range</strong> select karke
        kisi specific period ke liye
        item-wise sales report dekh sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Select date range" />

      <h2 className="text-xl font-semibold mt-6">
        Item Wise Performance
      </h2>
      <p>
        Ye section aapko har item ki
        <strong>Performance</strong> dikhata hai
        jisse aap top aur low performing items
        easily identify kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Item performance" />

      <h2 className="text-xl font-semibold mt-6">
        Sorting Aur Filtering
      </h2>
      <p>
        Aap <strong>Sort</strong> aur <strong>Filter</strong> options ka use karke
        item sales data ko apni requirement ke hisaab se
        arrange kar sakte ho.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Sort and filter items" />

      <h2 className="text-xl font-semibold mt-6">
        Export Sales By Items Report
      </h2>
      <p>
        Sales by items report ko
        <strong> Export</strong> karke
        future analysis aur reporting ke liye
        use kiya ja sakta hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Export sales by items report" />

    </div>
  );
};

export default SalesByItems;
